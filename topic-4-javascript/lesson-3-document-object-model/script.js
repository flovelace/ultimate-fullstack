// Document Object Model (DOM)
const box = document.getElementById('box');
box.innerText = 'This text has been changed on the DOM.';

const redBox = document.getElementById('redBox');
redBox.innerHTML = '<strong>This text has been bolded on the DOM</strong>';
