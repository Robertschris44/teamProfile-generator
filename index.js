const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateHTML = require('./src/page-template');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

//array for user input and output
let teamarray = [];

//change to prompt team and use create team for return on line 146, if it doesn't work turn back into create team
const promptTeam = async () => {
    console.log('Create Employees')
    const answers = await inquirer.prompt([
        //create array of question objects
        {
            type: 'input',
            name: 'name', //data entered stored here
            message: 'Employee Name', //questions asked here\
            validate: inputName => {
                if (inputName) {
                    return true;
                }else {
                    console.log('Enter Name');
                    return false;
                }
            }
        },
        {
            name: 'id',
            type: 'input',
            message: 'Employee ID:',
            validate: (inputID) => {
                if (inputID) {
                    return true;
                }else {
                    console.log('Enter ID');
                    return false;
                }
            }
        },
        {
            name: 'email',
            type: 'input',
            message: 'Employee Email:',
            validate: (inputEmail) => {
                if (inputEmail) {
                    return true;
                }else {
                    console.log('Enter Email');
                    return false;
                }
            }
        },
        {
            //role needs to be a list type
            name: 'role',
            type: 'list',
            message: 'Role in organization:',
            //creating an array of choices
            choices: ['Manager', 'Engineer', 'Intern'],
        }
    ])
//will put office number info  here
    if (answers.role === "Manager") {
        const managerAnswer = await inquirer.prompt([
            {
                name: 'officeNumber',
                type: 'input',
                message: 'Office number:',
                validate: officeNumberInput => {
                    if (officeNumberInput){
                        return true;
                    }else {
                        console.log('Office number needed');
                        return false;
                    }
                }             
            }, 
        ])
//creating new manager answers
        const newManager = new Manager(answers.name, answers.id, answers.email, managerAnswer.officeNumber);
        teamarray.push(newManager)

    }else if (answers.role === "Engineer"){
        const engineerAnswer = await inquirer.prompt([
            {
                name: 'gitHub',
                type: 'input',
                message: 'GitHub Username',
                validate: gitHubInput => {
                    if(gitHubInput){
                        return true;
                    }else {
                        console.log('GitHub Username needed');
                        return false;
                    }
                }
            }
        ])
        //creating a 'new' engineer
        const newEngineer = new Engineer(answers.name, answers.id, answers.email, answers.gitHub);
        teamarray.push(newEngineer);
    }else if (answers.role === "Intern"){
        const internAnswer = await inquirer.prompt([
            {
                name: 'school',
                type: 'input',
                message: 'School Name:',
                validate: schoolInput => {
                    if(schoolInput){
                        return true;
                    }else  {
                        console.log('School name needed');
                        return false;
                    }
                }
            }
        ])
        //creating a new intern
        const newIntern = new Intern(answers.name, answers.id, answers.email,internAnswer.school);
        teamarray.push(newIntern);
    }
};
//prompt end

//user experience to add team member
async function promptNewEmployee(){
    await promptTeam()
    
    const newEmployeeAsnwer = await inquirer.prompt([
        {
            name: 'addMember',
            //will make it a list so users can choose
            type: 'list',
            message: 'Add another team member or completed',
            choices: ['Add to team', 'Finished']
        },
    ])

    if (newEmployeeAsnwer.addMember === 'Add to team'){
        return promptNewEmployee()
    }
    return createTeam();
}
//call new employee
promptNewEmployee();
function createTeam(){
    console.log("New employee", teamarray)
    //fs write file goes here module 9.5.4
    fs.writeFile('./dist/index.html', generateHTML)
    //error on createTeam, need to figure out what happenedg
}
 
