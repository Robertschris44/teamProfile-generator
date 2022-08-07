const Employee = require('../lib/Employee');
const Employee = require('../lib/Employee');
const employee = new Employee('jester', '12344321', '511', 'jester@gmail.com');

//we will create test below
test('creating employee object', () => {
    expect(employee.name).toBe('jester');
    expect(employee.id).toBe('12344321');
    expect(employee.email).toBe('jester@gmail.com');
});

test ('creating employee id', () => {
    const employee = new Employee('jester');
    expect(employee.id).toBe('12344321');
});

test('createing employee email', () => {
    const employee = new Employee('');

    expect(employee.email).toBe('jester@gmail.com');
});

test('creating office number', () => {
    expect(employee.officeNumber).toBe('511');
});

test('creating role', () => {
    expect(employee.getRole).toBe('Employee')
});

module.exports = Employee;