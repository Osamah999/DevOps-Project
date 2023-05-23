#!/bin/bash

# install jenkins
sudo yum update -y
sudo wget -O /etc/yum.repos.d/jenkins.repo https://pkg.jenkins.io/redhat-stable/jenkins.repo
sudo rpm --import https://pkg.jenkins.io/redhat-stable/jenkins.io-2023.key
sudo amazon-linux-extras install epel -y
sudo amazon-linux-extras install java-openjdk11 -y
sudo yum install jenkins -y

# install maven
sudo wget https://dlcdn.apache.org/maven/maven-3/3.9.1/binaries/apache-maven-3.9.1-bin.tar.gz
sudo tar -xvzf apache-maven-3.9.1-bin.tar.gz 
sudo rm apache-maven-3.9.1-bin.tar.gz 
sudo mv apache-maven-3.9.1 maven
sudo mv maven /opt/maven

# install docker
sudo yum install docker -y

# install ansible
sudo amazon-linux-extras install ansible2 -y
