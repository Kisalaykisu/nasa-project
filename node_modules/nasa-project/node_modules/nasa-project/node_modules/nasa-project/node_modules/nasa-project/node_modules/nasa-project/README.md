# NASA Mission Control Project

![NASA SpaceX Mission](https://images.unsplash.com/photo-1711919711600-3f064b155796?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3BhY2V4fGVufDB8fDB8fHww)

## Getting Started

1. Ensure you have Node.js installed.
2. Create a free [Mongo Atlas](https://www.mongodb.com/atlas/database) database online or start a local MongoDB database.
3. Create a `server/.env` file with a `MONGO_URL` property set to your MongoDB connection string.
4. In the terminal, run: `npm install`

## Running the Project

1. In the terminal, run: `npm run deploy`
2. Browse to the mission control frontend at [localhost:8000](http://localhost:8000) and schedule an interstellar launch!

## Docker

1. Ensure you have the latest version of Docker installed
2. Run `docker build -t nasa-project .`
3. Run `docker run -it -p 8000:8000 nasa-project`

## Running the Tests

To run any automated tests, run `npm test`. This will:

- Run all the client-side tests: `npm test --prefix client`
- Run all the server-side tests: `npm test --prefix server`

## Architectural Diagram
![Architectural diagram for the project](https://raw.githubusercontent.com/JSulley/nasa-project/a8f3528f38bda501eb085018c63c55a69dd1231e/images/architectural-diagram.svg)

Additionally, the application will be designed using the Model-View-Controller (MVC) pattern.
