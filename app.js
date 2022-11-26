// Where the execution begins for the node app

// import express and cors for the server
const express=require('express');
const cors=require('cors');

// Create the express app
const myApp=express();

// Just for debugging
console.log("express app is running");

// port number and the server is on the port number 
const PORTNUMBER=5000;
myApp.listen(PORTNUMBER, ()=> {`The server is on ${PORTNUMBER}`});

