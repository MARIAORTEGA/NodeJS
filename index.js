const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");
//const writeToFile = util

// array of questions for user
const questions = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What is the title of your project?",
    },
    {
      type: "input",
      name: "description",
      message: "Describe your project:",
    },
    {
      type: "input",
      name: "installation",
      message: "What are the installation instructions?",
    },
    {
      type: "input",
      name: "usage",
      message: "Include usage information:",
    },
    {
      type: "input",
      name: "contribution",
      message: "Include contribution guidelines:",
    },
    {
      type: "input",
      name: "test",
      message: "Include test instructions.",
    },
    {
      type: "list",
      name: "license",
      message: "Please select a license:",
      choices: ["MIT"],
    },
    {
      type: "input",
      name: "username",
      message: "Enter username:",
    },
    {
      type: "input",
      name: "email",
      message: "Enter email:",
    },
  ]);
};

//For the data.license function to work correctly the license queston in the inquirer
// must save a variable from a list of choices. Then, we will input that variable into
// a conditionaly that will grab the relevant license and add it to our readme.

// function to initialize program
async function init() {
  try {
    const answers = await questions();
    const html = generateMarkdown(answers);
    console.log(html);
    writeFile("ReadMe.md", generateMarkdown(answers));
  } catch (error) {}
}
// function to write README file
function writeFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// function call to initialize program
init();

// notes:
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README
