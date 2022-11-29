// In this file have the dummy data for when the database is first created
// Import the models/tables
const {Employee, Task}=require('../tables');

const seedDataBase=async () => {
    const intialEmployee=await Employee.create({
        firstname: "Hardip",
        lastname: "Chander",
        department: "CoderSchool"
    });

    const intialTask=await Task.create({
        description: "Teach HTML to the class",
        prioritylevel: "Important",
        completionstatus: "Half Way There"
    });

    await intialTask.setEmployee(intialEmployee);
};

module.exports=seedDataBase;