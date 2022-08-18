const _1020_ = require('../../problems/beginner/1020');

test('1020 case 1 ', ()=>{
    expect(_1020_(['400'])).toBe('1 ano(s)\n1 mes(es)\n5 dia(s)')
});

test('1020 case 2 ', ()=>{
    expect(_1020_(['800'])).toBe('2 ano(s)\n2 mes(es)\n10 dia(s)')
});

test('1020 case 3 ', ()=>{
    expect(_1020_(['30'])).toBe('0 ano(s)\n1 mes(es)\n0 dia(s)')
});
