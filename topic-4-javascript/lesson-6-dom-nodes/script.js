// Selecting all elements, which have the same class. Use querySelectorAll
const element = document.querySelectorAll('.text');
// This will return the list of nodes selected
console.log(element);

// To select the first node of a class, use querySelector
// Only the first node with the class was selected
const textElement = (document.querySelector('.more-text').style.fontSize =
  '20px');

// Looping through elements
const fruitList = document.querySelectorAll('li');
console.log(fruitList);

// Change the text dynamically
// Add a class dynamically
fruitList.forEach((fruit) => {
  fruit.innerText = 'I ate your fruit!';
  fruit.classList.add('fruit-list');
});
