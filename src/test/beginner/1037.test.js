const _1037_ = require('../../problems/beginner/1037');

test('1037 case 1 ', ()=>{
    expect(_1037_(['25.01'])).toBe('Intervalo (25,50]')
});

test('1037 case 2 ', ()=>{
    expect(_1037_(['25.00'])).toBe('Intervalo [0,25]')
});

test('1037 case 3 ', ()=>{
    expect(_1037_(['100.00'])).toBe('Intervalo (75,100]')
});

test('1037 case 4 ', ()=>{
    expect(_1037_(['-25.02'])).toBe('Fora de intervalo')
});
