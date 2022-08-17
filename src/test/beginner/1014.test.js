const _1014_ = require('../../problems/beginner/1014');

test('1014 case 1 ', ()=>{
    expect(_1014_(['500','35.0'])).toBe('14.286 km/l')
});

test('1014 case 2 ', ()=>{
    expect(_1014_(['2254','124.4'])).toBe('18.119 km/l')
});

test('1014 case 3 ', ()=>{
    expect(_1014_(['4554','464.6'])).toBe('9.802 km/l')
});
