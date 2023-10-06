Show listening ports:

# example: listen_docker reservecool-test

if [ $# -eq 1 ]; then
   watch -n 1 "docker exec -it $1 netstat -tulpn | grep LISTE"
else
    echo "Usage: sh listen_docker.sh [container-name]"
fi