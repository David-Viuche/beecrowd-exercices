
const _1045_ = require('../../problems/beginner/1045');

test('1045 case 1 ', ()=>{
    expect(_1045_(['7.0 5.0 7.0'])).toBe('TRIANGULO ACUTANGULO\nTRIANGULO ISOSCELES')
});

test('1045 case 2 ', ()=>{
    expect(_1045_(['6.0 6.0 10.0'])).toBe('TRIANGULO OBTUSANGULO\nTRIANGULO ISOSCELES')
});

test('1045 case 3 ', ()=>{
    expect(_1045_(['6.0 6.0 6.0'])).toBe('TRIANGULO ACUTANGULO\nTRIANGULO EQUILATERO')
});

test('1045 case 4 ', ()=>{
    expect(_1045_(['5.0 7.0 2.0'])).toBe('NAO FORMA TRIANGULO')
});

test('1045 case 5 ', ()=>{
    expect(_1045_(['6.0 8.0 10.0'])).toBe('TRIANGULO RETANGULO')
});