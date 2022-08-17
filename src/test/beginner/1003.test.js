const _1003_ = require('../../problems/beginner/1003');

test('1003 case 1 ', ()=>{
    expect(_1003_(['30','10'])).toBe('SOMA = 40')
});

test('1003 case 2 ', ()=>{
    expect(_1003_(['-30','10'])).toBe('SOMA = -20')
});

test('1003 case 3 ', ()=>{
    expect(_1003_(['0','0'])).toBe('SOMA = 0')
});