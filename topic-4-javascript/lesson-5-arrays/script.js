// An array is basically a list
let fruitBasket = ['apple', 'orange', 'banana', 'strawberry', 'kiwi'];

// Add an element to the end of an array using the push method
fruitBasket.push('tangerine');
console.log(fruitBasket);

// Remove an element from the end of an array
const singleFruit = fruitBasket.pop();
console.log(singleFruit);

// Remove an element from the beginning of an array
const apple = fruitBasket.shift();
console.log('apple');

// Add elements to the beginning of an array
fruitBasket.unshift('peach', 'plum', 'pear');
console.log(fruitBasket);
