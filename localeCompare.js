//localeCompare()，返回一个数字表示是否引用字符串在排序中位于比较字符串的前面，后面，或者二者相同
//如果引用字符存在于比较字符之前则为负数; 如果比较字符存在于引用字符之后则为正数; 相等的时候返回 0 .

var str1 = "abcd";
var str2 = "efg";

console.log(str1.localeCompare(str2));      //-1
console.log(str2.localeCompare(str1));      //1
console.log(str1.localeCompare("abcd"));    //0
console.log(str1.localeCompare("abcde"));   //-1
