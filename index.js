//Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

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
        {
            type: "input",
            name: "teamName",
            message:"What is the employee's name?",
            validate: answer => {
                if (answer === " "){
                    console.log("please enter the employee's name!")
                    return false; 
                } else {
                    return true;
                }
            }
        },
        {
            type: "number",
            name: "teamId",
            message: "what is the employee's ID?",
            validate: answer => {
                if (answer === " "){
                    console.log("please enter the employee's ID number!")
                    return false; 
                } else {
                    return true;
                }
            }
        },
        {
            type: "input",
            name: "teamEmail",
            message: "What is the employee's email?",
            validate: answer => {
                if (answer === " "){
                    console.log("please enter the employee's email!")
                    return false; 
                } else {
                    return true;
                }
            }
        },



        
    ])
};

function addEngineer(){};

function addIntern(){};


init();