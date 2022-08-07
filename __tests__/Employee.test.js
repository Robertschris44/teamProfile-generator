const Employee = require('../lib/Employee');

const employee = new Employee('jester', '12344321','jester@gmail.com');

//we will create test below
test('creating employee object', () => {
    expect(employee.name).toBe('jester');
    expect(employee.id).toBe('12344321');
    expect(employee.email).toBe('jester@gmail.com');
});

test ('creating employee name', () => {
    expect(employee.getName()).toBe('jester');
});


test ('creating employee id', () => {
    expect(employee.getId()).toBe('12344321');
});

test('createing employee email', () => {

    expect(employee.getEmail()).toBe('jester@gmail.com');
});


test('creating role', () => {
    expect(employee.getRole()).toBe('Employee')
});

module.exports = Employee;