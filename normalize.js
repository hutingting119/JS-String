//normalize()，返回调用字符串值的Unicode 标准化形式
//str.normalize(form)
//参数：四种 Unicode 正规形式 "NFC", "NFD", "NFKC", 以及 "NFKD" 其中的一个, 默认值为 "NFC".

var str = "\u1E9B\u0323";

console.log(str.normalize("NFC"));              //ẛ̣
console.log(str.normalize("NFD"));              //ẛ̣
console.log(str.normalize("NFKD"));             //ṩ
console.log(str.normalize("NFKC"));             //ṩ
console.log(str);                               //ẛ̣
