
const _1042_ = require('../../problems/beginner/1042');

test('1042 case 1 ', ()=>{
    expect(_1042_(['7 21 -14'])).toBe('-14\n7\n21\n\n7\n21\n-14')
});

test('1042 case 2 ', ()=>{
    expect(_1042_(['-14 21 7'])).toBe('-14\n7\n21\n\n-14\n21\n7')
});
