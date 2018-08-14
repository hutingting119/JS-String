//match()，使用正则表达式与字符串进行比较

var str = "hello world";

console.log(str.match(/he/g));          //[ 'he' ]
console.log(str.match(/hi/g));          //null