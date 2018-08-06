#!/usr/bin/env bash
arguments="$*"
docker exec -it polymathis_template bash -c "cd /home/node/app && npm $arguments"