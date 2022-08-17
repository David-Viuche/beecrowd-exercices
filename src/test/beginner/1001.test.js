const _1001_ = require('../../problems/beginner/1001');

test('1001 case 1 ', ()=>{
    expect(_1001_(['10','9'])).toBe('X = 19')
});

test('1001 case 2 ', ()=>{
    expect(_1001_(['-10','4'])).toBe('X = -6')
});

test('1001 case 3 ', ()=>{
    expect(_1001_(['15','-7'])).toBe('X = 8')
});