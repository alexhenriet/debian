---
sidebar_label: 'Wifi management'
sidebar_position: 4
id: wifi
title: 'Wifi management'
slug: /wifi-management
pagination_next: null
pagination_prev: null
---

# Wifi management

## Show IP addresses

```bash
ip addr
```

## List Network Interfaces

```bash
ifconfig
```

## Show Wireless Interfaces
```bash
iwconfig
```

## List PCI Devices Related to Network
```bash
lspci -nn|grep -i network
```

## Scan for Available WiFi Networks
```bash
iwlist wlp3s0 scan|grep ESSID
```

## Configure WPA Supplicant 
```bash
# cat /etc/wpa_supplicant/wpa_supplicant.conf
network={
  ssid="SSID_NAME"
  psk="NETWORK_KEY_IN_CLEAR"
}
```

## Connect to WiFi Using WPA Supplicant
```bash
wpa_supplicant -B -i wlp3s0 -c /etc/wpa_supplicant/wpa_supplicant.conf
```

## Obtain IP Address via DHCP
```bash
dhclient wlp3s0 
```

## Assign Static IP Address
```bash
ifconfig wlp3s0 192.168.1.10 netmask 255.255.255.0
```

## Add Default Gateway
```bash
route add default gw 192.168.1.1
```

## Install Network Manager GNOME
```bash
apt-get install network-manager-gnome
systemctl restart NetworkManager
systemctl status NetworkManager
```

## List Available WiFi Networks and connect using nmcli
```bash
nmcli device wifi list
nmcli device wifi connect "SSID" password "votre_mot_de_passe"
```

## List RF Kill Switch Status
```bash
rfkill list
```

## Bring Interface Up and down
```bash
ip link set wlp3s0 up
ip link set wlp3s0 down
```

## Show Wireless Device Information
```bash
iw dev
```

## Show Link Status of Wireless Device
```bash
iw dev wlp3s0 link
```