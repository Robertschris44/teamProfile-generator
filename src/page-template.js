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






}

    



module.exports = generatePage;