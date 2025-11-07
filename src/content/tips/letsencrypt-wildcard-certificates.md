---
title: "Let's Encrypt Wildcard Certificates"
description: "Request and renew wildcard SSL certificates using DNS validation"
date: 2023-09-18
tags: ["ssl", "security", "certificates"]
---

## Prerequisites

Install certbot:

```bash
sudo apt install certbot
```

## Request Wildcard Certificate

```bash
sudo certbot certonly \
  --manual \
  --preferred-challenges dns \
  -d *.example.com \
  -d example.com
```

**Note**: Include both `*.example.com` and `example.com` if you want to cover the root domain too.

## DNS Challenge Process

Certbot will prompt you to create a TXT record:

```
Please deploy a DNS TXT record under the name
_acme-challenge.example.com with the following value:

abc123def456ghi789

Before continuing, verify the record is deployed.
```

## Add DNS Record

In your DNS provider (Cloudflare, Route53, etc.):

```
Type: TXT
Name: _acme-challenge
Value: abc123def456ghi789
TTL: 300
```

## Verify DNS Propagation

Before pressing Enter in certbot:

```bash
# Linux
dig TXT _acme-challenge.example.com

# macOS
nslookup -type=TXT _acme-challenge.example.com
```

Wait until the TXT record appears (usually 1-5 minutes).

## Certificate Location

Certificates are saved to:

```
/etc/letsencrypt/live/example.com/
├── fullchain.pem
├── privkey.pem
├── cert.pem
└── chain.pem
```

## Use in Web Server

### Nginx

```nginx
server {
  listen 443 ssl;
  server_name *.example.com;

  ssl_certificate /etc/letsencrypt/live/example.com/fullchain.pem;
  ssl_certificate_key /etc/letsencrypt/live/example.com/privkey.pem;
}
```

### Apache

```apache
<VirtualHost *:443>
  SSLEngine on
  SSLCertificateFile /etc/letsencrypt/live/example.com/cert.pem
  SSLCertificateKeyFile /etc/letsencrypt/live/example.com/privkey.pem
  SSLCertificateChainFile /etc/letsencrypt/live/example.com/chain.pem
</VirtualHost>
```

## Renewal

Wildcard certificates require manual DNS challenges, so automatic renewal needs scripting.

### Manual Renewal

```bash
sudo certbot renew --manual
```

### Automated Renewal with DNS API

Use certbot plugins for your DNS provider:

```bash
# Cloudflare
sudo apt install python3-certbot-dns-cloudflare

sudo certbot certonly \
  --dns-cloudflare \
  --dns-cloudflare-credentials /etc/cloudflare.ini \
  -d *.example.com \
  -d example.com
```

Cloudflare credentials file:

```ini
dns_cloudflare_api_token = your-api-token
```

## Check Expiration

```bash
sudo certbot certificates
```

## Common Issues

**Challenge validation failed**: DNS record not propagated yet. Wait longer.

**Rate limit exceeded**: Let's Encrypt has rate limits. See [their documentation](https://letsencrypt.org/docs/rate-limits/).
