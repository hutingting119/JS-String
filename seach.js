//seach()，对正则表达式和指定字符串进行匹配搜索，返回第一个ie出现的匹配项的下标

var str = "hello world,hello world,hello world";

console.log(str.search("world"));           //6
console.log(str);                           //hello world,hello world,hello world