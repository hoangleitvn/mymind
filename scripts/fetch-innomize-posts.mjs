#!/usr/bin/env node
/**
 * Fetch all posts from Innomize CMS and convert to markdown files
 *
 * Usage: node scripts/fetch-innomize-posts.mjs
 *
 * Output structure:
 * - content/innomize/blog/{YYYY}/{MM}/{slug}.md (for blog posts)
 * - content/innomize/news/{YYYY}/{MM}/{slug}.md (for news posts)
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const WORKSPACE_ROOT = path.resolve(__dirname, '..');

const API_URL = 'https://cms.innomizetech.com/api/posts';

/**
 * Fetch all posts from the API (single request since we have <200 items)
 */
async function fetchAllPosts() {
  console.log('Fetching posts from Innomize CMS...');

  const url = `${API_URL}?limit=200&populate=author.*`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`API error: ${response.status} ${response.statusText}`);
  }

  const json = await response.json();
  const rawPosts = json.data || [];

  // Flatten the nested attributes structure and extract author
  const posts = rawPosts.map(p => {
    const authorData = p.attributes.author?.data?.attributes;
    return {
      id: p.id,
      ...p.attributes,
      authorName: authorData?.fullName || 'INNOMIZE',
    };
  });

  console.log(`  Total posts fetched: ${posts.length}`);
  return posts;
}

/**
 * Convert HTML content to markdown
 */
