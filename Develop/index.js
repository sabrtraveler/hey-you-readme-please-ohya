// TODO: Include packages needed for this application
//installed inquirer package
//file system is core module - no need to install
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
//inquirer to prompt questions
const questions = inquirer.prompt(
    [
    {
        type: 'input',
        name: 'title',
        message='What is the name of the project?',
        //validate property to check that the user provided a value
        validate: (value)=>{ if (value){return true} else {return 'I need a value to continue'}},
    },
    {
        type: 'input',
        name: 'description',
        message='What is the description of the project?',
        //validate property to check that the user provided a value
        validate: (value)=>{ if (value){return true} else {return 'I need a value to continue'}},
    },
    {
        type: 'input',
        name: 'installation',
        message='How do you install your app?',
        //validate property to check that the user provided a value
        validate: (value)=>{ if (value){return true} else {return 'I need a value to continue'}},
    },
    {
        type: 'input',
        name: 'usage',
        message='How do you use your app?',
        //validate property to check that the user provided a value
        validate: (value)=>{ if (value){return true} else {return 'I need a value to continue'}},
    },
    {
        type: 'input',
        name: 'contribution',
        message='Any contributing guidelines to this project?',
        //validate property to check that the user provided a value
        validate: (value)=>{ if (value){return true} else {return 'I need a value to continue'}},
    },
    {
        type: 'input',
        name: 'testing',
        message='Can you explain your testing procedures for this project?',
        //validate property to check that the user provided a value
        validate: (value)=>{ if (value){return true} else {return 'I need a value to continue'}},
    },
    // list of licenses for the user to select
    {
        type: 'list',
        name: 'license',
        message='What license is this project covered under?',
        choices:['The MIT license', 'The GPL License', 'Apache License', 'GNU license', 'N/A'],
        //validate property to check that the user provided a value
        validate: (value)=>{ if (value){return true} else {return 'I need a value to continue'}},
    },
    {
        type: 'input',
        name: 'github',
        message='What is your Github username?',
        //validate property to check that the user provided a value
        validate: (value)=>{ if (value){return true} else {return 'I need a value to continue'}},
    },
    {
        type: 'input',
        name: 'email',
        message='What is my email address',
        //validate property to check that the user provided a value
        validate: (value)=>{ if (value){return true} else {return 'I need a value to continue'}},
    },  
]
).then(({
 title,
 description,
 installation,
 usage,
 contribution,
 testing,
 license,
 github,
 email
})=>{
    //template to be used
    const template = `# ${title}
    
    * [Description] (#description)
    * [Installation](#installation)
    * [Usage](#usage)
    * [Contribution](#contribution)
    * [License](#license)
    # Description
    ${description}
    ## Installation
    ${installation}
    ## Usage
    ${usage}
    ## Contribution
    ${contribution}
    ## Testing
    ${testing}
    ## License
    ${license}

    # Contact
    * Githb :${github}
    * Email :${email}`;
    //Function to create our readme using fs
    // TODO: Create a function to write README file
function writeToFile(fileName, data) {}

}
)



// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();


fs.writeFile('Readme.md', writeToFile(), err =>{
    if (err) throw err;

    console.log('Readme complete! Check out Readme.md to see the output!');

});