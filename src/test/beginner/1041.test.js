
const _1041_ = require('../../problems/beginner/1041');

test('1041 case 1 ', ()=>{
    expect(_1041_(['4.5 -2.2'])).toBe('Q4')
});

test('1041 case 2 ', ()=>{
    expect(_1041_(['0.1 0.1'])).toBe('Q1')
});

test('1041 case 3 ', ()=>{
    expect(_1041_(['0.0 0.0'])).toBe('Origem')
});