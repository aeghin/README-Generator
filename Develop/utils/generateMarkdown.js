// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      return "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
    case "Apache 2.0":
      return "![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)";
    case "GPL 3.0":
      return "![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)";
    case "BSD 3":
      return "![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)";
    case "None":
      return;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "MIT":
      return "https://opensource.org/licenses/MIT";
    case "Apache 2.0":
      return "https://opensource.org/licenses/Apache-2.0";
    case "GPL 3.0":
      return "http://www.gnu.org/licenses/gpl-3.0";
    case "BSD 3":
      return "https://opensource.org/licenses/BSD-3-Clause";
    case "None":
      return;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    let licenseSection =
      `## License\n\nThis application is covered under the license of [${license}](${renderLicenseLink(license)})`;

    return licenseSection;
  } else {
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let readMe =
    `# ${data.title}
${renderLicenseBadge(data.license)}
## Description\n
${data.description}
## Table of Contents\n
* [Installation](#installation)\n
* [Usage](#usage)\n
* [Contributing](#contributing)\n
* [Tests](#tests)\n
* [Questions](#questions)
## Installation\n
We used the following npm(s):\n
* ${data.library}
## Usage\n
${data.usage}
## Contributing\n
${data.contributing}
## Tests\n
To run a test, run the following command:\n
* ${data.tests}
${renderLicenseSection(data.license)}
## Questions\n
If you have any questions about the repo, open an issue or contact me directly at ${data.email}. You can find more of my work at [${data.username}](https://github.com/${data.username}).`;

  return readMe;
}

module.exports = generateMarkdown;
