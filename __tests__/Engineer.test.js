const Engineer = require("../lib/Engineer");

const engineer = new Engineer('jester', '12344321', 'jester@gmail.com', 'Robertschris44');

test('testing employee object', () => {
    expect(engineer.name).toBe('jester');
    expect(engineer.id).toBe('12344321');
    expect(engineer.email).toBe('jester@gmail.com');
    //don't forget to add git hub
    expect(engineer.gitHub).toBe('Robertschris44');
});


test ('testing getting name method ', () => {
   
    expect(engineer.getName()).toBe('jester');
});


test ('testing getting github method ', () => {
   
    expect(engineer.getGithub()).toBe('jester');
});


test ('creating employee id method', () => {
   
    expect(engineer.getId()).toBe('12344321');
});



test('createing employee email', () => {

    expect(engineer.getEmail()).toBe('jester@gmail.com');
});




test('creating role', () => {
    expect(engineer.getRole()).toBe('Engineer')
});

module.exports = Engineer;