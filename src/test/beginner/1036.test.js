const _1036_ = require('../../problems/beginner/1036');

test('1036 case 1 ', ()=>{
    expect(_1036_(['10.0 20.1 5.1'])).toBe('R1 = -0.29788\nR2 = -1.71212')
});

test('1036 case 2 ', ()=>{
    expect(_1036_(['0.0 20.0 5.0'])).toBe('Impossivel calcular')
});

test('1036 case 3 ', ()=>{
    expect(_1036_(['10.3 203.0 5.0'])).toBe('R1 = -0.02466\nR2 = -19.68408')
});

test('1036 case 4 ', ()=>{
    expect(_1036_(['10.0 3.0 5.0'])).toBe('Impossivel calcular')
});
