// TODO: Include packages needed for this application
//including inquirer to prompt the user questions from the command line
const inquirer = require('inquirer');
//including fs to create the new file
const fs = require('fs');
//including the generateMardown function from generateMarkdown.js
const generateMarkdown = require('./utils/generateMarkdown');

//An array of questions for user input
const questions = [
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
            name: 'license',
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
            message: 'Have you written tests for you application? If yes, please provide examples on how to run them here.'
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
    ]


//Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log("README file successfully created!")
    );
}

//Function to initialize app
function init() {
    inquirer
    //takes the questions from the question array and then prompts the user for answers
        .prompt(questions)
        .then((answers) => {
            //takes the users answers and call writeToFile
            //uses generateMarkdown function to get the string we wish to write to the file
            writeToFile("README.md", generateMarkdown(answers));
        });
}

//Function call to initialize app
init();
