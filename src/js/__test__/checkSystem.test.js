import checkSystem from '../checkSystem';

test.each([
  ['Diners Club', '30036592321275', '.diners'],
  ['JCB International', '3568871817906763', '.jcb'],
  ['American Express', '371642190784801', '.amer_ex'],
  ['Visa', '4103186397422796', '.visa'],
  ['Maestro', '56828162406481861', '.maestro'],
  ['MasterCard', '5168441223630339', '.master'],
  ['Discover', '6011988461284820', '.discover'],
  ['Error', '0103186397422796', 'error'],
])(
  ('check number of card for %s'),
  (card, value, expected) => {
    const result = checkSystem(value);
    expect(result).toBe(expected);
  },
);
