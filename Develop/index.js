// add generateMarkdown
const generateMarkdown = require('./utils/generateMarkdown.js');
// add inquirer
const inquirer = require('inquirer');
// add fs
const fs = require('fs');
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
                console.log('REQUIRED:');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Describe your project:',
        validate: descInput => {
            if (descInput) {
                return true;
            } else {
                console.log('REQUIRED:');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Provide a description of how to install your project:',
        validate: installInput => {
            if (installInput) {
                return true;
            } else {
                console.log('REQUIRED:');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide usage instructions and/or examples:',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('REQUIRED:');
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license:',
        choices: ['Apache 2.0', 'GNU GPLv3', 'MIT', 'ISC'],
        validate: licenseInput => {
            if (licenseInput) {
                return true;
            } else {
                console.log('REQUIRED:');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Provide contribution guidelines:',
        validate: contInput => {
            if (contInput) {
                return true;
            } else {
                console.log('REQUIRED:');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'testing',
        message: 'Provide project testing instructions:',
        validate: testInput => {
            if (testInput) {
                return true;
            } else {
                console.log('REQUIRED:');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub Username?',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('REQUIRED:');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('REQUIRED:');
                return false;
            }
        }
    }
];

// function to write README file
function writeToFile(fileName, markDown) {
    
    fs.writeFile('../' + fileName, markDown, function(err) {
        if (err) {
          return console.log(err);
        }
  
        console.log('README created!');
      });
};

// function to initialize program
function init(questionsArr) {
    // const answerData = [];
    console.log(`
  =================
  Create New README
  =================
    `);
    return inquirer.prompt(questionsArr)
    .then(answers => {
        return generateMarkdown(answers)
    })
    .then(markDown => {
        const fileName = markDown
        .toLowerCase()
        .split('# ')[1]
        .split('!')[0]
        .replace(/\s+/g, '')
        + '-README.md';
        writeToFile(fileName, markDown)
    })
};

// function call to initialize program
init(questions);
