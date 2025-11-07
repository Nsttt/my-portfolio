---
title: "Expose Localhost Services with Socat"
description: "Make localhost-only services accessible on your network"
date: 2023-09-12
tags: ["networking", "socat", "tools"]
---

## Basic Usage

```bash
socat TCP-LISTEN:1880,fork TCP:127.0.0.1:1880
```

## What This Does

- **TCP-LISTEN:1880**: Listen on port 1880 on all interfaces
- **fork**: Handle multiple connections simultaneously
- **TCP:127.0.0.1:1880**: Forward to localhost port 1880

## Bind to Specific Interface

Only listen on a specific network interface:

```bash
socat TCP-LISTEN:1880,bind=192.168.1.100,fork TCP:127.0.0.1:1880
```

## Common Use Cases

### Expose Docker Container UI

```bash
# Container only listens on localhost:8080
socat TCP-LISTEN:8080,fork TCP:127.0.0.1:8080
```

### Access Development Server

```bash
# Frontend dev server on localhost:3000
socat TCP-LISTEN:3000,fork TCP:127.0.0.1:3000
```

### Proxy Database Connection

```bash
# PostgreSQL on localhost:5432
socat TCP-LISTEN:5432,fork TCP:127.0.0.1:5432
```

## Run as Background Service

```bash
# Start in background
socat TCP-LISTEN:1880,fork TCP:127.0.0.1:1880 &

# Save the PID
echo $! > /tmp/socat.pid

# Stop later
kill $(cat /tmp/socat.pid)
```

## Systemd Service

Create `/etc/systemd/system/socat-proxy.service`:

```ini
[Unit]
Description=Socat TCP Proxy
After=network.target

[Service]
Type=simple
ExecStart=/usr/bin/socat TCP-LISTEN:1880,fork TCP:127.0.0.1:1880
Restart=always

[Install]
WantedBy=multi-user.target
```

Enable and start:

```bash
sudo systemctl enable socat-proxy.service
sudo systemctl start socat-proxy.service
```

## Security Warning

This exposes your service to your network. Consider:
- Using firewall rules to limit access
- Adding authentication
- Using SSH tunneling for sensitive services

## Check Who's Connected

```bash
sudo netstat -tnp | grep :1880
```
