// Engineer class inherits name, id, email from Employee, and also takes github username
const Employee = require("./Employee")

class Engineer extends Employee {
    constructor(name, id, email, github){
        super(name, id, email);
        this.github = github
    }
    getGithub() {
        return this.github;
    }
    getRole = function() {
        return "Engineer";
    }
}
//exports to index.js
module.exports = Engineer;