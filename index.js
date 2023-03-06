const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.
const manager = [
    {
        type: 'input',
        name: 'name',
        message: 'Please enter name of manager: '
    },
    {
        type: 'input',
        name: 'id',
        message: 'Please enter id of manager: '
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter email address of manager: '
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'Please enter office number of manager: '
    },
    {
        type: 'list',
        name: 'role',
        message: 'Please select role of additional employee to add, or select Exit to finish: ',
        choices: ['Engineer', 'Intern', 'Exit']
    }
];

const engineer = [
        {
            type: 'input',
            name: 'name',
            message: 'Please enter name of engineer: '
        },
        {
            type: 'input',
            name: 'id',
            message: 'Please enter id of engineer: '
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter email address of engineer: '
        },
            {
        type: 'input',
        name: 'github',
        message: 'Please enter github username of engineer: '
    },
    {
        type: 'list',
        name: 'role',
        message: 'Please select role of additional employee to add, or select Exit to finish: ',
        choices: ['Engineer', 'Intern', 'Exit']
    }
];

const intern = [
    {
        type: 'input',
        name: 'name',
        message: 'Please enter name of intern: '
    },
    {
        type: 'input',
        name: 'id',
        message: 'Please enter id of intern: '
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter email address of intern: '
    },
    {
        type: 'input',
        name: 'school',
        message: 'Please enter school of intern: '
    },
    {
        type: 'list',
        name: 'role',
        message: 'Please select role of additional employee to add, or select Exit to finish: ',
        choices: ['Engineer', 'Intern', 'Exit']
    }
];


function collectData(){
    inquirer.prompt(manager).then((manager) => {
        const managerEntry = new Manager(manager.name, manager.id, manager.email)
        managerEntry.officeNumber = manager.officeNumber;
        if (manager.role === 'Engineer'){
            engineerPrompt();
        } else if (manager.role === 'Intern') {
            internPrompt();
        } else {
            exitPrompt();
        }
    });
}

function engineerPrompt(){
    inquirer.prompt(engineer).then((engineer) => {
        const engineerEntry = new Engineer(engineer.name, engineer.id, engineer.email)
        engineerEntry.github = engineer.github;
        if (engineer.role === 'Engineer'){
            engineerPrompt();
        } else if (engineer.role === 'Intern') {
            internPrompt();
        } else {
            exitPrompt();
        }
    });
}

function internPrompt(){
    inquirer.prompt(intern).then((intern) => {
        const internEntry = new Intern(intern.name, intern.id, intern.email)
        internEntry.school = intern.school;
        if (intern.role === 'Engineer'){
            engineerPrompt();
        } else if (intern.role === 'Intern') {
            internPrompt();
        } else {
            exitPrompt();
        }
    });
}

function exitPrompt(){
    const exit = [
        {
        type: 'input',
        name: 'back-to-menu',
        message: 'Press ENTER to be finish'
        }
    ]; //this then runs fs to generate HTML - uses render function
}

//calling render "passes in array containing all employee objects"
//the render function returns html block

//THEN fs is used to generate file named 'team.html'

// can send file to 'output' folder (create this myself, use outputPath to target)

collectData(); //this kicks off inquirer with manager qs - could rename