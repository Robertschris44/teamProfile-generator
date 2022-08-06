const Employee = require('../lib/Employee');

class Manager extends Employee {
    constructor(name,id,email,officeNumber){
        //constructor of parent class Employee
    super(name, id, email)

        this.officeNumber=officeNumber;
    }

    getRole(){
        return 'Manager';
    }
}
module.exports = Manager