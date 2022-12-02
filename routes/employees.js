// Need data from our Models/Tables
const {Employee,Task}=require('../db/tables');
const express=require('express');
const router=express.Router();

// Asyc Handler for cleaner code, don't need next function here
const asyncHandler=require('express-async-handler');

// Get all the employees from model/table, need sequelize function find all
router.get("/", asyncHandler( async(req, res) => {
    let employees=await Employee.findAll({include: [Task]});
    res.statusCode(200).json(employees);
}));

// Get Employee based on id using sequelize method findBy
router.get('/:id', asyncHandler(async(req, res) => {
    let employee = await Employee.findByPk(req.params.id, {include: [Task]});
    res.status(200).json(employee);
}));

// Route for editing an employee based on id
router.put('/:id', asyncHandler(async(req, res) => {
    // Only change the Employee with request body object where the employee id matches the id typed into the URL (parameter)
    await Employee.update(req.body, {where: {id: req.params.id}});

    // Return the updated Employee through req object
    let employee = await Employee.findByPk(req.params.id, {include: [Task]});
    res.status(200).json(employee);
}));

// Route for adding a new employee need sequelize function create
router.post('/', asyncHandler(async(req, res) => {
    let newEmployee = await Employee.create(req.body);
    res.status(200).json(newEmployee);
}));

// Route to remove the Employee based on id need sequelize function destroy
router.delete('/:id', asyncHandler(async(req, res) => {
    await Employee.destroy({where: {id: req.params.id}});
    
    //Say that a employee was deleted 
    res.status(200).json("Employee deleted");
}));

// Export our employees Router
module.exports = router;


