// JavaScript Data Types
const str = 'A string'; // string
const num = 2; // number
const flt = 3.14; // float (it has a decimal)
const boolean = true; // either true or false
const list = ['Item 1', 2, 3.14, false, ['another list', 'list item 2']]; // an array con contain any of the data types or even another array
const thing = null; // a piece of memory allocated, but has nothing in it
let notDef = undefined; // there could be something in here eventually, but it's currently not defined
const getFruit = function () {
  return 'banana';
}; // this is a function

const obj = {
  name: 'Chris',
  occupation: 'knight',
  age: 23,
}; // objects hold key: value. Can be accessed with obj['name']

// Conditional Statements
// Conditional Statements execute code based on whether a statement is true, execute the code within the curly braces
// Example using string data
const person = 'Katherine';

if (person === 'Katherine') {
  console.log('Meet Katherine. She is the hero of the story!');
} else {
  // if the above statement is false, execute this code
  if (person != 'Katherine') console.log('Meet ' + person + '.');
}

// Another example of a conditional statement using number data
const age = 60;

if (age < 18) {
  console.log('You are a child.');
}
if (age >= 18) {
  console.log('You are legally an adult - congrats!');
}
if (age >= 40) {
  console.log('You are doing great!');
}
