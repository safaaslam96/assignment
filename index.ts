//Assignment
//Name:Safa Aslam

//Table with using simple loops
for (let i = 1; i <= 15; i++) {
  console.log(9, "x", i, "=", i * 9);

  // Functions to print any Table
  function table(num: number) {
    for (let i = 1; i <= 10; i++) {
      console.log(`${num} x ${i} = ${num * i}`);
    }
  }
  table(6);
}

// Print any table with Inquirer by using async function

import inquirer from "inquirer";

async function makeTable() {
  let userNum = await inquirer.prompt([
    {
      name: "number",
      type: "number",
      message: "Enter a number whose table you want to print",
    },
  ]);

  for (let i = 1; i <= 10; i++) {
    console.log(`${userNum.number} x ${i} = ${userNum.number * i}`);
  }

  return userNum;
}

let table = makeTable();

console.log(table);
