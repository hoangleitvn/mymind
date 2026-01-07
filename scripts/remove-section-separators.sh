#!/bin/bash
# Remove --- section separators from markdown files
# Preserves YAML frontmatter delimiters (first two ---)

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Default to dry-run
DRY_RUN=true
VERBOSE=false

usage() {
    echo "Usage: $0 [OPTIONS] [PATH]"
    echo ""
    echo "Remove --- section separators from markdown files."
    echo "Preserves YAML frontmatter delimiters."
    echo ""
    echo "Options:"
    echo "  --apply     Actually modify files (default is dry-run)"
    echo "  --verbose   Show detailed output"
    echo "  --help      Show this help"
    echo ""
    echo "Examples:"
    echo "  $0 plugins/              # Dry-run on plugins/"
    echo "  $0 --apply plugins/      # Actually modify files"
    echo "  $0 --apply .             # Process all markdown in current dir"
}

# Parse arguments
while [[ $# -gt 0 ]]; do
    case $1 in
        --apply)
            DRY_RUN=false
            shift
            ;;
        --verbose)
            VERBOSE=true
            shift
            ;;
        --help)
            usage
            exit 0
            ;;
        *)
            SEARCH_PATH="$1"
            shift
            ;;
    esac
done

SEARCH_PATH="${SEARCH_PATH:-.}"

echo "Scanning: $SEARCH_PATH"
if $DRY_RUN; then
    echo -e "${YELLOW}DRY RUN - no files will be modified${NC}"
    echo "Use --apply to actually modify files"
fi
echo ""

# Find all markdown files
files_modified=0
separators_removed=0

while IFS= read -r -d '' file; do
    # Count --- in file
    total_separators=$(grep -c "^---$" "$file" 2>/dev/null || true)
    total_separators=${total_separators:-0}

    # Skip files with only frontmatter (2 or fewer ---)
    if [ "$total_separators" -le 2 ] 2>/dev/null; then
        continue
    fi

    # Count section separators (--- with blank line before, after line 10)
    # This pattern matches --- that act as section dividers
    section_seps=$(awk '
        NR > 10 && /^---$/ && prev == "" { count++ }
        { prev = $0 }
        END { print count+0 }
    ' "$file")

    if [ "$section_seps" -gt 0 ]; then
        echo -e "${GREEN}$file${NC}: $section_seps section separator(s)"

        if ! $DRY_RUN; then
            # Create temp file
            tmp_file=$(mktemp)

            # Process: remove --- and the blank line before them (after frontmatter)
            awk '
                BEGIN { in_frontmatter = 0; prev = ""; has_prev = 0 }
                NR == 1 && /^---$/ { in_frontmatter = 1; print; next }
                in_frontmatter && /^---$/ { in_frontmatter = 0; print; next }
                in_frontmatter { print; next }
                # Past frontmatter - buffer lines to handle blank + --- pairs
                {
                    # If current line is --- and prev was blank, skip both
                    if (/^---$/ && prev == "") {
                        has_prev = 0
                        next
                    }
                    # Print buffered line
                    if (has_prev) print prev
                    prev = $0
                    has_prev = 1
                }
                END { if (has_prev) print prev }
            ' "$file" > "$tmp_file"

            # Replace original
            mv "$tmp_file" "$file"

            if $VERBOSE; then
                echo "  → Modified"
            fi
        fi

        ((files_modified++))
        ((separators_removed += section_seps))
    fi
done < <(find "$SEARCH_PATH" -name "*.md" -type f -print0)

echo ""
echo "Summary:"
echo "  Files with separators: $files_modified"
echo "  Separators to remove: $separators_removed"

if $DRY_RUN && [ "$files_modified" -gt 0 ]; then
    echo ""
    echo -e "${YELLOW}Run with --apply to modify files${NC}"
fi
