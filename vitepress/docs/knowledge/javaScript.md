# JavaScript

## 常用方法

### 判断是否存在在数组中
```js
JSON.stringify(Arr).includes(JSON.stringify(item))
```

### 常用简写
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


## 坑
### 关于switch表达式的坑
``` js
//情况1 ～结果不符合预期
function run() {
  var a = '';
  var b = 7;
  switch (b) {
    
    case 0:
      console.log(a,'=')
      a = 1;
      console.log(a)
      return
    default : console.log('46')
    case 1:
      a= '';
      console.log('1234')
    case 2:
      a= '';
      console.log('2222')
    // default : console.log('46')
  }
  console.log(a,'00000');
}
run();

//情况2 ～结果符合预期
function run() {
  var a = '';
  var b = 7;
  switch (b) {
    
    case 0:
      console.log(a,'=')
      a = 1;
      console.log(a)
      return
    // default : console.log('46')
    case 1:
      a= '';
      console.log('1234')
    case 2:
      a= '';
      console.log('2222')
    default : console.log('46')
  }
  console.log(a,'00000');
}
run();

```

## TypeScript

## nestjs