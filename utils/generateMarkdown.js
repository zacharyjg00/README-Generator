// This function is a helper that will give the correct markdown for the badge for the given license by the user
function renderLicenseBadge(license) {
  if (license == "None") {
    return "";
  } else if (license == "ISC") {
    return " [![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
  } else if (license == "MIT") {
    return " [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (license == "The Unlicense") {
    return " [![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
  }
}

// This function is a helper that will give the correct markdown for the text for the given license by the user along with the link
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
This project is created under the The Unlicense license. To read more information on this license, visit http://unlicense.org/.`
  }
}

// This function builds the headers for each section that is given by the user
function buildHeader(text) {
  return `
## ${text}`
}

// This function gives the markdown for an entry in the table of contents
function renderTableOfContentsItem(title) {
  return `
* [${title}](#${title.toLowerCase()})`
}

// This function generates all of the markdown based on the passed in data from inquirer
function generateMarkdown(data) {
  // This initializes the markdown string to be written to the file by inserting the given title
  let finalMarkdown = `# ${data.title}`;

  // This inserts the badge for the license so long as the user actually selected a license
  if (data.license != "None") {
    finalMarkdown += renderLicenseBadge(data.license);
  }

  // This creates the description section and populates it with the description
  if (data.description) {
    finalMarkdown += buildHeader("Description");
    finalMarkdown += `
${data.description}`;
  }

  // This section goes through all of the available options and adds it to the ToC if a response was given
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

  // Lines 85-112 are the generation and populating of all of the sections possible from the prompts if the user gave input for them
  if (data.installation) {
    finalMarkdown += buildHeader("Installation");
    finalMarkdown += `
${data.installation}`;
  }

  if (data.usage) {
    finalMarkdown += buildHeader("Usage");
    finalMarkdown += `
${data.usage}`;
  }

  if (data.license != "None") {
    finalMarkdown += buildHeader("License");
    finalMarkdown += renderLicenseSection(data.license);
  }

  if (data.contributing) {
    finalMarkdown += buildHeader("Contributing");
    finalMarkdown += `
${data.contributing}`;
  }

  if (data.tests) {
    finalMarkdown += buildHeader("Tests");
    finalMarkdown += `
${data.tests}`;
  }

  // Lines 115-127 is for the generation of the Questions section based upon what the user inputted. If they input both a GitHub username and an email, then both are included
  // If they only gave one of the two then the appropriate text is populated
  if (data.username && data.email) {
    finalMarkdown += buildHeader("Questions");
    finalMarkdown += `
If you have any questions about the repo, please open an issue or contact me directly at ${data.email}. You can find more of my work at [${data.username}](https://github.com/${data.username}/).`
  } else if (data.username) {
    finalMarkdown += buildHeader("Questions");
    finalMarkdown += `
If you have any questions about the repo, please open an issue. You can find more of my work at [${data.username}](https://github.com/${data.username}/).`
  } else if (data.email) {
    finalMarkdown += buildHeader("Questions");
    finalMarkdown += `
If you have any questions about the repo, open an issue or contact me directly at ${data.email}.`
  }

  // Finally, the markdown text is returned
  return finalMarkdown;
}

// This exports the above code into a module which is then used in the index.js file
module.exports = generateMarkdown;
