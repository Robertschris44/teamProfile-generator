const Employee = require('../lib/Employee');

class Manager extends Employee {
    constructor(name,id,email,OfficeNumber){
        //constructor of parent class Employee
    super(name, id, email)

        this.OfficeNumber=OfficeNumber;
    }

    getRole(){
        return 'Manager';
    }
}
module.exports = Manager