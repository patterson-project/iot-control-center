#!/bin/bash
cd /home/ubuntu/led-control-center
git pull origin master

cd /home/ubuntu/led-control-center/ControlCenterUi
docker-compose up --build -d