/const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMd = require("./utils/generateMarkdown");

// set the fs.writeFile function to use promises
const writeFileAsync = util.promisify(fs.writeFile);

// array of questions to use with inquirer 
const questions = [
    {
        type: "input",
        message: "What is your GitHub user name?",
        name: "username"
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email"
    },