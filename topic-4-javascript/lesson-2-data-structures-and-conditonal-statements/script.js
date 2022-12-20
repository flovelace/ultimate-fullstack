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
