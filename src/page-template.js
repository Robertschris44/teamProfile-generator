//create dynamic HTML to pass in data
const Manager = require("../lib/Manager");



const generatePage = (managerData) => {
    const {managerName, managerId, managerEmail, managerOfficeNumber} = managerData;
    const newManager = new Manager (
        managerName, managerId, managerEmail, managerOfficeNumber
    );
    return `
    <div class="card" style="width: 18rem">
    <div class="card-header">${newManager.name}</br>
    <i class="fas fa-mug-hot">${newManager.getRole()}</i></div>
    <ul class="list=group list-group-flush">
        <li class="list-group-item">${newManager.id}</li>
        <li class="list-group-item">Email: <span id="email">${newManager.email}<a href="mailto:jester@gmail.com"></a></li>
        <li class="list-group-item">Office Number: ${newManager.OfficeNumber}</li>
    </ul>

</div>
    `

}

module.exports = generatePage;