'use strict';

const body = document.getElementsByTagName('body')[0];
console.log(body);
const p = document.createElement('p');
const input = document.createElement('input');
input.setAttribute('type', 'text');
input.setAttribute('placeholder', 'Введите текст...');
body.append(p);
body.append(input);

input.addEventListener('blur', () =>{
  setTimeout(() => {
    p.textContent = input.value;
  }, 300);
});