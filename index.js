import inquirer from "inquirer";
//     for (let i = 1; i <= 10; i++) {
//         console.log(`${6} x ${i} = ${i * 6}`);
//     }
// let number = await inquirer.prompt([
//     {
//      name:"Table of 6",
//      type:"number",
//     }
// ]);
//   console.log("print table of 6");
async function makeTable() {
    let userNum = await inquirer.prompt([
        {
            name: "number",
            type: "number",
            message: "Enter a number whose table you want to print"
        }
    ]);
    for (let i = 1; i <= 10; i++) {
        console.log(`${userNum.number} x ${i} = ${userNum.number * i}`);
    }
    return userNum;
}
let table = makeTable();
console.log(table);
