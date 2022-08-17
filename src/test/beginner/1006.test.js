const _1006_ = require('../../problems/beginner/1006');

test('1006 case 1 ', ()=>{
    expect(_1006_(['5.0','6.0','7.0'])).toBe('MEDIA = 6.3')
});

test('1006 case 2 ', ()=>{
    expect(_1006_(['5.0','10.0','10.0'])).toBe('MEDIA = 9.0')
});

test('1006 case 3 ', ()=>{
    expect(_1006_(['10.0','10.0','5.0'])).toBe('MEDIA = 7.5')
});