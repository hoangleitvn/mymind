---
status: published
created: 2025-11-04
topic: DevTools
audiences:
- developers
- engineering-leaders
key_message: VS Code's automatic backup feature combined with AI assistance can recover deleted files - but committing to git regularly is still the best practice
hook_type: story-opening
target_hashtags:
- AI
- DevTools
- Engineering
- GitCommit
word_count: 320
published_date: '2025-11-07T10:15:04Z'
post_url: https://www.linkedin.com/feed/update/activity:7392504857976397825/
performance_metrics:
  impressions: 220
  member_reached: 107
  profile_views: 0
  followers: 0
  reactions: 2
  comments: 0
  reposts: 0
  saves: 0
  sends_on_linkedin: 0
---

VS Code's Hidden Safety Net + Claude = Saved My Day

Deleted my notes on over-engineering, architecture patterns, and mental models.

Gone. Not in Trash. Not committed to git.

That sinking feeling. I Googled "how to recover deleted files" (yes, we still Google everything first). Nothing helped. I was disappointed in myself. How did I let this happen?

Then, before leaving the office, I thought: Why not ask Claude?

So I asked: "I had notes on over-engineering and architecture patterns in llms.txt. I think I deleted or moved it somewhere. How can I find it?"

Claude saved me. Recovered a whole day's worth of notes.

Here's what it did:

**Step 1:** Checked git history → Nothing
**Step 2:** Searched Trash folder → Empty
**Step 3:** Used macOS Spotlight to scan entire system → Found references
**Step 4:** Discovered VS Code keeps automatic backups in:
`~/Library/Application Support/Code/User/History/`

Found it. Multiple versions. Fully recovered in 2 minutes.

I didn't even know VS Code had this feature. Claude systematically searched everywhere until it found the file.

**This is what good AI assistance looks like:**
Not just answering questions, but actually solving problems by trying multiple approaches.

But here's the real lesson:

**If I had committed my changes to git, none of this would be needed.**

Commit early. Commit often. Your future self will thank you.


**Recovery paths for VS Code auto-backups:**
- Mac: `~/Library/Application Support/Code/User/History/`
- Windows: `%APPDATA%\Code\User\History\`
- Linux: `~/.config/Code/User/History/`

Each file gets its own folder with timestamped versions.

**Have you ever been saved by an unexpected backup? Drop your story below.**

#AI #DevTools #Engineering #GitCommit
