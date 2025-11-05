/*
===================================================================
Node.js & npm Lab — CLI Calculator
===================================================================

===================================================================
LAB SETUP INSTRUCTIONS
===================================================================

1. Navigate to the project root folder (if you are not in root directory):
   Open your terminal and run:
      cd 6-1-node-npm-Dromarjh-main
2. Initialize npm project (if not already done):
   Run:
      npm init -y
   This creates a package.json file that manages your project dependencies.

3. Install project dependencies:
   Run:
      npm install lodash
   This installs the lodash package, which provides useful utility functions.

   If your system blocks running npm commands (especially on Windows PowerShell),
   run this command first to allow script execution:
      Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass

===================================================================
TODO 1: Import Required Modules (in calculator.js)
===================================================================
import { add, subtract, multiply, divide } from "./utils/operations.js";
import { parseNumbers, isValidOperation } from "./utils/parser.js";
import _ from "lodash"; // lodash imported from npm

===================================================================
TODO 2: Parse Command Line Arguments (in calculator.js)
===================================================================
const operation = process.argv[2];
const numbers = process.argv.slice(3);

===================================================================
TODO 3: Validate Input and Calculate (in calculator.js)
===================================================================
if (!isValidOperation(operation)) {
  console.log("Invalid operation. Use: add, subtract, multiply, or divide");
  process.exit(1);
}

const nums = parseNumbers(numbers);

if (_.isEmpty(nums)) {
  console.log("Please provide valid numbers!");
  process.exit(1);
}

let result;

switch (operation) {
  case "add":
    result = add(nums);
    break;
  case "subtract":
    result = subtract(nums);
    break;
  case "multiply":
    result = multiply(nums);
    break;
  case "divide":
    result = divide(nums);
    break;
  default:
    console.log("Invalid operation. Use: add, subtract, multiply, or divide");
    process.exit(1);
}

console.log(`Result: ${result}`);

===============================================================
TODO 4: Create Math Operation Functions (in utils/operations.js)
===============================================================
// Add all numbers
export function add(numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
}

// Subtract all numbers (start with first)
export function subtract(numbers) {
  return numbers.slice(1).reduce((res, num) => res - num, numbers[0]);
}

// Multiply all numbers
export function multiply(numbers) {
  return numbers.reduce((product, num) => product * num, 1);
}

// Divide all numbers (handle divide by zero)
export function divide(numbers) {
  return numbers.slice(1).reduce((res, num) => {
    if (num === 0) {
      console.log("Error: Division by zero!");
      process.exit(1);
    }
    return res / num;
  }, numbers[0]);
}
===============================================================
TODO 5: Create Parser Functions Using Lodash (in utils/parser.js)
===============================================================
import _ from "lodash";

// ===================================
// TODO 5.1: Parse Numbers Function
// ===================================
export function parseNumbers(input) {
  const numbers = _.map(input, (str) => Number(str));
  return _.compact(numbers);
}

// ===================================
// TODO 5.2: Validate Operation Function
// ===================================
export function isValidOperation(operation) {
  const validOps = ["add", "subtract", "multiply", "divide"];
  return _.includes(validOps, operation);
}
===============================================================
Testing Your Calculator
===============================================================
After completing all TODOs, test your calculator:
  node calculator.js add 5 10 15
  Expected output: Result: 30

  node calculator.js subtract 20 5 3
  Expected output: Result: 12

  node calculator.js multiply 2 3 4
  Expected output: Result: 24

  node calculator.js divide 20 2 5
  Expected output: Result: 2

  node calculator.js invalid 1 2 3
  Expected output: Invalid operation. Use: add, subtract, multiply, or divide

*/
