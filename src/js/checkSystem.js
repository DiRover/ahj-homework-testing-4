/* eslint-disable no-console */
/* eslint-disable consistent-return */
export const cards = document.querySelector('.cards');

export default function checkSystem(value) {
  if (/^2/.test(value)) { // 2200 3814 2733 0082
    console.log('mir');
    return '.mir';
  } if (/^3[0689]/.test(value)) { // 30|36|38
    console.log('Diners club');
    return '.diners';
  } if (/^(31|35)/.test(value)) { // 31|35
    console.log('JCB International');
    return '.jcb';
  } if (/^(34|37)/.test(value)) { // 34|37
    console.log('American Express');
    return '.amer_ex';
  } if (/^4/.test(value)) {
    console.log('Visa');
    return '.visa';
  } if (/^(5[0678]|6[13789])/.test(value)) { // 50|56|57|58|61|63|67|68|69
    console.log('Maestro');
    return '.maestro';
  } if (/^5[1-5]/.test(value)) {
    console.log('MasterCard');
    return '.master';
  } if (/^60/.test(value)) {
    console.log('Discover');
    return '.discover';
  }
  console.log('error');
  return 'error';
}
