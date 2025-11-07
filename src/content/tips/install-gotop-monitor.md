---
title: "Install Gotop System Monitor"
description: "A modern, colorful alternative to top and htop"
date: 2023-07-31
tags: ["linux", "monitoring", "tools"]
---

## Installation

### Ubuntu/Debian

```bash
curl -sSL https://github.com/xxxserxxx/gotop/releases/download/v4.2.0/gotop_v4.2.0_linux_amd64.deb -o gotop.deb
sudo dpkg -i gotop.deb
sudo apt-get install -f
sudo ln -s /usr/bin/gotop /usr/local/bin/gotop
```

### Other Systems

Check the [releases page](https://github.com/xxxserxxx/gotop/releases) for:
- Other Linux distributions
- macOS binaries
- ARM builds

## Usage

Simply run:

```bash
gotop
```

Press `?` inside gotop to see all keyboard shortcuts.
