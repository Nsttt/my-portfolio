---
title: "Custom Docker IP Ranges"
description: "Configure Docker to use specific IP address ranges for containers"
date: 2023-07-22
tags: ["docker", "networking", "configuration"]
---

Edit `/etc/docker/daemon.json`:

```json
{
  "default-address-pools": [
    {
      "base": "10.10.0.0/16",
      "size": 24
    }
  ]
}
```

## Configuration Explained

- **base**: The main IP range Docker can use
- **size**: Subnet size for each network (24 = /24 subnet mask)

## Apply Changes

Restart Docker daemon:

```bash
sudo systemctl restart docker
```
