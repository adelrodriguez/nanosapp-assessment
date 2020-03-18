# Nanosapp Frontend / Fullstack Assessment

This is a fullstack development demo application which displays information relating to advertising campaigns. The backend contains information to multiple campaigns, and this data is server using an API endpoint built with NodeJS which is consumed by the React client application.

[Demo](https://adelrodriguez.com/nanosapp-assessment/)

## Getting Started

## Prerequisites

Clone this repository and navigate inside it.

```bash
git clone https://github.com/adelrodriguez/nanosapp-assessment.git
cd nanosapp-assessment
```

To run this app, you'll need NodeJS installed. Recommended version is `v12.16.x` (the latest LTS release at the time of this writing). If you have [nvm](https://github.com/nvm-sh/nvm) installed, you can run

```bash
nvm use
```

at the root directory to use the recommended Node version for both the server and client.

### Installing

To install all the dependencies, you can run the following command:

```bash
make install
```

This will install the dependencies for both the client and the server applications.

### Running the server

To run the server application, open a new Terminal window and type:

```bash
cd server
npm run dev
```

This will run the API in development mode at `http://localhost:5000/`

## Running the client

To run the client application, open a new Terminal window and type:

```bash
cd client
npm run start
```

This will run the clinet application in development mode at `http://localhost:3000/`

