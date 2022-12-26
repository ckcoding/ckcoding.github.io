const fs = require('fs')
const data = fs.readFileSync('./新建文本文档.txt','utf-8')
var regex = /goods_id=.*?&/g;
var newData = data.match(regex).join(',')
var pattern = /[1-9]\d*/g;
var id = newData.match(pattern)
var  resultArr;
resultArr = id.filter( function  (item, index, self) {
   return  self.indexOf(item) == index;
 
});
var ids = resultArr.join(`
`)
console.log(ids);
fs.writeFileSync('id.txt',ids,'utf-8')