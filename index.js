//Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const createPage= require("./src/template")

const teamMembers= [];

const init = () => {
    addTeamMember ()
  };

function addTeamMember(){
    inquirer.prompt([
        {
            type: "list",
            name: "teamRole",
            message: "What team member would you like to add next?",
            choices: ["Manager", "Engineer", "Intern", "No more team members"]
        },
    ]).then(choices => {
        switch (choices.teamRole){
            case "Manager":
                addManager();
                break;
            case "Engineer":
                addEngineer();
                break;
            case "Intern":
                addIntern();
                break;
            case "No more team members":
                createHTML(); //took this from the templatejs. not sure where to put this yet 
                break;
        }
    })
};

function addManager (){
    inquirer.prompt([
        {
            type: "input",
            name: "mName",
            message:"What is the employee's name?",
        },
        {
            type: "number",
            name: "mID",
            message: "what is the employee's ID?",
        },
        {
            type: "input",
            name: "mEmail",
            message: "What is the employee's email?",
        },
        {
            type: "input",
            name: "officeNumber",
            message: "What is the employee's office number?",
        },
    ]).then(answers => {
        const m= new Manager(answers.mName, answers.mID, answers.mEmail, answers.officeNumber);
        teamMembers.push(m);
        console.log("Member added to the team!")
        addTeamMember();
    })
};

function addEngineer (){
    inquirer.prompt([
        {
            type: "input",
            name: "eName",
            message:"What is the employee's name?",
        },
        {
            type: "number",
            name: "eId",
            message: "what is the employee's ID?",
        },
        {
            type: "input",
            name: "eEmail",
            message: "What is the employee's email?",
        },
        {
            type: "input",
            name: "Github",
            message: "What is the employee's Github username?",
        }
    ]).then(answers => {
        const e= new Engineer(answers.eName, answers.eId, answers.eEmail, answers.Github);
        teamMembers.push(e);
        console.log("Member added to the team!")
        addTeamMember();
    })
};

function addIntern (){
    inquirer.prompt([
        {
            type: "input",
            name: "iName",
            message:"What is the employee's name?",
        },
        {
            type: "number",
            name: "iId",
            message: "what is the employee's ID?",
        },
        {
            type: "input",
            name: "iEmail",
            message: "What is the employee's email?",
        },
        {
            type: "input",
            name: "school",
            message: "What is the employee's school?",
        }
    ]).then(answers => {
        const i= new Intern(answers.iName, answers.iId, answers.iEmail, answers.school);
        teamMembers.push(i);
        console.log("Member added to the team!")
        addTeamMember();
    })
};


function createHTML(teamMembers) {
    fs.writeFileSync("./src/template.js",createPage(teamMembers), "UTF-8")
}

init();