// In this file have the dummy data for when the database is first created
// Import the models/tables
const {Employee, Task}=require('../tables');

const seedDataBase=async () => {
    const intialEmployee=await Employee.create({
        firstname: "Hardip",
        lastname: "Chander",
        department: "Computer Science"
    });

    const intialEmployeeTwo=await Employee.create({
        firstname: "John",
        lastname: "Delfino",
        department: "Math"
    });

    const intialTask=await Task.create({
        description: "Teach a lesson",
        prioritylevel: "Important",
        completionstatus: false
    });

    const intialTaskTwo=await Task.create({
        description: "5 Calculus problems",
        prioritylevel: "Needed",
        completionstatus: false
    });

    const intialTaskThree=await Task.create({
        description: "Read lliad",
        prioritylevel: "Urgent",
        completionstatus: false
    });

    await intialTask.setEmployee(intialEmployee);
    await intialTaskTwo.setEmployee(intialEmployeeTwo);
};

module.exports=seedDataBase;