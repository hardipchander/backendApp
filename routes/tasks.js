// Need data from our Models/Tables
const {Employee,Task}=require('../db/tables');
const express=require('express');
const router=express.Router();

// Asyc Handler for cleaner code, don't need next function here
const asyncHandler=require('express-async-handler');

// Route to get all the tasks from model/table, need sequelize function findAll
router.get("/", asyncHandler( async(req, res) => {
    let tasks=await Task.findAll({include: [Employee]});
    res.statusCode(200).json(tasks);
}));

// Route to get single task based on a id including the employee, need sequelize function dealing with PRMIARY KEY id
router.get('/:id', asyncHandler(async(req, res) => {
    let task = await Task.findByPk(req.params.id, {include: [Employee]});
    res.status(200).json(task);
}));

// Route to edit a single task based on id , need to add filter to get the right task to edit
router.put('/:id', asyncHandler(async(req, res) => {
    // Only change the Task with request body object where the task id matches the id typed into the URL (parameter)
    await Task.update(req.body,{ where: {id: req.params.id} });

    // Return the updated task through req object
    let task = await Task.findByPk(req.params.id);
    res.status(201).json(task);
}));

// Export our tasks Router 
module.exports=router;