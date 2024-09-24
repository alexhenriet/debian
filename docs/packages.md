---
sidebar_label: 'Packages management'
sidebar_position: 3
id: packages
title: 'Packages management'
slug: /packages-management
pagination_next: null
pagination_prev: null
---

# Packages management

## List all installed packages

```bash
dpkg -l
apt list --installed
```

## Display package details

```bash
dpkg -s 7zip
apt-cache show 7zip
apt show 7zip
```

## Display files installed by package

```bash
dpkg -L 7zip
```

## Display package providing file 

```bash
dpkg -S /usr/bin/7z
```

## Search package

```bash
apt-cache search ircd
```

## List orphans

```bash
deborphan # Orphan libraries
deborphan -a # All orphan packages
```

## Auto check for updates with notification

```bash
apt install apticron
```

## Select best source for APT

```bash
netselect-apt -c de -t 5 -a amd64 -n bookworm
```
**ICMP** must be allowed in the firewall.

## Sample APT sources.list 

```bash
# cat /etc/apt/sources.list
deb https://debian.netcologne.de/debian/ bookworm main contrib non-free non-free-firmware
deb https://debian.netcologne.de/debian/ bookworm-updates main contrib non-free non-free-firmware
deb https://debian.netcologne.de/debian/ bookworm-proposed-updates main contrib non-free non-free-firmware
deb https://security.debian.org/debian-security bookworm-security main contrib non-free-firmware
```