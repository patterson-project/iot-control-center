#!/bin/bash
cd /home/pi/iot-control-center
git pull origin master

cd /home/pi/iot-control-center/BulbController/Bulb1
docker-compose up --build -d