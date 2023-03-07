// Manager class class inherits name, id, email from Employee, and collects office number
const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
    getRole = function() {
        return "Manager";
    }
}
//exports to index.js
module.exports = Manager;