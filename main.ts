#! /usr/bin/env node


import inquirer from "inquirer";
import chalk from "chalk";

var condition=true;
console.log(chalk.yellowBright.bold(`WELCOME TO MY TYPESCRIPT QUIZ!`));


while(condition){
 var quiz:string[]=[];

 var Questions=await inquirer.prompt([{
    message:"What does TypeScript offer over JavaScript?",
    type:"list",
    name:"ques1",
    choices:["A) Strong typing","B) Dynamic typing","C) Optional typing","D) No typing"]
 },
 {
    message:"Which keyword is used to declare a variable in TypeScript that can hold multiple types?",
    type:"list",
    name:"ques2",
    choices:["A) any","B) void","C) unknown","D) mixed"]
 },
 {
    message:"What is the purpose of the 'strict' flag in TypeScript compiler options?",
    type:"list",
    name:"ques3",
    choices:["A) Enforce strict mode in JavaScript","B) Enable all strict type-checking options","C) Allow mixing of different data types","D) Disable type checking altogether"]
 },
 {
    message:"What is the key difference between interface and type in TypeScript?",
    type:"list",
    name:"ques4",
    choices:["A) Interfaces can be extended, types cannot","B) Types can be extended, interfaces cannot","C) They are exactly the same","D) Interfaces are used for primitive types, types for complex types"]
 },
 {
    message:"Which TypeScript feature allows you to incrementally migrate JavaScript code to TypeScript?",
    type:"list",
    name:"ques5",
    choices:["A) TypeScript transpiler","B) Declaration merging","C) Type annotations","D) Definitely Typed"]
 },])
 
 quiz.push(Questions.ques1,Questions.ques2,Questions.ques3,Questions.ques4,Questions.ques5);
 

 var correctAns=[
    "A) Strong typing",
    "A) any",
    "B) Enable all strict type-checking options",
    "A) Interfaces can be extended, types cannot",
    "C) Type annotations"
 ]
 
 let score=0;

console.log(chalk.blueBright.bold(`RESULT:`));

for (let i=0;i<quiz.length;i++){
    if(quiz[i] === correctAns[i]){
        console.log(chalk.green(`Correct answer`));
        score++;
    }
    else{
         console.log(chalk.red(`Wrong answer`));
    }
}
console.log(`Your score is ${score}`);
if(score<=3){
    console.log(`You need to work hard..`);
    
}else{
    console.log(`You are good to go!`);
    
}

var attempAgain=await inquirer.prompt({
    message:"Do you want to attmept quiz again?",
    type:"confirm",
    name:'confirm',
    default:false
})
condition=attempAgain.confirm;

}



 
 