---
path: "/Running-a-whive-node-2"
date: 2022-08-06
title: "Running a whive node part 2"
tags:
    - whive
    - blockchain
    - web3
    - bitcoin 
description: "In part one of this tutorial, we are going to look into the second part of running a whive node."
---


## Step 8: Generating a whive address

We then need to create an address in which we can use to receive whive tokens. You can do this by running

```
whive-cli getnewaddress
```

On the same directory which is whive/src folder. This will output an address that we will use later.

## Step 9: Getting cpuminer

Change your directory to the home directory and clone the cpuminer directory.
```
cd 
git clone https://github.com/cryptozeny/cpuminer-mc-yespower.git
```
## Step 10: Installing the cpuminer dependencies

Some dependencies are needed so that we are able to build the cpuminer. Run the following commands to install the dependencies.

```
sudo apt-get install build-essential libcurl4-openssl-dev 
```

## Step 11: Building cpuminer
Once the dependencies are installed, we can now build by running the command
```
./build.sh
```

## Step 12: Running cpuminer on your local raspberry pi
Cpuminer can be set up to run on the raspberry pi itself. To do this we run the following command with the address we generated earlier.
```
./minerd -a yespower -o http://127.0.0.1:1867 -u whive -p pass --no-longpoll --no-getwork --no-stratum  --coinbase-addr=generatedaddress -t 3
```
Give it some time. You should be able to see some logs indicating that some rewards are coming in.

## Step 13: Joining a mining pool
It is also possible to join a mining pool to increase the odds of getting mining rewards. We can do this by running
```
./minerd -a yespower -o stratum+tcp://34.73.100.13:3333 -u generateaddress.w1 -t 3
```
Give it some time. Once we have let it run for a line, we can go to the site http://34.73.100.13/workers and check if our generated address shows up.

# Conclusion
With this walk through, we were able to

- Install raspbian os on the raspberry pi and access it
- Install whive dependencies and build it
- Run whived
- Create a whive address for payment
- Install cpuminer dependencies and build it
- Run a cpuminer and mine locally
- Join a whive mining pool

# References

Guide on mining https://whiveio.medium.com/a-guide-on-mining-whive-rewards-with-your-cpu-7e3289e11db7
Running a whive node on a raspberry pi https://peterokwara.hashnode.dev/running-a-whive-node-on-a-raspberry-pi-ck6ix8ssv00k5d9s1m5qoj1fl
Whive pool http://pow.melanin.network/getting_started
Raspberry pi operating system https://www.raspberrypi.org/software/operating-systems/
Raspberry ip ip address https://www.raspberrypi.org/documentation/remote-access/ip-address.md
Ssh access on raspberry pi https://www.raspberrypi.org/documentation/remote-access/ssh/README.md
Raspberry pi installation https://www.raspberrypi.org/documentation/installation/installing-images/README.md
Whive https://github.com/whiveio/whive
Cpuminer-yespower https://github.com/whiveio/cpuminer-mc-yespower