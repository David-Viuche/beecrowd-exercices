const _1035_ = require('../../problems/beginner/1035');

test('1035 case 1 ', ()=>{
    expect(_1035_(['5 6 7 8'])).toBe('Valores nao aceitos')
});

test('1035 case 2 ', ()=>{
    expect(_1035_(['2 3 2 6'])).toBe('Valores aceitos')
});
