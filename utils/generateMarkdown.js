function renderLicenseBadge(license) {
  if (license == "None") {
    return "";
  } else if (license == "ISC") {
    return `
    [![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`;
  } else if (license == "MIT") {
    return `
    [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  } else if (license == "Do What The F*ck You Want To Public License") {
    return `
    [![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)`;
  } else if (license == "The Unlicense") {
    return `
    [![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == "None") {
    return "";
  } else if (license == "ISC") {
    return `
    This project is created under the ISC license. To read more information on this license, visit https://opensource.org/licenses/ISC.`
  } else if (license == "MIT") {
    return `
    This project is created under the MIT license. To read more information on this license, visit https://opensource.org/licenses/MIT.`
  } else if (license == "Do What The F*ck You Want To Public License") {
    return `
    This project is created under the Do What The F*ck You Want To Public License. To read more information on this license, visit http://www.wtfpl.net/about/.`
  } else if (license == "The Unlicense") {
    return `
    This project is created under the The Unlicense license. To read more information on this license, visit http://unlicense.org/.`
  }
}

function buildHeader(text) {
  return `
## ${text}`
}

function renderTableOfContentsItem(title) {
  return `
* [${title}](#${title.toLowerCase()})`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let finalMarkdown = `# ${data.title}`;
  // build badge area
  // build description header
  finalMarkdown += buildHeader("Description");
  // build description content
  // build table of contents header
  finalMarkdown += buildHeader("Table Of Contents");
  // for each item the user gave an answer for, create a TOC item
  if (data.Installation) {
    renderTableOfContentsItem("Installation")
  }
  if (data.Usage) {
    renderTableOfContentsItem("Usage")
  }
  // build each individual section; only for the ones the user gave info for
  if (data.Installation) {
    finalMarkdown += `## Installation
    ${data.Installation}`
  }
  return finalMarkdown;
}

module.exports = generateMarkdown;
