const Employee = require('../lib/Employee');



class Engineer extends Employee{
    constructor(name, id, email, gitHub){
        //constructor of the parent class Employee
        super(name, id, email)
        this.gitHub = gitHub
    }
   
    getGitHub(){
        return this.gitHub;
    }
    
    getRole(){
        return "Engineer";
    }
}



module.exports = Engineer;