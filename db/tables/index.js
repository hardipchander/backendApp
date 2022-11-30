// Import the models/tables here 
const Employee=require('./Employee');
const Task=require('./Task');

// Set Up Assocation or connection between Tables, confusing concept at first
Task.belongsTo(Employee);
Employee.hasMany(Task);

// Export the models/tables
module.exports={Employee, Task};