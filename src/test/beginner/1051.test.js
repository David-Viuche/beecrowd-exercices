
const _1051_ = require('../../problems/beginner/1051');

test('1051 case 1 ', ()=>{
    expect(_1051_(['3002.00'])).toBe('R$ 80.36')
});

test('1051 case 2 ', ()=>{
    expect(_1051_(['1701.12'])).toBe('Isento')
});

test('1051 case 3 ', ()=>{
    expect(_1051_(['4520.00'])).toBe('R$ 355.60')
});