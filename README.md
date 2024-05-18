# Booktracker

## About

Booktracker is an improved version of an old project of mine, Booktrackerlite.  The goal of this project was to create a NextJS frontend, and familiarize myself with the framework.  The application is structured within a mono repository, meaning both the Backend (Springboot) and Frontend (NextJS) are located within the same directory.

## Running the Application

In order to run the booktracker application, there are a few steps we must take.

- Clone this repository
- Navigate to the `web` directory and run the following command `docker build -t frontend .` *Ensure docker is installed and configured on your system.*
- After building the docker file, run `docker run -p 3000:3000 --add-host host.docker.internal.host-gateway frontend`.  This will start our docker container, and expose the localhost of our machine to it in order to make API calls.
