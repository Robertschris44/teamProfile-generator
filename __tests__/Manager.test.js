const Manager = require("../lib/Manager");

const manager = new Manager('jester', '12344321', 'jester@gmail.com', '511');

test('testing employee object', () => {
    expect(manager.name).toBe('jester');
    expect(manager.id).toBe('12344321');
    expect(manager.email).toBe('jester@gmail.com');
    expect(manager.OfficeNumber).toBe('511');
});


test ('testing getting name method ', () => {
   
    expect(manager.getName()).toBe('jester');
});


test ('testing getting office number method ', () => {
   
    expect(manager.getOfficeNumber()).toBe('511');
});


test ('creating employee id method', () => {
   
    expect(manager.getId()).toBe('12344321');
});



test('creating employee email', () => {

    expect(manager.getEmail()).toBe('jester@gmail.com');
});




test('creating role', () => {
    expect(manager.getRole()).toBe('Manager')
});

module.exports = Manager;