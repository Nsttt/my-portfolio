---
title: "Git Push Current Branch Shortcut"
description: "Push your current branch without typing the full branch name"
date: 2023-07-22
tags: ["git", "cli", "productivity"]
---

Use `HEAD` to reference the current branch:

```bash
# Do this
git push -u origin HEAD
```

## First Push Workflow

```bash
# Create and switch to new branch
git checkout -b feature/new-feature

# Make changes and commit
git add .
git commit -m "Add new feature"

# Push using HEAD
git push -u origin HEAD
```

## One-Time Setup

After the first push with `-u`, subsequent pushes are even simpler:

```bash
git push
```
