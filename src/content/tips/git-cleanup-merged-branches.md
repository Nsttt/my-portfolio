---
title: "Clean Up Merged Git Branches"
description: "Remove local branches that no longer exist on remote"
date: 2023-07-22
tags: ["git", "cli", "maintenance"]
---

```bash
git remote prune origin
```

## See What Will Be Removed

Preview before removing:

```bash
git remote prune origin --dry-run
```

## Delete Local Branches Too

If you also want to delete the local copies:

```bash
# Delete all branches merged into main
git branch --merged main | grep -v "main" | xargs git branch -d
```
