# Polymathis template

This is the source code of default [Polymathis](https://polymathis.org) template.

## Requirements

- [Node.js][1] >= 8.0
- [Docker][2] >= 1.13.0 (For Docker installation only)

## Installation (Docker)

Use Node.js docker image

### Install Docker

Install **Docker CE** in your host machine by following the instructions found [here][5]

### Install Docker Compose

Install **Docker Compose** by following the instructions found [here][6]

### Run container

Change container name in `docker-compose.yml` from `react_boilerplate` to your project's name and run it using the following command in project's root folder:

```
docker-compose up
```

A *Node.js* container will start in development mode starts with listeners in the `/src` folder.
Also a server at port `3000` starts running for serving the compiled content at [http://localhost:3000/][3].

You can change port by changing `PORT` environment variable in `docker-compose.yml` along with exposed ports.

You can run all `npm` commands outside the container by using `./npm.sh` script.
For example you can update dependencies by running:

```
./npm.sh update
```

## Production build

The following command will build production code into `/dist` folder

    ./npm.sh run build

## Serve production build

The following command will start a server for production build at [http://localhost:3001/][3]. You can change port by setting environment variable `PROD_PORT` the desired port number.

    ./npm.sh run server


You can run a combined command that builds production code first and then run server by using the following command:

    ./npm.sh run build_server
    
    
## Installation (Local)

Use native installation in host machine

### Install Node.js

Install node.js by following the appropriate instructions based on your system found [here][2]

### Install/Update dependencies

Install dependencies by running the following command:

    npm install

If you want to update project's dependencies run the following command:

    npm update
    
## Development environment

By running the following command, a development build starts with listeners in the `/src` folder.
Also a server at port `3000` starts running for serving the compiled content at [http://localhost:3000/][3].

    npm start

You can change server port by setting environment variable `PORT`.

Example:

    export PORT=8888; npm start
       
## Production build

The following command will build production code into `/dist` folder

    npm run build

## Serve production build

The following command will start a server for production build at [http://localhost:3001/][3]. You can change port by setting environment variable `PROD_PORT` the desired port number.

    npm run server

    export PROD_PORT=8889; npm run server

You can run a combined command that builds production code first and then run server by using the following command:

    npm run build_server
    
## LICENSE

[GPL-v3.0][7]

[1]:https://nodejs.org/
[2]:https://nodejs.org/en/download/
[3]:http://localhost:3000/
[4]:https://www.docker.com/
[5]:https://docs.docker.com/install/
[6]:https://docs.docker.com/compose/install/
[7]:/LICENSE