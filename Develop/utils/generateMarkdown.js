function generateBadge(license) {
  if (license === 'Apache 2.0') {
    const badge =  'https://img.shields.io/badge/License-Apache%202.0-brightgreen'
    return badge;
  } else if (license === 'GNU GPLv3') {
    const badge = 'https://img.shields.io/badge/License-GNU%20GPLV3-brightgreen'
    return badge;
  } else if (license === 'MIT') {
    const badge = 'https://img.shields.io/badge/License-MIT-brightgreen'
    return badge;
  } else if (license === 'ISC') {
    const badge = 'https://img.shields.io/badge/License-ISC-brightgreen'
    return badge;
  }
}

function addVideo(data) {
  if (data.video) {
    return `
    Click [here](${data.video}) for a video demo`;
  } else if (!data.video) {
    return ``;
  }
};

// function to generate markdown for README
function generateMarkdown(data) {

  const {
    title,
    description,
    installation,
    usage,
    video,
    license,
    contributing,
    testing,
    ...questions
  } = data;

  generateBadge(license)

return `# ${title} ![${license} Badge](${generateBadge(license)})

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
${addVideo(data)}


## License

This project is covered under the following license(s):

${license}


## Contributing

${contributing}


## Testing

${testing}


## Questions

GitHub Profile: [${questions.github}](https://github.com/${questions.github})

Reach me via email at <${questions.email}>

`;
};

module.exports = generateMarkdown;