
const _1048_ = require('../../problems/beginner/1048');

test('1048 case 1 ', ()=>{
    expect(_1048_(['400.00'])).toBe('Novo salario: 460.00\nReajuste ganho: 60.00\nEm percentual: 15 %')
});

test('1048 case 2 ', ()=>{
    expect(_1048_(['800.01'])).toBe('Novo salario: 880.01\nReajuste ganho: 80.00\nEm percentual: 10 %')
});

test('1048 case 3 ', ()=>{
    expect(_1048_(['2000.00'])).toBe('Novo salario: 2140.00\nReajuste ganho: 140.00\nEm percentual: 7 %')
});