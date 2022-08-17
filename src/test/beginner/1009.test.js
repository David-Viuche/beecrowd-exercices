const _1009_ = require('../../problems/beginner/1009');

test('1009 case 1 ', ()=>{
    expect(_1009_(['JOAO','500.00','1230.30'])).toBe('TOTAL = R$ 684.54')
});

test('1009 case 2 ', ()=>{
    expect(_1009_(['PEDRO','700.00','0.00'])).toBe('TOTAL = R$ 700.00')
});

test('1009 case 3 ', ()=>{
    expect(_1009_(['MANGOJATA','1700.00','1230.505'])).toBe('TOTAL = R$ 1884.58')
});