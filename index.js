const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');
//const writeToFile = util

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
]);
}


//For the data.license function to work correctly the license queston in the inquirer
// must save a variable from a list of choices. Then, we will input that variable into
// a conditionaly that will grab the relevant license and add it to our readme.


// function to initialize program
async function init() {
    try { 
        
        
    const answers = await questions(); 
    const html = generateMarkdown(answers); 
    console.log(html)
    writeFile("ReadMe.md",generateMarkdown(answers))
    } catch(error) {}
}
// function to write README file
function writeFile(fileName, data) { 
    return fs.writeFileSync(path.join(process.cwd(),fileName), data)

}

// function call to initialize program
init();
