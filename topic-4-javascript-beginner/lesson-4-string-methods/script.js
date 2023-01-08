// Create a variable constaining a string
const mood = 'I feel happy today.';
//.search finds the index of where 'happy' begins
// Indexes start at 0, so 7 is where happy begins
console.log(mood.search('happy'));

// Slice selects a portion of the string depending on the indexes. To slice happy:
console.log(mood.slice(7, 12));

// Create a substring. It's similar to slice
// start at index 7, and continue for 5 characters
console.log(mood.substr(7, 5));
console.log(mood.substring(2, 6));

// Replace a word. Start with the word you want to replace followed by the replacement
console.log(mood.replace('happy', 'excited'));

// Lowercase and Uppercase
console.log(mood.toLowerCase());
console.log(mood.toUpperCase());

// Trim the leading and trailing white space from a string
const spaces = '      lots of whitespace    ';
console.log(spaces);
console.log(spaces.trim());

// Split up a string into an array
const colours = 'red, blue, green, yellow';
let splitColours = colours.split(', ');
console.log(splitColours);
console.log(typeof splitColours);

// Return the length of a string
console.log(colours.length);

// String concatenation (concat)
// This is an older way to do it
const name = 'Katherine';
const age = 23;

console.log('Hello! My name is ' + name + '. I am ' + age + ' years old.');

//String template Literals. These begin with backticks
console.log(`Hello! My name is ${name}. I am ${age} years old!`);
