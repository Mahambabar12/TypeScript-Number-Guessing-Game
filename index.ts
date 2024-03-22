#!/urs/bin/env (SHABANG)

import inquirer from "inquirer";
import chalk from "chalk";

const randomNumber = Math.floor(Math.random() * 6 + 1);

const  answers = await inquirer.prompt ([
    {name:"userGuessedNumber", type:"number", message:chalk.green("Please guess a number between 1-10")},
]);

if (answers.userGuessedNumber === randomNumber)
{
    console.log(chalk.bgCyanBright("Congratulations! You got it right!"));
}
else
{
    console.log(chalk.bgRedBright("You guessed wrong number"))
}

// const randomNumber = Math.floor(Math.random() * 10 + 1);
// console.log(`Randomly generated number is  ${randomNumber}`);
