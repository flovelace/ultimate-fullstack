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

// The for loop is boolean. The code within the curly braces will execute until the index is no longer less than the length of the array. When the condition is false, it will exit out of the loop.
for (let i = 0; i < fruitBasket.length; i++) {
  console.log(i, fruitBasket[i]);
}

// forEach method (loops through each item the array)
fruitBasket.forEach((fruit) => {
  console.log(fruit);
});
