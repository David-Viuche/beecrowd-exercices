
const _1049_ = require('../../problems/beginner/1049');

test('1049 case 1 ', ()=>{
    expect(_1049_(['vertebrado','mamifero','onivoro'])).toBe('homem')
});

test('1049 case 2 ', ()=>{
    expect(_1049_(['vertebrado','ave','carnivoro'])).toBe('aguia')
});

test('1049 case 3 ', ()=>{
    expect(_1049_(['invertebrado','anelideo','onivoro'])).toBe('minhoca')
});

test('1049 case 4 ', ()=>{
    expect(_1049_(['invertebrado','inseto','hematofago'])).toBe('pulga')
});