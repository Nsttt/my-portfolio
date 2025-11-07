---
title: "Debug Docker Container Networking with nsenter"
description: "Enter a container's network namespace to troubleshoot connectivity"
date: 2023-10-20
tags: ["docker", "networking", "debugging"]
---

## Step-by-Step

### 1. Find the Container

```bash
docker ps | grep my-container
```

Note the container ID (e.g., `709a8f3b4c12`).

### 2. Get the Network Namespace Path

```bash
docker inspect 709 | grep Sandbox
```

Output:
```
"SandboxKey": "/var/run/docker/netns/f695a1f68d98"
```

### 3. Enter the Network Namespace

```bash
sudo nsenter --net=/var/run/docker/netns/f695a1f68d98
```

You now have a shell inside the container's network namespace with access to all host networking tools!

## What You Can Do

Now use any networking tool from the host:

```bash
# Check interfaces
ip addr show

# Test connectivity
ping 8.8.8.8

# Check open ports
netstat -tlnp

# Trace routes
traceroute example.com

# Inspect DNS
nslookup example.com

# Check iptables rules
iptables -L -n
```

## Exit the Namespace

```bash
exit
```
