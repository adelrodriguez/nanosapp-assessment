# Server

For the server application, a simple NodeJS was built using Express, taking into consideration that the only task of the API was to expose the information contained inside the `data.json` file. Most of the structure of the application is similar to an Express application generated through the `express-generator` tool, and it was used as an inspiration when creating this app.

Because of the structure of the `data.json` file, it initially became evident that a NoSQL database was the way to go, since the shape of the data was similar to one found in a non-relational database. Nonetheless, considering that the main purpose of the API was to expose a simple JSON file, the choice was made to use Lowdb provides a quick and simple solution for creating a "database" using a JSON file.

Since the same data needs to be provided every time the service starts, a `db.json` file is created when the application starts, which is then loaded with the information inside `data.json`.

TypeScript was used to ease development early on and provide more security when developing the client application, and to be understand and manage the complex structure of the data provided.

## Built With

* TypeScript
* Express
* [lowdb](https://github.com/typicode/lowdb)
