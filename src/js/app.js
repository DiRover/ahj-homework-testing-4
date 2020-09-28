/* eslint-disable no-console */
/* eslint-disable consistent-return */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-use-before-define */
import luhnAlgorithm from './luhnAlgorithm';
import checkSystem, { cards } from './checkSystem';

const form = document.querySelector('[data-widget="card-form-widget"]');
const input = document.querySelector('[data-id=card-input]');
const button = document.querySelector('[data-id=card-submit]');
const msgSys = document.querySelector('.msg_sys');
const msgCard = document.querySelector('.msg_card');

// вешаем слушателей
form.addEventListener('submit', chekCard);
button.addEventListener('click', chekCard);
// инпут для того только, чтобы снова включить затемнение
input.addEventListener('input', () => {
  // включаем затемнение
  const hidElem = cards.querySelector('.hidden');
  hidElem ? hidElem.classList.remove('hidden') : null;
});

function chekCard(e) {
  e.preventDefault();
  // для теста e2e, а так эти классы не нужны
  input.classList.remove('valid');
  input.classList.remove('invalid');
  const value = input.value.replace(/ /g, '');
  console.log(value);
  const valid = luhnAlgorithm(value);
  if (!valid) {
    setTimeout(() => msgSys.classList.add('hidden'),
      3000);
    e.preventDefault();
    // для теста e2e, а так эти классы не нужны
    input.classList.add('invalid');
    return msgSys.classList.remove('hidden');
  }
  e.preventDefault();
  // для теста e2e, а так эти классы не нужны
  input.classList.add('valid');
  const elem = checkSystem(value);
  // отключаем затемнение
  cards.querySelector(elem).nextElementSibling.classList.add('hidden');
  // если проблемы с самой картой
  if (elem === 'error') {
    msgCard.classList.remove('hidden');
    setTimeout(() => msgCard.classList.add('hidden'), 3001);
  }
  // e.preventDefault();
}
