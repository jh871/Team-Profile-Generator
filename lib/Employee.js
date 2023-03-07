// Employee class which is then used by other team member objects
class Employee {
    constructor(name, id, email){
        this.name = name,
        this.id = id,
        this.email = email
    }
    getName = function() {
        return this.name; //return
    }
    getId = function() {
        return this.id;
        
    }
    getEmail = function() {
        return this.email;
        
    }
    getRole = function() {
        return "Employee";
    }
};
//exporting to other object files in /lib
module.exports = Employee;