const Employee = require("./Employee")

class Manager extends Employee {
    constructor (name, id, email, school){
        super(name, id, email);
        this.officeNumber = officeNumber;
        this.role = 'Manager'
    };

    getSchool(){
        return this.school; 
    };

    getRole(){
        return this.role;
    };
};

module.exports = Manager;