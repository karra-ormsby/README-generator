// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
//including the generateMardown function from generateMarkdown.js
// const generateMarkdown = require('./generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = inquirer
    .prompt([
        {
            type: 'input',
            name: 'project',
            message: 'What is the name of your project?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a short description explaining the what, why, and how of your project.'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions and examples for use'
        },
        {
            type: 'list',
            message: 'What license are you using?',
            name: 'contalicensect',
            choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense', 'none'],
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Please list your collaborators, if any, with links to their GitHub profiles.'
        },
        {
            type: 'input',
            name: 'test',
            message: 'What tests that can be performed with code examples?'
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub username?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?'
        }
    ]);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
