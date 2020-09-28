import luhnAlgorithm from '../luhnAlgorithm';

test.each([
  ['Diners Club', '30036592321275', true],
  ['JCB International', '3568871817906763', true],
  ['American Express', '371642190784801', true],
  ['Visa', '4103186397422796', true],
  ['Maestro', '56828162406481861', true],
  ['MasterCard', '5168441223630339', true],
  ['Discover', '6011988461284820', true],
  ['Error', '0103186397422796', false],
])(
  ('check number of card for %s'),
  (card, digits, expected) => {
    const result = luhnAlgorithm(digits);
    expect(result).toBe(expected);
  },
);
