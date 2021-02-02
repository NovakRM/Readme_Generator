// TODO: Include packages needed for this application
const fs = require("fs") //vanilla node module
const util = require("util") //vanilla node module
const inquirer = require("inquirer") //inq module
const generateMarkdown = require("./utils/generateMarkdown") //generatemarkdown as module

const writeFileAsync = util.promisify(fs.writeFile)
//ensures that filewrite function will fire after everythings been written? Ask Eli to talk about this again?

// TODO: Create an array of questions for user input
const questions = () =>
    inquirer.prompt([
        {
        type: "input",
        message: "what's your projects name?",
        name: "title"
        },

        {
        type: "input",
        message: "describe what it does",
        name: "description"
        },

        {
        type: "input",
        message: "how is it installed?",
        name: "installation"
        },
        
        {
        type: "input",
        message: "what is your usage information?",
        name: "usage"
        },

        {
        type: "input",
        message: "what are your contribution guidelines?",
        name: "contributing"
        },

        {
        type: "input",
        message: "what are your test instructions?",
        name: "tests"
        },   

        {
        type: "checkbox",
        message: "what license do you use? (skip if unsure)",
        name: "license",
        choices: ['MIT','GNU GPL v3','ISC', 'none']
        },   

        {
        type: "input",
        message: "enter your github username",
        name: "github"
        }, 

        {
        type: "input",
        message: "enter your email address",
        name: "email"
        }, 

])


questions()
    .then((data) => writeFileAsync("readmetest.md", generateMarkdown(data)))
    .then(() => console.log("successfully wrote readmetest.md!"))
    .catch((error) => console.error(error))
//

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}
// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();


