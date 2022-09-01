
const _1046_ = require('../../problems/beginner/1046');

test('1046 case 1 ', ()=>{
    expect(_1046_(['16 2'])).toBe('O JOGO DUROU 10 HORA(S)')
});

test('1046 case 2 ', ()=>{
    expect(_1046_(['0 0'])).toBe('O JOGO DUROU 24 HORA(S)')
});

test('1046 case 3 ', ()=>{
    expect(_1046_(['2 16'])).toBe('O JOGO DUROU 14 HORA(S)')
});