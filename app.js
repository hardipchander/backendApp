// Where the execution begins for the node app
// import express and cors for the server
const express=require('express');
const cors=require('cors');

// Create the express app
const myApp=express();

// Have our main API router here
const mainRouter=require('./routes');

// Need the utilities for the database and the instance
const createDataBase=require('./db/utilities/createDataBase');
const seedDataBase=require('./db/utilities/seedDataBase');
const db=require('./db');

//sync and seed the database force true will reset the database every time the server is shut down and started again
// Remove the {force: true} option in sync
const syncDatabase = async () => {
    try {
        await db.sync({force: true});
        console.log('------Synced to db--------');

        await seedDataBase();
        console.log('--------Successfully seeded db--------');
    } 
    catch (error) {
        console.error('There is a syncDB error:', error);
    }  
};

// Actually configure the express app with the routes and middleware and error handling
const configureApp = async () => {
    // Boiler plate
    myApp.use(cors());
    myApp.use(express.json());
    myApp.use(express.urlencoded({ extended: false }));

    // Boiler plate 
    myApp.get('/favicon.ico', (req, res) => res.status(204));
  
    //define a test Route
    myApp.get("/alive", (request, response) => {
      response.send("i am alive!")
    });
  
    // Mount my main API Router
    myApp.use("/api", mainRouter);
  
    // Handle page not found 404 error classic
    myApp.use((req, res, next) => {
      const error = new Error("Not Found, Please inspect the URL again!");
      error.status = 404;
      next(error);
    });
  
    // Error-handling middleware express errors here
    myApp.use((err, req, res, next) => {
      console.error(err);
      console.log(req.originalUrl);
      res.status(err.status || 500).send(err.message || "Internal server error.");
    });
  
};

// Run App function
const runApp = async () => {
    await createDataBase();
    await syncDatabase();
    await configureApp();
};
  
// Run the App here !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
runApp();

// Just for debugging
console.log("express app is running");

// port number and the server is on the port number 
// PORTNUMBER must match on the fronend REMMBER THIS !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const PORTNUMBER=5000;
myApp.listen(PORTNUMBER, ()=> {`The server is on ${PORTNUMBER}`});

