const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");



//Manager question prompts including option to select next role
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

//Engineer Qs
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

//Intern Qs
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

//blank array to hold generated team member objects
const teamArray = [];

//first prompt qs are for manager, then creates manager object and pushes it to array. The user can then choose which profile to make next.
function launchPrompt(){
    inquirer.prompt(manager).then((managerResponse) => {
        const manager = new Manager(managerResponse.name, managerResponse.id, managerResponse.email)
        manager.officeNumber = managerResponse.officeNumber;
        teamArray.push(manager)
        if (managerResponse.role === 'Engineer'){
            engineerPrompt();
        } else if (managerResponse.role === 'Intern') {
            internPrompt();
        } else if (managerResponse.role === 'Exit') {
            exitPrompt();
        };
    });
}

//runs engineer questions when called, then creates engineer object, pushes to array, asks user to select what to do next.
function engineerPrompt(){
    inquirer.prompt(engineer).then((engineerResponse) => {
        const engineer = new Engineer(engineerResponse.name, engineerResponse.id, engineerResponse.email)
        engineer.github = engineerResponse.github;
        teamArray.push(engineer)
        if (engineerResponse.role === 'Engineer'){
            engineerPrompt();
        } else if (engineerResponse.role === 'Intern') {
            internPrompt();
        } else if (engineerResponse.role === 'Exit') {
            exitPrompt();
        }
    });
}

//runs intern questions when called, then creates intern object, pushes to array, asks user to select what to do next.
function internPrompt(){
    inquirer.prompt(intern).then((internResponse) => {
        const intern = new Intern(internResponse.name, internResponse.id, internResponse.email)
        intern.school = internResponse.school;
        teamArray.push(intern)
        if (internResponse.role === 'Engineer'){
            engineerPrompt();
        } else if (internResponse.role === 'Intern') {
            internPrompt();
        } else if (internResponse.role === 'Exit')  {
            exitPrompt();
        }
    });
}

//end creation of team members and render HTML file
function exitPrompt(){
    const exit = [
        {
        type: 'input',
        name: 'back-to-menu',
        message: 'Press ENTER to be finish'
        }
    ]; 
    
    writeHTMLfile();
}


//generates html file: runs render function on team array, then passes result into fs function; completed file is sent to 'output' folder
function writeHTMLfile(){
    const teamHTML = render(teamArray);
    fs.writeFile(outputPath, teamHTML, (error) => {
        error ? console.error(error) : "Check output directory for file"
    })
}

//launches whole thing:
launchPrompt();