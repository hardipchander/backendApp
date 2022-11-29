// Import sequelize and db.js
const Sequelize=require('sequelize');
const db=require('../db.js');

// Define the Employee Table/Model with First Name,Last Name,Department
const Employee=db.define("employee", {
    firstname: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    lastname: {
        type: Sequelize.STRING,
        allowNull: false
    },

    department: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

// Export Module
module.exports=Employee;