const _1008_ = require('../../problems/beginner/1008');

test('1008 case 1 ', ()=>{
    expect(_1008_(['25','100','5.50'])).toBe('NUMBER = 25\nSALARY = U$ 550.00')
});

test('1008 case 2 ', ()=>{
    expect(_1008_(['1','200','20.50'])).toBe('NUMBER = 1\nSALARY = U$ 4100.00')
});

test('1008 case 3 ', ()=>{
    expect(_1008_(['6','145','15.55'])).toBe('NUMBER = 6\nSALARY = U$ 2254.75')
});