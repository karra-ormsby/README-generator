//Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseBadge
  switch (license){
    case "GNU AGPLv3":
      licenseBadge = '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)';
      break;
    case "GNU GPLv3":
      licenseBadge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
      break;
    case "GNU LGPLv3":
      licenseBadge = '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)';
      break;
    case "Mozilla Public License 2.0":
      licenseBadge = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
      break;
    case "Apache License 2.0":
      licenseBadge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
      break;
    case "MIT License":
      licenseBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
      break;
    case "Boost Software License 1.0":
      licenseBadge = '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
      break;
    case "The Unlicense":
      licenseBadge = '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)';
      break;
    case "none":
      licenseBadge = '';
      break;
  }
  return licenseBadge;
}

//Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink
  switch (license) {
    case "GNU AGPLv3":
      licenseLink = 'https://choosealicense.com/licenses/agpl-3.0/';
      break;
    case "GNU GPLv3":
      licenseLink = 'https://choosealicense.com/licenses/gpl-3.0/';
      break;
    case "GNU LGPLv3":
      licenseLink = 'https://choosealicense.com/licenses/lgpl-3.0/';
      break;
    case "Mozilla Public License 2.0":
      licenseLink = 'https://choosealicense.com/licenses/mpl-2.0/';
      break;
    case "Apache License 2.0":
      licenseLink = 'https://choosealicense.com/licenses/apache-2.0/';
      break;
    case "MIT License":
      licenseLink = 'https://choosealicense.com/licenses/mit/';
      break;
    case "Boost Software License 1.0":
      licenseLink = 'https://choosealicense.com/licenses/bsl-1.0/';
      break;
    case "The Unlicense":
      licenseLink = 'https://choosealicense.com/licenses/bsl-1.0/';
      break;
    case "none":
      licenseLink = '';
      break;
  }
  return licenseLink;
 
}

//Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseData;
  switch (license) {
    case "GNU AGPLv3":
      licenseData = 'Permissions of this strongest copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. When a modified version is used to provide a service over a network, the complete source code of the modified version must be made available.';
      break;
    case "GNU GPLv3":
      licenseData = 'Permissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights.';
      break;
    case "GNU LGPLv3":
      licenseData = 'Permissions of this copyleft license are conditioned on making available complete source code of licensed works and modifications under the same license or the GNU GPLv3.Copyright and license notices must be preserved.Contributors provide an express grant of patent rights.However, a larger work using the licensed work through interfaces provided by the licensed work may be distributed under different terms and without source code for the larger work.';
      break;
    case "Mozilla Public License 2.0":
      licenseData = 'Permissions of this weak copyleft license are conditioned on making available source code of licensed files and modifications of those files under the same license (or in certain cases, one of the GNU licenses). Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. However, a larger work using the licensed work may be distributed under different terms and without source code for files added in the larger work.';
      break;
    case "Apache License 2.0":
      licenseData = 'A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code.';
      break;
    case "MIT License":
      licenseData = 'A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.';
      break;
    case "Boost Software License 1.0":
      licenseData = 'A simple permissive license only requiring preservation of copyright and license notices for source (and not binary) distribution. Licensed works, modifications, and larger works may be distributed under different terms and without source code.';
      break;
    case "The Unlicense":
      licenseData = 'A license with no conditions whatsoever which dedicates works to the public domain. Unlicensed works, modifications, and larger works may be distributed under different terms and without source code.';
      break;
    case "none":
      licenseData = ''
      break;
  }
  return licenseData;
}

//Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.project}

   ${renderLicenseBadge(data.license)}
   

## Description

${data.description}

## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Test](#tests)
  - [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

## License

${data.license}

${renderLicenseSection(data.license)}

${renderLicenseLink(data.license)}

## Contributing

${data.contributing}

## Tests

${data.test}

## Questions

Any questions please see my GitHub repo at: https://github.com/${data.github}

Any additionals questions you can email me at: ${data.email}`
}

module.exports = generateMarkdown;
