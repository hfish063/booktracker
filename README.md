# Booktracker

## About

Booktracker is an improved version of an old project of mine, Booktrackerlite.  The goal of this project was to create a NextJS frontend, and familiarize myself with the framework.  The application is structured within a mono repository, meaning both the Backend (Springboot) and Frontend (NextJS) are located within the same directory.

## Running the Application

Before running the application, it is important to ensure that all `Environment` variables are properly configured.  See the `.env.example` files for more information on this.

1. Pull the latest postgres image and run the container as follows
```bash
docker pull postgres
docker run --name booktracker-db -e \
    POSTGRES_PASSWORD=password \
    -p 5432:5432 \
    -d postgres
```

2. Navigate to the `web` directory and run the following command

```bash
docker run -t frontend .
```
3. After building the docker file, run this command to expose the localhost of your machine.

```bash
docker run -p 3000:3000 --add-host host.docker.internal.host-gateway frontend
```

Next is getting the backend API up and running.

1. 
