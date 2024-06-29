# Basic Docker Templates

This repository contains basic Docker templates to help you get started with Docker and containerizing your Node.js applications.

## Project Structure

- **Dockerfile**: Contains the instructions for building the Docker image.
- **index.js**: The main entry point of the Node.js application.
- **package.json**: Contains the metadata about the project and its dependencies.
- **package-lock.json**: Automatically generated file that describes the exact tree of dependencies.

## Getting Started

### Prerequisites

- [Docker](https://www.docker.com/get-started) installed on your machine
- [Node.js](https://nodejs.org/en/download/) installed on your machine

### Pulling the Docker Image

To pull the Docker image, navigate to your working directory and run the following command:

```sh
docker pull abhishekj24/docker-templates:0.0.1.RELEASE
```

### Running the Docker Image Container

To run the Docker image in a container, run the following command:

```sh
docker container run -d -p 3000:3000 abhishekj24/docker-templates:0.0.1.RELEASE
```

## Usage

Once the container is running, you can access the application by navigating to ```http://localhost:3000``` in your web browser.