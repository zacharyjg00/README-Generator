// All of the required packages for the app
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// An array of all of the prompts that are asked to get data on the README
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
        choices: ["None", "ISC", "MIT", "The Unlicense"],
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

// This function takes in a file name which by default is generated-README.md and data and writes all of that to the new file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.log(err);
        }
    });
}

// Function runs the inquirer object and then passes the data into the generateMarkdown from the imported module.
// The return value of generateMarkdown is then passed into writeToFile where the markdown file is created
function init() {
    inquirer
        .prompt(questions)
        .then((data) => {
            writeToFile("generated-README.md", generateMarkdown(data));
        })
}

// Function call to initialize app
init();