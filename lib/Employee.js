// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email){
        this.name = name,
        this.id = id,
        this.email = email
    }
    getName = function() {
        console.log(this.name);
    }
    getId = function() {
        console.log(this.id);
        
    }
    getEmail = function() {
        console.log(this.email);
        
    }
    getRole = function() {
        console.log("Employee");
    }
};

module.exports = Employee;