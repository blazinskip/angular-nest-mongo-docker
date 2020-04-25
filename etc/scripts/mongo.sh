#!/bin/bash
docker stop mongo-task;
docker rm -vf mongo-task;
docker run -d -p 27017:27017 --name mongo-task -e POSTGRES_DB=tasks mongo;
