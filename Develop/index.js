// add generateMarkdown
const generateMarkdown = require('./utils/generateMarkdown.js');
// add inquirer
const inquirer = require('inquirer');

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter the name of your project');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please describe your project:',
        validate: descInput => {
            if (descInput) {
                return true;
            } else {
                console.log('Please provide a description of your project');
                return false;
            }
        }
    }
];

// function to write README file
function writeToFile(fileName, data) {}

// function to initialize program
function init(questionsArr) {
    const answerData = []
    console.log(`
    =================
    Create New README
    =================
    `)
    return inquirer.prompt(questionsArr)
    .then(answers => {
        answerData.push(answers);
        console.log(answers)
    });
};

// function call to initialize program
init(questions);