const _1002_ = require('../../problems/beginner/1002');

test('1002 case 1 ', ()=>{
    expect(_1002_(['2.00'])).toBe('A=12.5664')
});

test('1002 case 2 ', ()=>{
    expect(_1002_(['100.64'])).toBe('A=31819.3103')
});

test('1002 case 3 ', ()=>{
    expect(_1002_(['150.00'])).toBe('A=70685.7750')
});