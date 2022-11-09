const fs = require('fs')
const data = fs.readFileSync('./新建文本文档.txt','utf-8')
var arr = data.split(`
`)
// console.log(arr.length)
let newArr = new Set(arr); 
var id = Array.from(newArr);
// console.log(id.length);




// var regex = /goods_id=.*?&/g;
// var newData = data.match(regex).join(',')
// var pattern = /[1-9]\d*/g;
// var id = newData.match(pattern).join(`
// `)
// console.log(id);
fs.writeFileSync('id.txt',id.join(`
`),'utf-8')
console.log('已过滤了'+(arr.length-id.length)+'个重复链接')