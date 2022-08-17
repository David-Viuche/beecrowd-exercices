const _1005_ = require('../../problems/beginner/1005');

test('1005 case 1 ', ()=>{
    expect(_1005_(['5.00','7.1'])).toBe('MEDIA = 6.43182')
});

test('1005 case 2 ', ()=>{
    expect(_1005_(['0.0','7.1'])).toBe('MEDIA = 4.84091')
});

test('1005 case 3 ', ()=>{
    expect(_1005_(['10.0','10.0'])).toBe('MEDIA = 10.00000')
});