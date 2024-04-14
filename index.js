import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    let todoQuestion = await inquirer.prompt([
        {
            name: "firstQuestion",
            type: "input",
            message: "What you want to add in todo list?",
        },
        {
            name: "secondQuestion",
            type: "confirm",
            message: "Do you want to add more",
            default: "true",
        }
    ]);
    todos.push(todoQuestion.firstQuestion);
    condition = todoQuestion.secondQuestion;
    console.log(todos);
}
