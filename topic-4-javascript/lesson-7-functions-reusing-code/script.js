// To create a function, use the function keyword followed by parenthesis.
// Inside the parenthesis, include parameter names separated by a comma
// Inside the curly braces, use the return keyword.

// A simple addition function using number type
function sum(x, y) {
  return x + y;
}

let total = sum(4, 4);

console.log(total);

// A simple function using data type casting
function multiplyNumber(num1, num2) {
  // added Number ensures correct data type is used through type casting
  const total = Number(num1) * Number(num2);
  return total;
}

const multiplyNumberTotal = multiplyNumber(2, 3);
console.log(multiplyNumberTotal);

// A simple string function
function sayHi(name) {
  return `Hello there, ${name}!`;
}

let yourName = sayHi('Ada');
console.log(yourName);

// The rest operator
// A rest ... allows the function to accept an unlimited amount of parameters

function addNumbers(...numbers) {
  let total = 0;
  for (i in numbers) {
    total = total + numbers[i];
  }
  return total;
}

const newTotal = addNumbers(1, 1, 1, 1, 1, 1, 1);
console.log(newTotal);
