// //create dynamic HTML to pass in data
// const Manager = require("../lib/Manager");



// const generatePage = (managerData) => {
//     const {managerName, managerId, managerEmail, managerOfficeNumber} = managerData;
//     const newManager = new Manager (
//         managerName, managerId, managerEmail, managerOfficeNumber
//     )};


const generateEmployees = team => {

const generateManager = (manager) => {
    return `
    <div class="card" style="width: 18rem">
    <div class="card-header">${manager.getName()}</br>
    <i class="fas fa-mug-hot">${manager.getRole()}</i></div>
    <ul class="list=group list-group-flush">
        <li class="list-group-item">${manager.getId()}</li>
        <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}"${manager.getEmail()}<a/><li>
        <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
    </ul>

</div>
    `;
    
};

//creating the same html as manager for interns, will change office number to school
const generateIntern = (intern) => {
    return `
    <div class="card" style="width: 18rem">
    <div class="card-header">${intern.getName()}</br>
    <i class="fas fa-mug-hot">${intern.getRole()}</i></div>
    <ul class="list=group list-group-flush">
        <li class="list-group-item">${intern.getId()}</li>
        <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}"${intern.getEmail()}<a/><li>
        <li class="list-group-item">School: ${intern.getSchool()}</li>
    </ul>

</div>
    `;
    
};

//creating same html for engineers, will change school to github
const generateEngineer = (engineer) => {
    return `
    <div class="card" style="width: 18rem">
    <div class="card-header">${engineer.getName()}</br>
    <i class="fas fa-mug-hot">${engineer.getRole()}</i></div>
    <ul class="list=group list-group-flush">
        <li class="list-group-item">${engineer.getId()}</li>
        <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}"${engineer.getEmail()}<a/><li>
        <li class="list-group-item">School: ${engineer.getGitHubl()}</li>
    </ul>

</div>
    `;
    
};

//setting up array to call functions
const html = [];

html.push(team.filter((employee) => employee.getRole() === "Manager")
.map((manager) => generateManager(manager))
);



html.push(team.filter((employee) => employee.getRole() === "Intern")
.map((intern) => generateManager(intern)).join("")
);

html.push(team.filter((employee) => employee.getRole() === "Engineer")
.map((engineer) => generateManager(engineer)).join("")
);
//will return.join here to return new sting
return html.join("");

}

    


//will setup new module exports
module.exports = generatePage;