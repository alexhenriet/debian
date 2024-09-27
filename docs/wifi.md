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

## Network Manager package

```bash
apt-get install network-manager-gnome
systemctl restart NetworkManager
systemctl restart NetworkManager
systemctl status NetworkManager
```

## Network Manager client nmcli
```bash
nmcli device
nmcli device status
nmcli device set wlp2s0 managed yes
nmcli device wifi list
nmcli device wifi connect "SSID" password "your_password"
nmcli device wifi connect "SSID" --ask
nmcli radio wifi on
nmcli radio all
nmcli connection show
nmcli connection show "connection_name"
nmcli connection show "connection_name" --details
nmcli connection add type wifi ifname wlan0 ssid "New_SSID"
nmcli connection modify "connection_name" 802-11-wireless.ssid "New_SSID"
nmcli connection modify "connection_name" ipv4.addresses 192.168.1.10/24
nmcli connection modify "connection_name" ipv4.gateway 192.168.1.1
nmcli connection modify "connection_name" ipv4.dns "8.8.8.8"
nmcli connection modify "connection_name" ipv4.method manual
nmcli connection up "connection_name"
nmcli connection down "connection_name"
nmcli connection delete "connection_name"
nmcli connection export
nmcli connection import
nmcli -f ALL connection show --active

```

## Wireless Device Management using iw
```bash
iw dev
iw dev <interface> link
iw dev <interface> scan
iw dev <interface> connect <SSID>
iw dev <interface> disconnect
iw dev <interface> set power_save on
iw dev <interface> set type ibss
iw dev <interface> set freq <frequency>
```

## Wireless Configuration using iwconfig
```bash
iwconfig
iwconfig [interface] essid "YourNetworkName"
iwconfig [interface] mode [mode_type]
iwconfig [interface] freq [frequency]
iwconfig [interface] channel [channel_number]
iwconfig [interface] key [encryption_key]
iwconfig [interface] power off
iwconfig [interface] power on
iwconfig wlan0 essid "MyNetwork" mode Managed
```

## IP Address Management
```bash
ip link show
ip addr add 192.168.1.10/24 dev wlan0
ip addr del 192.168.1.10/24 dev wlan0
ip addr flush dev wlan0
ip link set wlan0 up
ip link set wlan0 down
ip addr show
ip addr show wlan0
ip route add default via 192.168.1.1
ip route add default via 192.168.1.1 dev wlan0
ip route show
ip route flush
```

## Scan for Wireless Networks using iwlist
```bash
iwlist wlp2s0 scan
```

## PCI Device Information
```bash
lspci -nn|grep -i network
lspci -k -s 02:00.0
modinfo <driver_name>
```

## Configure WPA Supplicant 
```bash
cat /etc/wpa_supplicant/wpa_supplicant.conf
network={
  ssid="SSID_NAME"
  psk="NETWORK_KEY_IN_CLEAR"
}
```

## Hash WPA Supplicant password
```bash
wpa_passphrase <MYSSID> <YOURPASSWORD>
```

## WPA Supplicant Commands
```bash
wpa_supplicant -B -i wlp3s0 -c /etc/wpa_supplicant/wpa_supplicant.conf
wpa_cli status
wpa_cli scan
wpa_cli scan_results
wpa_cli add_network
wpa_cli set_network <network_id> ssid "<SSID>"
wpa_cli set_network <network_id> psk "<password>"
wpa_cli enable_network <network_id>
wpa_cli save_config
wpa_cli reassociate
wpa_cli list_networks
wpa_cli terminate
```

## DHCP Client
```bash
dhclient wlp3s0 
dhclient -r wlp3s0
```

## Configure Network Interface old way
```bash
ifconfig wlp3s0 192.168.1.10 netmask 255.255.255.0
```

## Set Default Gateway old way
```bash
route add default gw 192.168.1.1
route -n
```

## RF Kill List
```bash
rfkill list
```

## Load and Unload Drivers
```bash
modprobe driver
modprobe -r driver
```

## List loaded modules
```bash
lsmod
```

## Blacklist a driver
```bash
echo "blacklist <driver_name>" | sudo tee -a /etc/modprobe.d/blacklist.conf
```

## Reload udev rules for device management

```bash
udevadm control --reload-rules
```

## Restart networking service

```bash
sudo systemctl restart networking
```

## Display ARP cache

```bash
arp -a
```