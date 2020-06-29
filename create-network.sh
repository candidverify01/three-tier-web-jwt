docker network create --driver bridge jwt-network
docker network connect bridge reactjs-container
docker network connect bridge nodejs-container
docker network connect bridge mysql-container
