function renderLicenseBadge(license) {
  if (license == "None") {
    return "";
  } else if (license == "ISC") {
    return " [![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
  } else if (license == "MIT") {
    return " [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (license == "Do What The F*ck You Want To Public License") {
    return " [![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)";
  } else if (license == "The Unlicense") {
    return " [![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
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

  if (data.license != "None") {
    finalMarkdown += renderLicenseBadge(data.license);
  }

  if(data.description) {
    finalMarkdown += buildHeader("Description");
    finalMarkdown += `
    ${data.description}
    `;
  }

  finalMarkdown += buildHeader("Table Of Contents");
  if (data.description) {
    finalMarkdown += renderTableOfContentsItem("Description");
  }
  if (data.installation) {
    finalMarkdown += renderTableOfContentsItem("Installation");
  }
  if (data.usage) {
    finalMarkdown += renderTableOfContentsItem("Usage");
  }
  if (data.license != "None") {
    finalMarkdown += renderTableOfContentsItem("License");
  }
  if (data.contributing) {
    finalMarkdown += renderTableOfContentsItem("Contributing");
  }
  if (data.tests) {
    finalMarkdown += renderTableOfContentsItem("Tests");
  }
  if (data.username || data.email) {
    finalMarkdown += renderTableOfContentsItem("Questions");
  }

  // build each individual section; only for the ones the user gave info for
  if (data.installation) {
    finalMarkdown += buildHeader("Installation");
    finalMarkdown += `
    ${data.installation}`
  }

  if (data.usage) {
    finalMarkdown += buildHeader("Usage");
    finalMarkdown += `
    ${data.usage}`
  }
  
  if (data.license != "None") {
    finalMarkdown += buildHeader("License");
    finalMarkdown += renderLicenseSection(data.license);
  }

  if (data.contributing) {
    finalMarkdown += buildHeader("Contributing");
    finalMarkdown += `
    ${data.contributing}`
  }

  if (data.tests) {
    finalMarkdown += buildHeader("Tests");
    finalMarkdown += `
    ${data.tests}`
  }

  if (data.username && data.email) {
    finalMarkdown += buildHeader("Questions");
    finalMarkdown += `
    If you have any questions about the repo, please open an issue or contact me directly at ${data.email}. You can find more of my work at`
    finalMarkdown += " [" + data.username + "](https://github.com/" + data.username + "/)."
  } else if (data.username) {
    finalMarkdown += buildHeader("Questions");
    finalMarkdown += `
    If you have any questions about the repo, please open an issue. You can find more of my work at` 
    finalMarkdown += " [" + data.username + "](https://github.com/" + data.username + "/)."
  } else if (data.email) {
    finalMarkdown += buildHeader("Questions");
    finalMarkdown += `
    If you have any questions about the repo, open an issue or contact me directly at ${data.email}.`
  }

  return finalMarkdown;
}

module.exports = generateMarkdown;
