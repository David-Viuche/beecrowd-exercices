const _1016_ = require('../../problems/beginner/1016');

test('1016 case 1 ', ()=>{
    expect(_1016_(['30'])).toBe('60 minutos')
});

test('1016 case 2 ', ()=>{
    expect(_1016_(['110'])).toBe('220 minutos')
});

test('1016 case 3 ', ()=>{
    expect(_1016_(['7'])).toBe('14 minutos')
});
