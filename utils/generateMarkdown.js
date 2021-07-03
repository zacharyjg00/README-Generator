// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

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
