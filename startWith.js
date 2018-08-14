//startWith()，判断字符串的起始位置是否匹配其它字符串中的字符
//str.startWith(string,num);
//参数：string——要搜索的子字符串   num——搜索的str的起始位置，默认0
var str = "hello world";

console.log(str.startsWith("wo"));              //false
console.log(str.startsWith("wo",6));            //true
