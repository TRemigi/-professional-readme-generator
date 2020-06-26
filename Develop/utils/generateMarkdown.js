// function to generate markdown for README
function generateMarkdown(data) {
  const test = {
    title: 'nothingApp',
    description: 'it works',
    installation: 'do it',
    usage: 'use it',
    license: 'Apache 2.0',
    contributing: 'dont',
    testing: 'npm test',
    github: 'tremigi',
    email: 'tayremigi@gmail.com'
  }
  const {
    title,
    description,
    installation,
    usage,
    license,
    contributing,
    testing,
    ...questions
  } = test;

  return `# ${title}

## Description

${description}

## Table of Contents

If your README is very long, add a table of contents to make it easy for users to find what they need.

* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [License](#license)
* [Testing](#testing)
* [Questions](#questions)


## Installation

${installation}


## Usage 

${usage}


## License

${license}


## Contributing

${contributing}


## Testing

${testing}


## Questions

GitHub Profile: ${questions.github}

Reach me via email at ${questions.email}

`;
};

module.exports = generateMarkdown;