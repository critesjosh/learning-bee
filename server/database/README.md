# Database
## Images
- postgres
- adminer

## Environment
- PG_USERNAME: Database user username
- PG_PASSWORD: Database user password
- PG_PORT: Database port
- ADMINER_PORT: The port where the database admin webapp will be hosted
- RESTART_POLICY: The containers' restart policies. https://docs.docker.com/compose/compose-file/#restart
- NETWORKS_DRIVER: The network model docker will use for these containers. Don't change this before reading https://blog.docker.com/2016/12/understanding-docker-networking-drivers-use-cases/

## Usage

1) `cp .env.example .env`
2) `docker-compose up -d`