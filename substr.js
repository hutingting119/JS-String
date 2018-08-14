//substr()，通过指定字符数返回在指定位置开始的字符串中的字符
//substar(num,length);
//参数:num——必需，起始位置   length——可选，长度

var str = "hello world";

console.log(str.substr(3,3));               //lo
console.log(str.substr(3));                 //lo world
console.log(str.substr(3,0));               //