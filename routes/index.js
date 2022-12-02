const express=require('express');
// need router 
const router=express.Router();

// Employees and Tasks Routers 
const employeesRouter=require('./employees');
const tasksRouter=require('./tasks');

// Add our 2 routes to the main router in app.js
router.use("/tasks",tasksRouter);
router.use("/employees", employeesRouter);

//export to app.js
module.exports=router;