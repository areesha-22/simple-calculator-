import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "enter first number", type: "number", name: "firstnumber" },
    { message: "enter second number", type: "number", name: "secondnumber" },
    {
        message: "select any one operator",
        type: "list",
        name: "operator",
        choices: ["+", "-", "*", "/"],
    },
]);
if (answer.operator === "+") {
    console.log(answer.firstnumber + answer.secondnumber);
}
else if (answer.operator === "-") {
    console.log(answer.firstnumber - answer.secondnumber);
}
else if (answer.operator === "*") {
    console.log(answer.firstnumber * answer.secondnumber);
}
else if (answer.operator === "/") {
    console.log(answer.firstnumber / answer.secondnumber);
}
else {
    console.log("invalid operator");
}
