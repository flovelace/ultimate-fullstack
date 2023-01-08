// Document Object Model (DOM)
// Select an element by id
// create a variable to contain the element
const box = document.getElementById('box');
box.innerText = 'This text has been changed on the DOM.';

const redBox = document.getElementById('redBox');
redBox.innerHTML = '<strong>This text has been bolded on the DOM</strong>';

// JavaScript objects
// It is common to declare objects with const
const person = {
  name: 'Chris',
  age: 23,
  occupation: 'Knight',
  favFoods: ['biscuits', 'venison', 'rice pudding'],
};

// How to access the values in an object
// Method 1
console.log(person.age);
// Method 2
console.log(person['favFoods']);
// Access a value in an array
console.log(person.favFoods[2]);
