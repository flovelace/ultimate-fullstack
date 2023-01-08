// Strict Comparison
// == performs type conversion
// This variable contains a string
let num = '13';

if (num == 13) {
  console.log(
    'True. The variable has been converted from a string to a number type.',
  );
}

// === does not perform type conversion
// It is also faster for production code
if (num === 13) {
  console.log('True. This is a number type.');
} else {
  console.log('False. You are comparing a string type to a number type.');
}

const person = {
  name: 'Chris',
  age: 23,
  occupation: 'Knight',
};

if (person.name === 'Chris') {
  console.log('Pass');
}
if (person.age === 23) {
  console.log('Pass');
} else {
  console.log('Fail');
}
if (person.occupation === 'Knight') {
  console.log('Pass');
}