function htmlToMarkdown(html) {
  if (!html) return '';

  let md = html;

  // Remove script and style tags
  md = md.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '');
  md = md.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '');

  // Convert headings
  md = md.replace(/<h1[^>]*>([\s\S]*?)<\/h1>/gi, '# $1\n\n');
  md = md.replace(/<h2[^>]*>([\s\S]*?)<\/h2>/gi, '## $1\n\n');
  md = md.replace(/<h3[^>]*>([\s\S]*?)<\/h3>/gi, '### $1\n\n');
  md = md.replace(/<h4[^>]*>([\s\S]*?)<\/h4>/gi, '#### $1\n\n');
  md = md.replace(/<h5[^>]*>([\s\S]*?)<\/h5>/gi, '##### $1\n\n');
  md = md.replace(/<h6[^>]*>([\s\S]*?)<\/h6>/gi, '###### $1\n\n');

  // Convert paragraphs
  md = md.replace(/<p[^>]*>([\s\S]*?)<\/p>/gi, '$1\n\n');

  // Convert bold and italic
  md = md.replace(/<strong[^>]*>([\s\S]*?)<\/strong>/gi, '**$1**');
  md = md.replace(/<b[^>]*>([\s\S]*?)<\/b>/gi, '**$1**');
  md = md.replace(/<em[^>]*>([\s\S]*?)<\/em>/gi, '*$1*');
  md = md.replace(/<i[^>]*>([\s\S]*?)<\/i>/gi, '*$1*');

  // Convert links
  md = md.replace(/<a[^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/gi, '[$2]($1)');

  // Convert images
  md = md.replace(/<img[^>]*src="([^"]*)"[^>]*alt="([^"]*)"[^>]*\/?>/gi, '![$2]($1)');
  md = md.replace(/<img[^>]*alt="([^"]*)"[^>]*src="([^"]*)"[^>]*\/?>/gi, '![$1]($2)');
  md = md.replace(/<img[^>]*src="([^"]*)"[^>]*\/?>/gi, '![]($1)');

  // Convert lists
  md = md.replace(/<ul[^>]*>([\s\S]*?)<\/ul>/gi, (match, content) => {
    return content.replace(/<li[^>]*>([\s\S]*?)<\/li>/gi, '- $1\n') + '\n';
  });
  md = md.replace(/<ol[^>]*>([\s\S]*?)<\/ol>/gi, (match, content) => {
    let index = 0;
    return content.replace(/<li[^>]*>([\s\S]*?)<\/li>/gi, () => {
      index++;
      return `${index}. $1\n`;
    }) + '\n';
  });

  // Convert code blocks
  md = md.replace(/<pre[^>]*><code[^>]*class="[^"]*language-([^"]*)"[^>]*>([\s\S]*?)<\/code><\/pre>/gi, '```$1\n$2\n```\n\n');
  md = md.replace(/<pre[^>]*><code[^>]*>([\s\S]*?)<\/code><\/pre>/gi, '```\n$1\n```\n\n');
  md = md.replace(/<pre[^>]*>([\s\S]*?)<\/pre>/gi, '```\n$1\n```\n\n');

  // Convert inline code
  md = md.replace(/<code[^>]*>([\s\S]*?)<\/code>/gi, '`$1`');

  // Convert blockquotes
  md = md.replace(/<blockquote[^>]*>([\s\S]*?)<\/blockquote>/gi, (match, content) => {
    return content.split('\n').map(line => `> ${line}`).join('\n') + '\n\n';
  });

  // Convert line breaks
  md = md.replace(/<br\s*\/?>/gi, '\n');

  // Convert horizontal rules
  md = md.replace(/<hr\s*\/?>/gi, '\n---\n\n');

  // Remove divs but keep content
  md = md.replace(/<div[^>]*>([\s\S]*?)<\/div>/gi, '$1\n');

  // Remove spans but keep content
  md = md.replace(/<span[^>]*>([\s\S]*?)<\/span>/gi, '$1');

  // Remove remaining HTML tags
  md = md.replace(/<[^>]+>/g, '');

  // Decode HTML entities
  md = md.replace(/&nbsp;/g, ' ');
  md = md.replace(/&amp;/g, '&');
  md = md.replace(/&lt;/g, '<');
  md = md.replace(/&gt;/g, '>');
  md = md.replace(/&quot;/g, '"');
  md = md.replace(/&#39;/g, "'");
  md = md.replace(/&rsquo;/g, "'");
  md = md.replace(/&lsquo;/g, "'");
  md = md.replace(/&rdquo;/g, '"');
  md = md.replace(/&ldquo;/g, '"');
  md = md.replace(/&mdash;/g, '—');
  md = md.replace(/&ndash;/g, '–');
  md = md.replace(/&hellip;/g, '...');

  // Clean up excessive whitespace
  md = md.replace(/\n{3,}/g, '\n\n');
  md = md.trim();

  return md;
}

/**
 * Generate frontmatter for a post
 */
function generateFrontmatter(post) {
  const publishedDate = post.publishedOn || post.publishedAt?.split('T')[0] || post.createdAt?.split('T')[0];
  const createdDate = post.createdAt?.split('T')[0];
  const postType = post.postType === 'news' ? 'news' : 'blog';
  const url = `https://innomizetech.com/${postType}/${post.slug}`;

  const frontmatter = {
    title: post.title?.replace(/"/g, '\\"') || 'Untitled',
    type: post.postType === 'news' ? 'news' : 'article',
    status: 'imported',
    author: post.authorName,
    source: 'innomize-cms',
    source_id: post.id,
    slug: post.slug,
    url: url,
    created: createdDate,
    published: publishedDate,
    locale: post.locale || 'en',
  };

  if (post.excerpt) {
    frontmatter.excerpt = post.excerpt.replace(/"/g, '\\"').replace(/\n/g, ' ').substring(0, 200);
  }

  // Build YAML
  let yaml = '---\n';
  for (const [key, value] of Object.entries(frontmatter)) {
    if (value !== undefined && value !== null && value !== '') {
      if (typeof value === 'string' && (value.includes(':') || value.includes('#') || value.includes('\n'))) {
        yaml += `${key}: "${value}"\n`;
      } else {
        yaml += `${key}: ${value}\n`;
      }
    }
  }
  yaml += '---\n\n';

  return yaml;
}

/**
 * Get the output path for a post
 */
function getOutputPath(post) {
  const postType = post.postType === 'news' ? 'news' : 'blog';
  const publishedDate = post.publishedOn || post.publishedAt?.split('T')[0] || post.createdAt?.split('T')[0];

  if (!publishedDate) {
    console.warn(`  Warning: No date for post ${post.id}, using 'unknown'`);
    return path.join(WORKSPACE_ROOT, 'content', 'innomize', postType, 'unknown', `${post.slug}.md`);
  }

  const [year, month] = publishedDate.split('-');
  const slug = post.slug || `post-${post.id}`;

  return path.join(WORKSPACE_ROOT, 'content', 'innomize', postType, year, month, `${slug}.md`);
}

/**
 * Save a post to markdown file
 */
function savePost(post) {
  const outputPath = getOutputPath(post);
  const dir = path.dirname(outputPath);

  // Create directory if needed
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  // Generate content
  const frontmatter = generateFrontmatter(post);
  const title = `# ${post.title}\n\n`;
  const content = htmlToMarkdown(post.content);

  const markdown = frontmatter + title + content;

  // Write file
  fs.writeFileSync(outputPath, markdown, 'utf8');

  return outputPath;
}

/**
 * Main function
 */
async function main() {
  console.log('='.repeat(60));
  console.log('Innomize CMS Post Importer');
  console.log('='.repeat(60));

  try {
    // Fetch all posts
    const posts = await fetchAllPosts();

    // Group by type for stats
    const blogPosts = posts.filter(p => p.postType !== 'news');
    const newsPosts = posts.filter(p => p.postType === 'news');

    console.log(`\nPost breakdown:`);
    console.log(`  Blog posts: ${blogPosts.length}`);
    console.log(`  News posts: ${newsPosts.length}`);

    // Process each post
    console.log('\nConverting and saving posts...');

    const results = {
      blog: { success: 0, failed: 0 },
      news: { success: 0, failed: 0 }
    };

    for (const post of posts) {
      const type = post.postType === 'news' ? 'news' : 'blog';
      try {
        const outputPath = savePost(post);
        const relativePath = path.relative(WORKSPACE_ROOT, outputPath);
        console.log(`  ✓ ${relativePath}`);
        results[type].success++;
      } catch (error) {
        console.error(`  ✗ Failed to save post ${post.id}: ${error.message}`);
        results[type].failed++;
      }
    }

    // Summary
    console.log('\n' + '='.repeat(60));
    console.log('Summary:');
    console.log(`  Blog posts: ${results.blog.success} saved, ${results.blog.failed} failed`);
    console.log(`  News posts: ${results.news.success} saved, ${results.news.failed} failed`);
    console.log('='.repeat(60));

  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}

main();
