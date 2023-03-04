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
const managerQs = [
    {
        type: 'input',
        name: 'office-number',
        message: 'Please enter office number of manager'
    },
    {
        type: 'input',
        name: 'manager-name',
        message: 'Please enter name of manager'
    },
    {
        type: 'input',
        name: 'id',
        message: 'Please enter id of manager'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter email address of manager'
    },
    {
        type: 'list',
        name: 'role',
        message: 'please select role of additional employee to add',
        choices: ['Engineer', 'Intern']
    },
    {
        type: 'input',
        name: 'back-to-menu',
        message: 'press enter to be taken back to the menu'
    }
];

console.log(managerQs);

const engineer = [
        {
            type: 'input',
            name: 'eng-name',
            message: 'Please enter name of engineer'
        },
        {
            type: 'input',
            name: 'eng-id',
            message: 'Please enter id of engineer'
        },
        {
            type: 'input',
            name: 'eng-email',
            message: 'Please enter email address of engineer'
        },
            {
        type: 'input',
        name: 'github',
        message: 'Please enter github username of engineer'
    }
];

console.log(engineer);

const intern = [
    {
        type: 'input',
        name: 'int-name',
        message: 'Please enter name of intern'
    },
    {
        type: 'input',
        name: 'int-id',
        message: 'Please enter id of intern'
    },
    {
        type: 'input',
        name: 'int-email',
        message: 'Please enter email address of intern'
    },
    {
        type: 'input',
        name: 'school',
        message: 'Please enter school of intern'
    }
];

console.log(intern);