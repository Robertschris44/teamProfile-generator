const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateHTML = require('./src/page-template');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

let teamarray = [];


const createManager = () => {
    return inquirer.prompt([
        //create array of question objects
        {
            type: 'input',
            name: 'manager name', //data entered stored here
            message: 'Please set manager name' //questions asked here
        }

    ])
}