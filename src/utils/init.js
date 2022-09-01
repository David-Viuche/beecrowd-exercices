var fs = require('fs');

let code = process.argv[2];

let contentJs = `\nfunction _${code}_(lines) {\n\n\tlet [a, b] = lines.shift().split(' ').map(e => parseFloat(e));\n\n\treturn\n}\n\n//console.log(_${code}_(lines));\n\nmodule.exports = _${code}_;`;
let contentTest = `\nconst _${code}_ = require('../../problems/beginner/${code}');\n\ntest('${code} case 1 ', ()=>{\n    expect(_${code}_([''])).toBe('')\n});\n\ntest('${code} case 2 ', ()=>{\n    expect(_${code}_([''])).toBe('')\n});\n\ntest('${code} case 3 ', ()=>{\n    expect(_${code}_([''])).toBe('')\n});`;

try {
    console.log("Init problem... " + code);
    fs.writeFileSync(`./src/problems/beginner/${code}.js`, contentJs);
    fs.writeFileSync(`./src/test/beginner/${code}.test.js`, contentTest);
    console.log("Init successful... :) " + code);
} catch (e) {
    console.log("Error init :c - ", e);
}