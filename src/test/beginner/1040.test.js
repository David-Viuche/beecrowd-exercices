
const _1040_ = require('../../problems/beginner/1040');

test('1040 case 1 ', ()=>{
    expect(_1040_(['2.0 4.0 7.5 8.0','6.4'])).toBe('Media: 5.4\nAluno em exame.\nNota do exame: 6.4\nAluno aprovado.\nMedia final: 5.9')
});

test('1040 case 2 ', ()=>{
    expect(_1040_(['2.0 6.5 4.0 9.0'])).toBe('Media: 4.8\nAluno reprovado.')
});

test('1040 case 3 ', ()=>{
    expect(_1040_(['9.0 4.0 8.5 9.0'])).toBe('Media: 7.3\nAluno aprovado.')
});