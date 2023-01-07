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

function addNumbers(yourName, ...numbers) {
  let total = 0;
  for (i in numbers) {
    total = total + numbers[i];
  }
  return `${yourName}: the total is ${total}`;
}
const newTotal = addNumbers('Chris', 1, 2, 2);
console.log(newTotal);

// Objects with functions
// Objects group sub variables into one variable

const person = {
  name: 'Chris',
  age: 23,
  occupation: 'knight',
  // functions can be added to the object
  // Object literals are more modern
  favQuote(name = 'Default if a parameter is not provided') {
    console.log(`How amusing of you, ${name}.`);
  },
};
// Invoke the function within the object
person.favQuote('Katherine');

// Keys and values can be added to the object even though it's a constant

person['favFood'] = 'cake';
// The favFood has been added to the object
console.log(person);
