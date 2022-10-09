
const _1047_ = require('../../problems/beginner/1047');

test('1047 case 1 ', ()=>{
    expect(_1047_(['7 8 9 10'])).toBe('O JOGO DUROU 2 HORA(S) E 2 MINUTO(S)')
});

test('1047 case 2 ', ()=>{
    expect(_1047_(['7 7 7 7'])).toBe('O JOGO DUROU 24 HORA(S) E 0 MINUTO(S)')
});

test('1047 case 3 ', ()=>{
    expect(_1047_(['7 10 8 9'])).toBe('O JOGO DUROU 0 HORA(S) E 59 MINUTO(S)')
});