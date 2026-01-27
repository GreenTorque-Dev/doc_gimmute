---
title: Installation Guide
slug: /
---

# G-Immute Installation Guide for Customers

This guide explains how to install and set up G-Immute step by step.

---

## 1. Get the Project

First, download or get the G-Immute project files from the provided source (Git, server, or support team).

````bash
git clone https://github.com/GreenTorque-Dev/G-immute.git

````

---

## 2. Run the Bash Script

Execute the project setup script using this command:

```bash
 cd ~/G-immute
 cd set_up
 sudo chmod +x project_setup.sh
 bash project_setup.sh

````

## 3. Mount NAS Directory

Mount the NAS directory on the server.

After mounting, open the G-Immute UI and finish the setup using the NAS directory.

````bash
 sudo apt-get install open-iscsi

 sudo nano /etc/iscsi/iscsid.conf (Enable CHAP and Enter CHAP username and password)

 **Add below lines in the file

 node.startup = automatic

 node.session.auth.authmethod = CHAP

 node.session.auth.username = your_username_here

 node.session.auth.password = your_password_here


 /etc/init.d/open-iscsi restart

 iscsiadm -m discovery -t sendtargets -p 10.0.0.88:3260 (Discovers the NAS)

 /etc/init.d/open-iscsi restart

 iscsiadm -m discovery -t sendtargets -p 10.0.0.88:3260 (Discovers the NAS)

 /etc/init.d/open-iscsi restart

 sudo fdisk /dev/sdb (Create sdb1 partition)

 Note: Follow below article if partition size is greater than 2TB

 https://www.cyberciti.biz/tips/fdisk-unable-to-create-partition-greater-2tb.html

 mkfs.ext3 /dev/sdb1 (Fortmat the partition after creating)

 mkdir /mnt/nasmount

 mount /dev/sdb1 /mnt/nasmount

 Restart the machine if mount point busy or already mounted then run mount command.

 Symbolic Link

 ln -s /mnt/nasmount nas/nasmount

 Symbolic Link folder is not accessible via network until the folder is created in
Gimmute

 Create folder with same name as symbolic link in Gimmute.

 Automatically mount NAS after reboot

 sudo crontab -e

 **Add below line in the end of the file

 @reboot mount /dev/sdb1 /mnt/nasmount



````