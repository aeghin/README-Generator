// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
    {
        message: "What is your Github username?",
        name: "username",
    },
    {
        message: "What is your email address?",
        name: "email",
    },
    {
        message: "What is your project's name?",
        name: "title",
    },
    {
        message: "Please write a short description of your project:",
        name: "description",
    },
    {
        type: "list",
        choices: ["MIT", "Apache 2.0", "GPL 3.0", "BSD 3", "None"],
        message: "What kind of license should your project have?",
        name: 'license',
    },
    {
        message: "What npm's did you use?",
        name: "library"
    },
    {
        message: "What is the command to run the file within node?",
        name: "tests"
        
    },
    {
        message: "What does the user need to know about using the repo?",
        name: "usage",
    },
    {
        message: "What does the user need to know about contributing to the repo?",
        name: "contributing",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) => {
        err ? console.error(err) : console.log(".MD File created!")
    }
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((response) => {
            writeToFile(`${response.title}.md`, response)
        });
}

// Function call to initialize app
init();
