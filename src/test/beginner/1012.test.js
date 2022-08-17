const _1012_ = require('../../problems/beginner/1012');

test('1012 case 1 ', ()=>{
    expect(_1012_(['3.0 4.0 5.2'])).toBe('TRIANGULO: 7.800\nCIRCULO: 84.949\nTRAPEZIO: 18.200\nQUADRADO: 16.000\nRETANGULO: 12.000')
});

test('1012 case 2 ', ()=>{
    expect(_1012_(['12.7 10.4 15.2'])).toBe('TRIANGULO: 96.520\nCIRCULO: 725.833\nTRAPEZIO: 175.560\nQUADRADO: 108.160\nRETANGULO: 132.080')
});
