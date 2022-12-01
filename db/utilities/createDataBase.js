// Use pg tools to create the database and have the database information imported here 
const pgtools=require('pgtools');
const {DataBaseName,dbUserName, dbPassword}= require('./configureDB.js');

// Configuration (might have to change the port number here)
const configure= {
    user: dbUserName,
    host: "localhost",
    port: 5432,
    password: dbPassword
};

// Only create database if it doesn't exist with DataBaseName simple logic
const createDataBase= async ()=> {
    try {
        //Create Database name with configure object above and DataBaseName using pgtools library
        await pgtools.createdb(configure, DataBaseName);
        console.log(`${DataBaseName} was created`);
    } 
    catch(error) {
        if (error.name==='duplicate_database') {
            console.log(`${DataBaseName} exists`);
            return;
        } 
        else {
            console.error('createDataBase error:', error);
            process.exit(1);
        }
    }
};

module.exports=createDataBase;