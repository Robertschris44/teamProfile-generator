const Intern = require("../lib/Intern");

const intern = new Intern('jester', '12344321', 'jester@gmail.com', '511');

test('testing employee object', () => {
    expect(intern.name).toBe('jester');
    expect(intern.id).toBe('12344321');
    expect(intern.email).toBe('jester@gmail.com');
    expect(intern.school).toBe('Sam Houston State University');
});


test ('testing getting name method ', () => {
   
    expect(intern.getName()).toBe('jester');
});


test ('creating employee id method', () => {
   
    expect(intern.getId()).toBe('12344321');
});

test('creating employee email', () => {

    expect(intern.getEmail()).toBe('jester@gmail.com');
});

test ('testing getting school method ', () => {
   
    expect(intern.getSchool()).toBe('Sam Houston State University');
});


test('creating role', () => {
    expect(intern.getRole()).toBe('Manager')
});

module.exports = Intern;