---
path: "/Running-a-whive-node-1"
date: 2022-08-05T17:12:33.962Z
title: "Running a whive node part 1"
tags:
    - whive
    - blockchain
    - web3 
description: "In part one of this tutorial, we are going to look into setting up a whive node."
---

# Introduction

Whive, is a peer-to-peer blockchain protocol that is incentivizing the building of sustainable energy solutions through Trustless Rewards.

The Protocol was developed by Bithub Africa and a team of global contributors. Bithub Africa is a commercial Blockchain Accelerator that is focused on driving Financial and Energy access across Africa.

The protocol achieves this through a hybrid Proof-of-Work(POW) & Proof-Of-Stake(POS) consensus algorithm that favours devices with CPU(small) processors & are located in regions with a high solar reliability index.

This means by becoming a network participant you shall be able to earn Trustless Rewards that are mined when you run the whive software.

In this tutorial, I will be walking you through on how to set up and run the whive protocol on a Raspberry Pi. You can also run the protocol on a desktop machine or a laptop, unix or linux or windows but with a Raspberry Pi, you get more rewards from it's algorithm.

## Prerequisite
The following background knowledge will come in handy

- Linux bash shell
- Familiarity with Raspberry Pi in general


## Components

The following components are needed
- Raspberry pi with wifi capability.
- SD card with more than 8GB space
- Internet access, whether it's through wifi or ethernet cable, if your Raspberry Pi supports WiFi or Ethernet.
  
## Step 1: Installing raspbian operating system

The first step is to download raspbian os and use raspberry pi imager to burn the image on to your sd card. Instructions on how to do that can be found here.

Once the installation is complete, the next step is to be able to access the rasberry pi remotely. One of the best way to do this is via ssh. A ssh file is put in the boot directory, for the headless setup. Instructions on how to do this can be found in step 3. Any of the other steps listed can work, but the headless setup works irregardless to any setup one may have, with or without a screen.

Once that is done, the remaining step is to identify your IP address so that you can be able to access your raspberry pi remotely. A guide on how to get your raspberry pi address can be found here. I normally use fing to identify the IP address of my raspberry pi.

You can now access your raspberry pi using the steps shown in step 4 with the username as pi and password as raspberry.

## Step 2: Getting whive
Once you have access to your raspberry pi terminal, go to the home directory by typing

```
cd
```
Ensure you have git installed. You can install git by running
```
sudo apt-get install git
```
And clone the whive repository by running
```
git clone https://github.com/whiveio/whive.git
```

## Step 3: Installing whive dependencies
Before one is able to build whive, you need to install the dependencies. You can do this by running.
```
sudo apt-get install -y build-essential libtool autotools-dev automake pkg-config bsdmainutils python3
```
Once the previous step is done, you can then run
```
sudo apt-get install -y libssl-dev libevent-dev libboost-system-dev libboost-filesystem-dev libboost-chrono-dev libboost-test-dev libboost-thread-dev
```
The ppa for bitcoin does not exist for raspbian os. But we can still add it. To do this we edit the /etc/apt/sources.list
```
sudo nano /etc/apt/sources.list
```
And add the following lines to the file
```
deb http://ppa.launchpad.net/bitcoin/bitcoin/ubuntu cosmic main 
deb-src http://ppa.launchpad.net/bitcoin/bitcoin/ubuntu cosmic main
```
You can then do Ctrl + O to save and Ctrl + X to exit. Once this is done you can then add the key by running the command:
```
sudo apt-key adv --keyserver keyserver.ubuntu.com --recv-keys C70EF1F0305A1ADB9986DBD8D46F45428842CE5E
```
And update by running
```
sudo apt-get update
```
With this we can now install the remaining dependencies, especially Berkely Db by running
```
sudo apt-get install software-properties-common

sudo add-apt-repository ppa:bitcoin/bitcoin

sudo apt-get update

sudo apt-get install -y libdb4.8-dev libdb4.8++-dev
```
## Step 4: Building whive
Enter the whive directory you just cloned by running
```
cd whive
```
And then build whive by running
```
./autogen.sh
./configure
make
```
## Step 5: Configuring whive
Go to the home directory by typing
```
cd
```
Make a new folder called .whive and create a new file called whive.conf within the folder
```
mkdir .whive
cd .whive
nano whive.conf 
```
Copy and paste the following settings within the nano editor.
```
server=1
daemon=1
listen=1
txindex=1
rpcuser=whive
rpcpassword=pass
```
You can now save this settings by running Ctrl + O to save and Ctrl + X to exit.

## Step 6: Running whive
Once whive has finished building, you can now move to the src folder within the whive folder
```
cd
cd whive/src
And then run
whived -daemon
```
## Step 6: Check if whive is running
To check if whive is running, within the same whive/src folder, run
```
whive-cli getblockchaininfo 
```
You can also run
```
htop
```
And check to see if there is whived in the running processes.

## Step 7: Generating a whive address
We then need to create an address in which we can use to receive whive tokens. You can do this by running
```
whive-cli getnewaddress
```
On the same directory which is whive/src folder. This will output an address that we will use later.

To continue with the tutorial, please check out Part 2