---
sidebar_label: 'Services management'
sidebar_position: 3
id: services
title: 'Services management'
slug: /services-management
pagination_next: null
pagination_prev: null
---

# Services management

## List all available services

```bash
service --status-all
```

## Full service status

```bash
service icinga2 status
```

## Live service control

```bash
service icinga2 start|stop|restart|reload
```

## Boot time service control

```bash
systemctl enable|disable icinga2
```