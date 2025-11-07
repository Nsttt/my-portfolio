---
title: "Deploy SSH Keys to Multiple Servers"
description: "Automate SSH key deployment across your infrastructure"
date: 2024-06-02
tags: ["ssh", "security", "automation"]
---

## The Script

Create `deploy-ssh-keys.sh`:

```bash
#!/bin/bash

# Your SSH public key
PUBLIC_KEY="ssh-rsa AAAAB3NzaC1yc2EA... your-email@example.com"

# List of hosts to deploy to
HOSTS=(
  "server1.example.com"
  "server2.example.com"
  "192.168.1.100"
)

# Root password (for initial deployment)
ROOT_PASSWORD="your-root-password"

for HOST in "${HOSTS[@]}"; do
  echo "Deploying to $HOST..."

  # Create temp directory
  TEMP_DIR=$(mktemp -d)

  # Write public key
  echo "$PUBLIC_KEY" > "$TEMP_DIR/id_rsa.pub"

  # Deploy using sshpass (install with: apt install sshpass)
  sshpass -p "$ROOT_PASSWORD" ssh-copy-id -i "$TEMP_DIR/id_rsa.pub" -o StrictHostKeyChecking=no root@$HOST

  # Verify fingerprint
  ssh-keygen -lf "$TEMP_DIR/id_rsa.pub"

  # Cleanup
  rm -rf "$TEMP_DIR"

  echo "✓ Deployed to $HOST"
done

echo "All keys deployed!"
```

## Prerequisites

Install `sshpass`:

```bash
# Ubuntu/Debian
sudo apt install sshpass

# macOS
brew install hudochenkov/sshpass/sshpass
```

## Usage

1. Edit the script with your public key and hosts
2. Make it executable:

```bash
chmod +x deploy-ssh-keys.sh
```

3. Run it:

```bash
./deploy-ssh-keys.sh
```

## Security Considerations

**Never commit passwords to git!** Better alternatives:

### Use SSH Agent Forwarding

```bash
ssh -A jump-host
# From jump host, deploy to other servers
```

### Use Environment Variables

```bash
export ROOT_PASSWORD="secret"
./deploy-ssh-keys.sh
unset ROOT_PASSWORD
```

### Read Password Interactively

Replace the password line with:

```bash
read -s -p "Enter root password: " ROOT_PASSWORD
echo
```

## Verify Deployment

Test SSH access to each server:

```bash
for HOST in server1 server2 server3; do
  echo "Testing $HOST..."
  ssh -o BatchMode=yes -o ConnectTimeout=5 root@$HOST 'echo OK'
done
```

## Advanced: Deploy Different Keys per Environment

```bash
#!/bin/bash

deploy_key() {
  local env=$1
  local key_file="$HOME/.ssh/id_rsa_${env}.pub"
  local hosts_file="hosts_${env}.txt"

  while IFS= read -r host; do
    ssh-copy-id -i "$key_file" "$host"
  done < "$hosts_file"
}

deploy_key "production"
deploy_key "staging"
```
