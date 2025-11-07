---
title: "Ubuntu Server Initial Configuration"
description: "Essential commands to configure a fresh Ubuntu server"
date: 2023-09-28
tags: ["linux", "ubuntu", "system-administration"]
---

## Change Hostname

Set a descriptive hostname:

```bash
sudo hostnamectl set-hostname myserver
```

Verify:

```bash
hostnamectl
```

## Configure Timezone

List available timezones:

```bash
timedatectl list-timezones | grep Europe
```

Set your timezone:

```bash
sudo timedatectl set-timezone Europe/Madrid
```

Verify:

```bash
timedatectl
```

## Enable Automatic Security Updates

Configure unattended upgrades:

```bash
sudo dpkg-reconfigure unattended-upgrades
```

Select **Yes** to enable automatic security updates.

## Set Default Editor

Choose your preferred editor:

```bash
sudo update-alternatives --config editor
```

## Enable Root Access Without Password

**Warning**: Only do this on secure, isolated systems.

Edit sudoers file:

```bash
sudo visudo
```

Add this line:

```
yourusername ALL=(ALL) NOPASSWD: ALL
```

Or for a group:

```
%sudo ALL=(ALL) NOPASSWD: ALL
```

## Disable Root SSH Login

Edit SSH config:

```bash
sudo nano /etc/ssh/sshd_config
```

Set:

```
PermitRootLogin no
PasswordAuthentication no
```

Restart SSH:

```bash
sudo systemctl restart sshd
```

## Set Up Swap

For servers with limited RAM:

```bash
sudo fallocate -l 2G /swapfile
sudo chmod 600 /swapfile
sudo mkswap /swapfile
sudo swapon /swapfile
```

Make permanent:

```bash
echo '/swapfile none swap sw 0 0' | sudo tee -a /etc/fstab
```
