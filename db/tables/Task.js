// Import sequelize and db.js
const Sequelize=require('sequelize');
const db=require('../db.js');

// Define the Task Table/Model with description, prioritylevel, completionstatus
const Task=db.define("task", {
    description: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    prioritylevel: {
        type: Sequelize.STRING,
        allowNull: false
    },

    completionstatus: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
});

// Export Module
module.exports=Task;