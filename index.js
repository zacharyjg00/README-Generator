// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title",
    },
    {
        type: "input",
        message: "What is the description of your project?",
        name: "description",
    },
    {
        type: "input",
        message: "What installation instructions are there?",
        name: "installation",
    },
    {
        type: "input",
        message: "What usage instructions are there?",
        name: "usage",
    },
    {
        type: "list",
        message: "What license, if any, would you like to include in your project?",
        choices: ["None", "ISC", "MIT", "Do What The F*ck You Want To Public License", "The Unlicense"],
        name: "license",
    },
    {
        type: "input",
        message: "What are your contribution guidelines?",
        name: "contributing",
    },
    {
        type: "input",
        message: "What are your testing intructions?",
        name: "tests",
    },
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "username",
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.log(err);
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((data) => {
            writeToFile("sampleREADME.md", generateMarkdown(data));
        })
}

// Function call to initialize app
init();