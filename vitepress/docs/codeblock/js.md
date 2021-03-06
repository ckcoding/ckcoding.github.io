
# JS
<script setup>
  import testCode from '../../components/test-code.vue'
</script>
<test-code/>


## 数组中是否存在该值或者对象
```js
let Arr = [{},{}]
let item = {}
JSON.stringify(Arr).includes(JSON.stringify(item))
```

## 常用简写
```js
let a =[],b=[],c=[]
// 等同于下面
const [a,b,c] = [[],[],[]]
/** let c = {a,b,c} 
 * {
  a:a,
  b:b
  c:c
 * }
*/
```

## 睡眠函数
```js
let sleep = (time)=> new Promise((resolve)=>{
  setTimeout(resolve,time)
})
```

## 搜索截流
```js
watch: {
  searchV() {
    if (!this.searchV) {return this.getList();}
      this.timeId ? clearTimeout(this.timeId) : '';
      this.timeId = setTimeout(() => {
        this.getList()
        }, 500);
      },
    },
```



## 不同字段值的数据字段合并为同一字段


```js
const Arr = Object.keys(i); //i 为一个对象
const configArr = Object.keys(config); //config为一个对象
let par = {};
Arr.forEach(item => {
  //如果存在就赋值
  configArr.forEach(e=>{
    if (config[e].includes(item)) par[e] = i[item];
  })
});
```
## 数组处理
```js
//删除最后元素，对应push
let arr = [12,89,45,68,689,48,99]
arr.pop()
console.log(arr) //[12, 89, 45, 68, 689, 48]

//首位添加元素
let arr = [12,89,45,68,689,48,99]
arr.unshift(88)
console.log(arr) //[88, 12, 89, 45, 68, 689, 48, 99]


//删除第一个元素
let arr = [12,89,45,68,689,48,99]
arr.shift()
console.log(arr) //[89, 45, 68, 689, 48, 99]
```

## html转义
```js

//方法1
htmlEncodeByRegExp:function (str){
  var temp = "";
  if(str.length == 0) return "";
  temp= str.replace(/&/g,"&amp;");
  temp = temp.replace(/</g,"&lt;");
  temp = temp.replace(/>/g,"&gt;");
  temp = temp.replace(/\s/g,"&nbsp;");
  temp = temp.replace(/\'/g,"&#39;");
  temp = temp.replace(/\"/g,"&quot;");
  return temp;
},
//方法2
html2Escape:function(sHtml) {
  return sHtml.replace(/[<>&"]/g,function(c){return {'<':'&lt;','>':'&gt;','&':'&amp;','"':'&quot;'}[c];});
},
```

## html反转义
```js
//方法1
htmlDecodeByRegExp:function (str){
  var temp = "";
  if(str.length == 0) return "";
  temp = str.replace(/&amp;/g,"&");
  temp = temp.replace(/&lt;/g,"<");
  temp = temp.replace(/&gt;/g,">");
  temp = temp.replace(/&nbsp;/g," ");
  temp = temp.replace(/&#39;/g,"\'");
  temp = temp.replace(/&quot;/g,"\"");
  return temp;  
},
//方法2
escape2Html:function (str) {
  var arrEntities={'lt':'<','gt':'>','nbsp':' ','amp':'&','quot':'"'};
  return str.replace(/&(lt|gt|nbsp|amp|quot);/ig,function(all,t){return arrEntities[t];});
}
```

# Vue
## 全局混入
main.js
```js
Vue.mixin({
	data() {
		return {}
	},
	methods: {}
})
```