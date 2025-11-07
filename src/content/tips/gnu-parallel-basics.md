---
title: "GNU Parallel for Concurrent Tasks"
description: "Run shell commands in parallel to speed up batch operations"
date: 2023-09-09
tags: ["bash", "performance", "cli"]
---

## Basic Example

Run the same command on multiple files:

```bash
parallel gzip ::: *.txt
```

This compresses all `.txt` files in parallel, using all CPU cores.

## Useful Options

```bash
parallel --jobs 5 --delay 2 --timeout 3600 --results out.csv \
  bash {1} ::: file1.sh file2.sh file3.sh ::: {1..10}
```

- `--jobs 5`: Run maximum 5 concurrent jobs
- `--delay 2`: Wait 2 seconds between starting jobs
- `--timeout 3600`: Kill jobs running longer than 1 hour
- `--results out.csv`: Output results to CSV
- `--shuf`: Randomize execution order

## Real-World Use Case

Run flaky tests multiple times:

```bash
tests=(test1.sh test2.sh test3.sh)

parallel --progress --jobs 5 --results test-results.csv \
  bash {1} ::: ${tests[@]} ::: {1..10}
```

## Installation

```bash
# Ubuntu/Debian
sudo apt install parallel

# macOS
brew install parallel
```
