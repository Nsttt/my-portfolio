---
title: "Get All Docker Container IPs"
description: "Quick command to list all running Docker containers with their private IP addresses"
date: 2023-07-22
tags: ["docker", "networking", "cli"]
---

```bash
sudo docker inspect $(docker ps -q) \
  --format='{{ printf "%-50s" .Name}} {{range .NetworkSettings.Networks}}{{.IPAddress}} {{end}}'
```

## Example Output

```
/zerotier
/ntp                                               10.3.10.8
/nodered                                           10.3.10.11
/n8n                                               10.3.10.4
/ssh                                               10.3.10.9
/code                                              10.3.10.7
/semaphore                                         10.3.10.6
```

**Note**: If your user is in the `docker` group, you can omit `sudo`.
