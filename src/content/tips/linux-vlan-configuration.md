---
title: "Configure VLANs on Linux"
description: "Set up VLAN interfaces for network segmentation"
date: 2024-12-26
tags: ["linux", "networking", "vlan"]
---

## Manual Configuration

### Create VLAN Interface

```bash
# Create VLAN 100 on interface eth0
sudo ip link add link eth0 name eth0.100 type vlan id 100
```

### Assign IP Address

```bash
sudo ip addr add 10.100.0.2/16 dev eth0.100
```

### Enable Interface

```bash
sudo ip link set dev eth0.100 up
```

### Verify

```bash
ip addr show eth0.100
```

## Persistent Configuration with systemd

To survive reboots, create a systemd service.

Create `/etc/systemd/system/vlan-setup.service`:

```ini
[Unit]
Description=VLAN Configuration
Before=docker.service
After=network.target

[Service]
Type=oneshot
ExecStart=/usr/bin/ip link add link eth0 name eth0.100 type vlan id 100
ExecStart=/usr/bin/ip addr add 10.100.0.2/16 dev eth0.100
ExecStart=/usr/bin/ip link set dev eth0.100 up
RemainAfterExit=yes

[Install]
WantedBy=multi-user.target
```

Enable the service:

```bash
sudo systemctl enable vlan-setup.service
sudo systemctl start vlan-setup.service
```

## Using Netplan (Ubuntu 18.04+)

Edit `/etc/netplan/01-netcfg.yaml`:

```yaml
network:
  version: 2
  ethernets:
    eth0:
      dhcp4: yes
  vlans:
    eth0.100:
      id: 100
      link: eth0
      addresses:
        - 10.100.0.2/16
```

Apply changes:

```bash
sudo netplan apply
```

## Remove VLAN

```bash
sudo ip link delete eth0.100
```

## Check VLAN Configuration

```bash
# List all VLANs
ip -d link show type vlan

# Show specific VLAN
cat /proc/net/vlan/eth0.100
```
