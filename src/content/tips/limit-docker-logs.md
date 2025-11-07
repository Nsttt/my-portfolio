---
title: "Limit Docker Log File Sizes"
description: "Prevent Docker logs from consuming unlimited disk space"
date: 2023-10-22
tags: ["docker", "configuration", "storage"]
---

## Solution 1: Global Configuration

Edit `/etc/docker/daemon.json`:

```json
{
  "log-driver": "json-file",
  "log-opts": {
    "max-size": "10m",
    "max-file": "5"
  }
}
```

Then restart Docker:

```bash
sudo systemctl restart docker
```

## Solution 2: Per-Container (CLI)

```bash
docker run \
  --log-driver json-file \
  --log-opt max-size=10m \
  --log-opt max-file=5 \
  my-app:latest
```

## Solution 3: Docker Compose

```yaml
version: '3.8'
services:
  app:
    image: my-app:latest
    logging:
      driver: "json-file"
      options:
        max-size: "10m"
        max-file: "5"
```

## Check Current Log Sizes

```bash
# Find all Docker log files
du -sh /var/lib/docker/containers/*/*-json.log

# Total size of all logs
du -sh /var/lib/docker/containers/
```
