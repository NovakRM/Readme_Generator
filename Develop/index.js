// TODO: Include packages needed for this application
let fs = require("fs") //vanilla node module
let util = require("util") //vanilla node module
let inquirer = require("inquirer") //inq module
let generateMarkdown = require("./utils/generateMarkdown") //generatemarkdown as module

const writeFileAsync = util.promisify(fs.writeFile)

// TODO: Create an array of questions for user input
const questions = () =>
    inquirer.prompt([
        {
        type: "input",
        message: "what is the title of your project?",
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


// TODO: Create a function to write README file
function writeToFile(fileName, data) {writeFileAsync("readme.md"), generateMarkdown(data)}

questions()


// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
