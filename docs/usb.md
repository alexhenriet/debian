---
sidebar_label: 'Bootable USB'
sidebar_position: 5
id: usb
title: 'Bootable USB'
slug: /bootable-usb
pagination_next: null
pagination_prev: null
---

# Bootable USB

## Find device

```bash
lsblk
lsusb
df -h
fdisk
```

## Check USB Drive Information

```bash
blkid /dev/sdX
```

## Mount device

```bash
mount /dev/sdX1 /mnt/usb
umount /dev/sdX1
```

## Partition device 
```bash
fdisk /dev/sdX1 
p # print parition table
d # delete partition 
n # create new partition
w # write changes
```

## Format device

```bash
mkfs.vfat /dev/sdX1
```

## Write ISO to device 

```bash
dd if=/path/to/debian.iso of=/dev/sdX bs=4M status=progress
sync
umount /dev/sdX
udisksctl unmount -b /dev/sdX
udisksctl power-off -b /dev/sdX
```

## Dealing with bad sectors

```bash
fsck -y /dev/sdX1
badblocks -v /dev/sdX
```