// TODO: Include packages needed for this application
//installed inquirer package
//fs is core module - no need to install
//util is core module - no need to install
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

// TODO: Create an array of questions for user input
//inquirer to prompt questions
const questions = () => 
inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message:'What is the name of the project?',
        //validate property to check that the user provided a value
        validate: (value)=>{ if (value){return true} else {return 'I need a value to continue'}},
    },
    {
        type: 'input',
        name: 'description',
        message:'What is the description of the project?',
        //validate property to check that the user provided a value
        validate: (value)=>{ if (value){return true} else {return 'I need a value to continue'}},
    },
    {
        type: 'input',
        name: 'installation',
        message:'How do you install your app?',
        //validate property to check that the user provided a value
        validate: (value)=>{ if (value){return true} else {return 'I need a value to continue'}},
    },
    {
        type: 'input',
        name: 'usage',
        message:'How do you use your app?',
        //validate property to check that the user provided a value
        validate: (value)=>{ if (value){return true} else {return 'I need a value to continue'}},
    },
    {
        type: 'input',
        name: 'contribution',
        message:'Any contributing guidelines to this project?',
        //validate property to check that the user provided a value
        validate: (value)=>{ if (value){return true} else {return 'I need a value to continue'}},
    },
    {
        type: 'input',
        name: 'testing',
        message:'Can you explain your testing procedures for this project?',
        //validate property to check that the user provided a value
        validate: (value)=>{ if (value){return true} else {return 'I need a value to continue'}},
    },
    // list of licenses for the user to select
    {
        type: 'list',
        name: 'license',
        message:'What license is this project covered under?',
        choices:['MIT License', 'GPL License', 'Apache License', 'BSD License', 'N/A'],
        //validate property to check that the user provided a value
        validate: (value)=>{ if (value){return true} else {return 'I need a value to continue'}}
    },
    {
        type: 'input',
        name: 'github',
        message:'What is your Github username?',
        //validate property to check that the user provided a value
        validate: (value)=>{ if (value){return true} else {return 'I need a value to continue'}},
    },
    {
        type: 'input',
        name: 'email',
        message:'What is my email address',
        //validate property to check that the user provided a value
        validate: (value)=>{ if (value){return true} else {return 'I need a value to continue'}},
    },  
]);

// .then(({
//  title,
//  description,
//  installation,
//  usage,
//  contribution,
//  testing,
//  license,
//  github,
//  email,
//  badge
// })=>{

    function template(data){
     
        let badge = "";
        if(data.license == "MIT License"){
            badge = "![License](https://img.shields.io/static/v1?label=License&message=MIT&color=blueviolet&style=plastic)"
        }else if (data.license == "Apache License"){
            badge = "![License](https://img.shields.io/static/v1?label=License&message=APACHE2.0&color=blueviolet&style=plastic)"
        }else if (data.license == "GPL License"){
            badge = "![License](https://img.shields.io/static/v1?label=License&message=GPL3.0&color=blueviolet&style=plastic)"
        }else if (data.license == "BSD License"){
            badge = "![License](https://img.shields.io/static/v1?label=License&message=BSD3&color=blueviolet&style=plastic)"
        }       

//Table of Contents template to be used
   return`# ${data.title}

    ${badge}
    ## Table of Contents:
    * [Description](#description)
    * [Installation](#installation)
    * [Usage](#usage)
    * [Contribution](#contribution)
    * [Testing])(#testing)
    * [License](#license)
    * [Questions](#questions)
    
    ### Description
    ${data.description}

    ### Installation
    ${data.installation}

    ### Usage
    ${data.usage}

    ### Contribution
    ${data.contribution}

    ### Testing
    ${data.testing}

    ### License
    ${data.license}

    ### Questions?
    * Github: https://github.com/${data.github}
    * Email: ${data.email}`;
}

questions()
.then((data) => writeFileAsync('README.md', template(data)))
.then(() => console.log('Your README has been generated!'))
.catch((err) => console.error(err));

// // TODO: Create a function to initialize app
// //Call the function to create our readme using fs
// writeToFile(template);
// }
// );

// // TODO: Create a function to write README file
// //creating our writeToFile function
// function writeToFile(template) {
// //fs
// fs.writeFile('README.md',template,(err)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log('Your README has been generated!');
// })
// }








