// Intern class class inherits name, id, email from Employee, also contains 'school'
const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school
    }
    getSchool() {
        return this.school;
    }
    getRole = function() {
        return "Intern";
    }
}
//exports to index.js
module.exports = Intern;