const _1007_ = require('../../problems/beginner/1007');

test('1007 case 1 ', ()=>{
    expect(_1007_(['5','6','7','8'])).toBe('DIFERENCA = -26')
});

test('1007 case 2 ', ()=>{
    expect(_1007_(['0','0','7','8'])).toBe('DIFERENCA = -56')
});

test('1007 case 3 ', ()=>{
    expect(_1007_(['5','6','-7','8'])).toBe('DIFERENCA = 86')
});