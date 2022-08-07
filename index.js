const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateHTML = require('./src/page-template');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

//array for user input and output
let teamarray = [];


const createManager = async () => {
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
}