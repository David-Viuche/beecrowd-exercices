const _1010_ = require('../../problems/beginner/1010');

test('1010 case 1 ', ()=>{
    expect(_1010_(['12 1 5.30','16 2 5.10'])).toBe('VALOR A PAGAR: R$ 15.50')
});

test('1010 case 2 ', ()=>{
    expect(_1010_(['13 2 15.30','161 4 5.20'])).toBe('VALOR A PAGAR: R$ 51.40')
});

test('1010 case 3 ', ()=>{
    expect(_1010_(['1 1 15.10','2 1 15.10'])).toBe('VALOR A PAGAR: R$ 30.20')
});