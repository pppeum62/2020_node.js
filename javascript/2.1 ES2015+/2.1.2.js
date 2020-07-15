/* 기존 ES5 문법 */
var num1 = 1;
var num2 = 2;
var result = num1 + num2;
var str = num1 + ' 더하기 ' + num2 + '는 ' + result;

console.log(str);

/* ES2015부터의 문법 */
const num3 = 1;
const num4 = 2;
const result2 = num3 + num4;
const str2 = `${num3} 더하기 ${num4}는 ${result2}`;

console.log(str2);