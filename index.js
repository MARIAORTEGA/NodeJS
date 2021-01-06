const inquirer = require('inquirer');
const generateMarkdown = require('./generateMarkdown');
const writeToFile = util

// array of questions for user
const questions = () => { 
    return inquirer.prompt([
    {  
        type: 'input',  
        name: 'title',  
        message: 'What is the title of your project?',  
        },  
        {  
        type: 'input',  
        name: 'description',  
        message: 'Describe your project:',  
        },  
        {  
        type: 'input',  
        name: 'installation',  
        message: 'What are the installation instructions?',  
        },  
        {  
        type: 'input',  
        name: 'usage',  
        message: 'Include usage information:',  
        },  
        {  
        type: 'input',  
        name: 'contribution',  
        message: 'Include contribution guidelines:',  
        },  
        {  
        type: 'input',  
        name: 'test',  
        message: 'Include test instructions.',  
        },  
        {  
        type: 'list',  
        name: 'license',  
        message: 'Please select a license:', 
        choices: ['MIT'],
        },  
        {  
        type: 'input',  
        name: 'username',  
        message: 'Enter username:',  
        },  
        {  
        type: 'input',  
        name: 'email',  
        message: 'Enter email:',  
        },   
];

// function to write README file
function writeToFile()(fileName, JSON.stringify(data, null, '\t'), (err) => 
err ? console.log(err) : console.log('Success!')} 



// function to initialize program
function init() {= async () => { 
    try { 
    const answers = await questions(); 
    const html = generateMarkdown(answers); 
}

// function call to initialize program
init();
