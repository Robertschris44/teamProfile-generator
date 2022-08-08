const Employee = require('../lib/Employee');



class Engineer extends Employee{
    constructor(name, id, email, github){
        //constructor of the parent class Employee
        super(name, id, email)
        this.github = github
    }
    getGithub(){
        return `https://github.com/${this.github}`;
    }
    getRole(){
        return 'Engineer';
    }
}



module.exports = Engineer;