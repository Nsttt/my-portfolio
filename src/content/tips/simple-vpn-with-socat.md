---
title: "Simple VPN with Socat"
description: "Create a quick VPN tunnel between two devices using socat without encryption"
date: 2023-07-22
tags: ["networking", "vpn", "socat"]
---

## Server Setup

On your server machine, create a TUN interface and listen for connections:

```bash
socat TCP-LISTEN:4443 TUN:192.168.255.2/24,up
```

## Client Setup

On your client machine, connect to the server:

```bash
socat TCP:SERVER_IP:4443 TUN:192.168.255.1/24,up
```

**Warning**: This creates an **unencrypted** tunnel. Only use in trusted networks. For production, use WireGuard or OpenVPN instead.
