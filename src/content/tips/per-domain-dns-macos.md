---
title: "Per-Domain DNS Configuration on macOS"
description: "Set different DNS servers for specific domains using resolver files"
date: 2024-03-30
tags: ["macos", "dns", "networking"]
---

## Setup

Create a resolver file for your domain:

```bash
sudo bash -c 'echo "nameserver 10.0.0.1" > /etc/resolver/nst.local'
```

This tells macOS to use `10.0.0.1` as the DNS server for any `*.nst.local` domain.

## Multiple Nameservers

Add multiple DNS servers:

```bash
sudo bash -c 'cat > /etc/resolver/internal.company.com << EOF
nameserver 10.0.0.1
nameserver 10.0.0.2
domain internal.company.com
search internal.company.com
EOF'
```

## Verify Configuration

Check your resolver file:

```bash
cat /etc/resolver/nst.local
```

Test DNS resolution:

```bash
scutil --dns
```

## Remove Configuration

Delete the resolver file when done:

```bash
sudo rm /etc/resolver/nst.local
```

## Common Use Cases

**VPN Development**:
```bash
sudo bash -c 'echo "nameserver 192.168.1.1" > /etc/resolver/dev.local'
```

**Kubernetes Local Development**:
```bash
sudo bash -c 'echo "nameserver 10.96.0.10" > /etc/resolver/cluster.local'
```

**Company Intranet**:
```bash
sudo bash -c 'echo "nameserver 172.16.0.1" > /etc/resolver/corp.example.com'
```
