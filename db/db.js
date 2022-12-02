// Represent the Database in this file 
const Sequelize=require('sequelize');

// Have the Database infor
const {DataBaseName,dbUserName, dbPassword}= require('./utilities/configureDB');

console.log(`Connecting to ${DataBaseName}`);

// DB instance here
const db=new Sequelize(DataBaseName,dbUserName, dbPassword, {host: 'localhost', dialect: 'postgres',port: 5432});

// Export the instance
module.exports=db;

