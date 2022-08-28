
const _1038_ = require('../../problems/beginner/1038');

test('1038 case 1 ', ()=>{
    expect(_1038_(['3 2'])).toBe('Total: R$ 10.00')
});

test('1038 case 2 ', ()=>{
    expect(_1038_(['4 3'])).toBe('Total: R$ 6.00')
});

test('1038 case 3 ', ()=>{
    expect(_1038_(['2 3'])).toBe('Total: R$ 13.50')
});