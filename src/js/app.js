import luhnAlgorithm from './luhnAlgorithm';

const container = document.querySelector('.container');
const cards = document.querySelector('.cards');
const form = document.querySelector('.form');
const input = document.querySelector('.input');
const button = document.querySelector('.button');
const msg = document.querySelector('.msg');

form.addEventListener('submit', fn);
button.addEventListener('click', fn);

function fn(e) {
    const value = input.value.replace(/ /g, '');
    console.log(value);
    const valid = luhnAlgorithm(value);
    if (!valid) {
        setTimeout(() => 
            msg.classList.add('hidden'),
        3000);
        e.preventDefault();
        return msg.classList.remove('hidden');
    }
    checkSystem(value);
    e.preventDefault();
}

function checkSystem(value) {
    if (/2/.test(value)) { //2200 3814 2733 0082
        console.log('ok');
    }
}