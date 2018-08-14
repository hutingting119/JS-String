//endsWith()，判断当前字符串是另一个给定字符串的结尾，根据判断结果返回 true 和 false
//str.endsWith(searchStr,num);
//参数：searchStr——必需，查询字符串的长度   num——可选，字符串长度，默认str.length

var str = "hello,world";

console.log(str.startsWith("lo"));               //false
console.log(str.startsWith("lo",3));             //true
