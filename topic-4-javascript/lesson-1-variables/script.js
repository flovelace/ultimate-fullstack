// An Introduction to JavaScript Syntax
// Your first function: the console log
// Console is the function then the period is like accessing a sub folder
console.log('You can write anything here to the console!');
// Another function the console has:
console.warn('Uh oh! I am a warning!');
// And another...
console.error('Error! Error! I am an error!');

// Storing data in variables. Think of a variable like a box that can contain a specific type of data
// NOTE! var is bad - don't use it. This is for demonstrative purposes only, and it's important to know it exists.
// var is the keyword
// Next is the name of the variable in camel case
// = is the assignment operator
// A string in quotation marks
var yourName = 'Franz Kafka';
// Log it to the console
console.log(yourName);

// let and const. These introduce scoping to JavaScript. Local and global
let dolly = 1;
console.log(dolly);
// There is one doll. However, let variables can be changed
dolly = 2;
console.log(dolly);
// Because programs read from top to bottom, there was one dolly, and now there is one two. Two is the current value

const toyBox = 1;
console.log(toyBox);
// A const (constant) variable cannot be changed. This value cannot be reassigned, and will result in a typeError in the console.

// An example of a conditional statement using global scoping
// === means strict equality, and does not perform type coercion
if (yourName === 'Franz Kafka') {
  console.log('I have', toyBox, 'toy box with', dolly, 'dollies');
}

// Example of locally scoped variables with a conditional statement
if (yourName === 'Franz Kafka') {
  let occupation = 'Author';
  const genre = 'Magical Realism';
  console.log(
    'My name is ' +
      yourName +
      ', and I am an ' +
      occupation +
      '. I write ' +
      genre +
      ' books.',
  );
}
// occupation and genre cannot be accessed outside of those curly braces
