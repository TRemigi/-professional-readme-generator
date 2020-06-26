// function to generate markdown for README
function generateMarkdown(data) {

  const {
    title,
    description,
    installation,
    usage,
    license,
    contributing,
    testing,
    ...questions
  } = data;

return `# ${title}

## Description

${description}


## Table of Contents

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

GitHub Profile: [${questions.github}](https://github.com/${questions.github})

Reach me via email at [${questions.email}](${questions.email})

`;
};

module.exports = generateMarkdown;