// Need data from our Models/Tables
const {Employee,Task}=require('../db/tables');
const express=require('express');
const router=express.Router();

// Asyc Handler for cleaner code, don't need next function here
const asyncHandler=require('express-async-handler');

// Get all the employees from model/table, need sequelize function 
router.get("/", asyncHandler( async(req, res) => {
    let employees=await Employee.findAll({include: [Task]});
    res.statusCode(200).json(employees);
}));


// Export our employees Router
module.exports = router;


