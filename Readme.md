# Setting up

# Build Docker Images

> https://docs.docker.com/engine/reference/commandline/build/

`cd docker/nginx && docker build -t ottoinfo/nginx .`

Wait for command to complete, then check your image built

`docker images`

```bash
REPOSITORY                     TAG       IMAGE ID       CREATED         SIZE
ottoinfo/nginx                 latest    c1846879e071   1 minutes ago   22.6MB
```

> Make sure you have a `package.json`. If not run `yarn init` in the `apps/node` folder

`docker build -t ottoinfo/node  .`

`docker images`

```bash
REPOSITORY                     TAG       IMAGE ID       CREATED          SIZE
ottoinfo/node                  latest    b63ef0a4d226   11 seconds ago   113MB
ottoinfo/nginx                 latest    c1846879e071   8 minutes ago    22.6MB
```

