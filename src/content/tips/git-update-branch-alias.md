---
title: "Git Update Branch Alias"
description: "Merge latest default branch into current branch with one command"
date: 2023-09-29
tags: ["git", "cli", "productivity"]
---

Create a shell alias that does it all:

```bash
alias gub='git symbolic-ref --short HEAD > /tmp/current-branch && \
  git checkout $(git remote show origin | awk "/HEAD branch/ { print \$NF }") && \
  git pull && \
  git checkout $(cat /tmp/current-branch) && \
  git merge --no-edit $(git remote show origin | awk "/HEAD branch/ { print \$NF }") && \
  rm /tmp/current-branch'
```

## How to Install

Add to your `~/.bashrc` or `~/.zshrc`:

```bash
echo "alias gub='git symbolic-ref --short HEAD > /tmp/current-branch && git checkout \$(git remote show origin | awk \"/HEAD branch/ { print \\\$NF }\") && git pull && git checkout \$(cat /tmp/current-branch) && git merge --no-edit \$(git remote show origin | awk \"/HEAD branch/ { print \\\$NF }\") && rm /tmp/current-branch'" >> ~/.bashrc

source ~/.bashrc
```

## Usage

From any feature branch, simply run:

```bash
gub
```

## Handle Merge Conflicts

If there are conflicts, the alias stops and you can resolve them manually:

```bash
# Fix conflicts in your editor
git add .
git commit
```

## Alternative: Rebase

If you prefer rebasing:

```bash
alias gur='git symbolic-ref --short HEAD > /tmp/current-branch && \
  git checkout $(git remote show origin | awk "/HEAD branch/ { print \$NF }") && \
  git pull && \
  git checkout $(cat /tmp/current-branch) && \
  git rebase $(git remote show origin | awk "/HEAD branch/ { print \$NF }") && \
  rm /tmp/current-branch'
```
