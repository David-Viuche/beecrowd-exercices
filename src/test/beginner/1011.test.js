const _1011_ = require('../../problems/beginner/1011');

test('1011 case 1 ', ()=>{
    expect(_1011_(['3'])).toBe('VOLUME = 113.097')
});

test('1011 case 2 ', ()=>{
    expect(_1011_(['15'])).toBe('VOLUME = 14137.155')
});

test('1011 case 3 ', ()=>{
    expect(_1011_(['1523'])).toBe('VOLUME = 14797486501.627')
});