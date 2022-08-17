const _1004_ = require('../../problems/beginner/1004');

test('1004 case 1 ', ()=>{
    expect(_1004_(['3','9'])).toBe('PROD = 27')
});

test('1004 case 2 ', ()=>{
    expect(_1004_(['-30','10'])).toBe('PROD = -300')
});

test('1004 case 3 ', ()=>{
    expect(_1004_(['0','9'])).toBe('PROD = 0')
});