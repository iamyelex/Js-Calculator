let operator = prompt(
  "which Operation would you like to perform +, -, *, /"
);
let num1 = prompt("Enter first nuber");
let num2 = prompt("Enter second nuber");

if (operator == "+") {
  result = parseInt(num1) + parseInt(num2);
} 
else if (operator == "-") {
  result = num1 - num2;
} 
else if (operator == "*") {
  result= num1 * num2;
} 
else if (operator == "/") {
  result= num1 / num2;
} 
// else if (operator == "%") {
//   result= num1 % num2;
// } 
else {
  result="Not a valid entry. please try again"
}

alert(result)