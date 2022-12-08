// In this file have the dummy data for when the database is first created
// Import the models/tables
const {Employee, Task}=require('../tables');

const seedDataBase=async () => {
    const intialEmployee=await Employee.create({
        firstname: "Hardip",
        lastname: "Chander",
        department: "CoderSchool"
    });

    const intialEmployeeTwo=await Employee.create({
        firstname: "John",
        lastname: "Delfino",
        department: "Math"
    });

    const intialTask=await Task.create({
        description: "HTML",
        prioritylevel: "Important",
        completionstatus: false
    });

    const intialTaskTwo=await Task.create({
        description: "CSS",
        prioritylevel: "Urgent",
        completionstatus: true
    });

    const intialTaskThree=await Task.create({
        description: "JavaScript",
        prioritylevel: "Needed",
        completionstatus: false
    });

    await intialTask.setEmployee(intialEmployee);
    await intialTaskTwo.setEmployee(intialEmployeeTwo);
};

module.exports=seedDataBase;