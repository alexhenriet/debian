"use strict";(self.webpackChunkdebian_2=self.webpackChunkdebian_2||[]).push([[97],{1724:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>d});var s=i(4848),a=i(8453);const l={sidebar_label:"Wifi management",sidebar_position:4,id:"wifi",title:"Wifi management",slug:"/wifi-management",pagination_next:null,pagination_prev:null},t="Wifi management",r={id:"wifi",title:"Wifi management",description:"Show IP addresses",source:"@site/docs/wifi.md",sourceDirName:".",slug:"/wifi-management",permalink:"/debian/wifi-management",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_label:"Wifi management",sidebar_position:4,id:"wifi",title:"Wifi management",slug:"/wifi-management",pagination_next:null,pagination_prev:null},sidebar:"tutorialSidebar"},c={},d=[{value:"Show IP addresses",id:"show-ip-addresses",level:2},{value:"List Network Interfaces",id:"list-network-interfaces",level:2},{value:"Show Wireless Interfaces",id:"show-wireless-interfaces",level:2},{value:"List PCI Devices Related to Network",id:"list-pci-devices-related-to-network",level:2},{value:"Scan for Available WiFi Networks",id:"scan-for-available-wifi-networks",level:2},{value:"Configure WPA Supplicant",id:"configure-wpa-supplicant",level:2},{value:"Connect to WiFi Using WPA Supplicant",id:"connect-to-wifi-using-wpa-supplicant",level:2},{value:"Obtain IP Address via DHCP",id:"obtain-ip-address-via-dhcp",level:2},{value:"Assign Static IP Address",id:"assign-static-ip-address",level:2},{value:"Add Default Gateway",id:"add-default-gateway",level:2},{value:"Install Network Manager GNOME",id:"install-network-manager-gnome",level:2},{value:"List Available WiFi Networks and connect using nmcli",id:"list-available-wifi-networks-and-connect-using-nmcli",level:2},{value:"List RF Kill Switch Status",id:"list-rf-kill-switch-status",level:2},{value:"Bring Interface Up and down",id:"bring-interface-up-and-down",level:2},{value:"Show Wireless Device Information",id:"show-wireless-device-information",level:2},{value:"Show Link Status of Wireless Device",id:"show-link-status-of-wireless-device",level:2}];function o(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",pre:"pre",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"wifi-management",children:"Wifi management"})}),"\n",(0,s.jsx)(n.h2,{id:"show-ip-addresses",children:"Show IP addresses"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"ip addr\n"})}),"\n",(0,s.jsx)(n.h2,{id:"list-network-interfaces",children:"List Network Interfaces"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"ifconfig\n"})}),"\n",(0,s.jsx)(n.h2,{id:"show-wireless-interfaces",children:"Show Wireless Interfaces"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"iwconfig\n"})}),"\n",(0,s.jsx)(n.h2,{id:"list-pci-devices-related-to-network",children:"List PCI Devices Related to Network"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"lspci -nn|grep -i network\n"})}),"\n",(0,s.jsx)(n.h2,{id:"scan-for-available-wifi-networks",children:"Scan for Available WiFi Networks"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"iwlist wlp3s0 scan|grep ESSID\n"})}),"\n",(0,s.jsx)(n.h2,{id:"configure-wpa-supplicant",children:"Configure WPA Supplicant"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'# cat /etc/wpa_supplicant/wpa_supplicant.conf\nnetwork={\n  ssid="SSID_NAME"\n  psk="NETWORK_KEY_IN_CLEAR"\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"connect-to-wifi-using-wpa-supplicant",children:"Connect to WiFi Using WPA Supplicant"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"wpa_supplicant -B -i wlp3s0 -c /etc/wpa_supplicant/wpa_supplicant.conf\n"})}),"\n",(0,s.jsx)(n.h2,{id:"obtain-ip-address-via-dhcp",children:"Obtain IP Address via DHCP"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"dhclient wlp3s0 \n"})}),"\n",(0,s.jsx)(n.h2,{id:"assign-static-ip-address",children:"Assign Static IP Address"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"ifconfig wlp3s0 192.168.1.10 netmask 255.255.255.0\n"})}),"\n",(0,s.jsx)(n.h2,{id:"add-default-gateway",children:"Add Default Gateway"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"route add default gw 192.168.1.1\n"})}),"\n",(0,s.jsx)(n.h2,{id:"install-network-manager-gnome",children:"Install Network Manager GNOME"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"apt-get install network-manager-gnome\nsystemctl restart NetworkManager\nsystemctl status NetworkManager\n"})}),"\n",(0,s.jsx)(n.h2,{id:"list-available-wifi-networks-and-connect-using-nmcli",children:"List Available WiFi Networks and connect using nmcli"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'nmcli device wifi list\nnmcli device wifi connect "SSID" password "votre_mot_de_passe"\n'})}),"\n",(0,s.jsx)(n.h2,{id:"list-rf-kill-switch-status",children:"List RF Kill Switch Status"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"rfkill list\n"})}),"\n",(0,s.jsx)(n.h2,{id:"bring-interface-up-and-down",children:"Bring Interface Up and down"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"ip link set wlp3s0 up\nip link set wlp3s0 down\n"})}),"\n",(0,s.jsx)(n.h2,{id:"show-wireless-device-information",children:"Show Wireless Device Information"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"iw dev\n"})}),"\n",(0,s.jsx)(n.h2,{id:"show-link-status-of-wireless-device",children:"Show Link Status of Wireless Device"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"iw dev wlp3s0 link\n"})})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>t,x:()=>r});var s=i(6540);const a={},l=s.createContext(a);function t(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:t(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);