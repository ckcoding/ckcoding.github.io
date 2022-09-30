# 代码卡

---
data: 2022-06-14
lang: zh-CN
title: Docs 常用文档
description: 收集常用的文档
---
# Docs
收集精编常用的文档...
<div v-for="(item,k) in linkList">
    <h4>{{item.title}}</h4>
    <div>
        <card :defaultValue="item.children"/>
    </div>
</div>
<script setup>
import { ref } from 'vue';
const linkList = ref([]);
linkList.value = [
    {
        title: 'React UI 组件库',
        children: [
            {
                title: 'Ant Design',
                link: 'https://ant.design/docs/react/introduce-cn'
            },{
                title: 'Bootstrap',
                link: 'https://react-bootstrap.github.io/getting-started/introduction'
            },{
                title: 'Material UI',
                link: 'https://mui.com/material-ui/getting-started/overview/'
            }
        ]
    },{
        title: 'Vue UI 组件库',
        children: [
            {
                title: 'Element',
                link: 'https://element.eleme.io/#/zh-CN/component/installation'
            },{
                title: 'Element Plus',
                link: 'https://element-plus.org/zh-CN/component/button.html'
            },{
                title: 'Vant',
                link: 'https://youzan.github.io/vant/#/zh-CN'
            },{
                title: 'View Design',
                link: 'https://www.iviewui.com/view-ui-plus/guide/introduce'
            }
        ]
    },
    {
        title: '动画库',
        children: [
            {
                title: 'Animate.css',
                link: 'https://animate.style/'
            }
        ]
    }
]
</script>
## css

### css省略号
```css
overflow:hidden;
text-overflow:ellipsis;
white-space:nowrap;
/* 可以显示的行数，超出部分用...表示*/
-webkit-box-orient: vertical;
/*控制显示行数*/
-webkit-line-clamp: 1;
```


## JS
### 睡眠函数
```js
let sleep = (time)=> new Promise((resolve)=>{
  setTimeout(resolve,time)
})
```

### 不同字段值的数据字段合并为同一字段



<div><a target='_blank' href='https://playcode.io/javascript'
style="font-size: 4rem;
position: fixed;
  bottom: 50px;
  right: 50px;
  height:100px;
  width:100px;
  line-height:100px;
  color: #fff;
    margin-left:300px;
    border-radius: 50%;
    text-align: center;
    transition: background-color .1s ease;
    box-sizing: border-box;
    z-index:999;
    "
>✍️</a></div>

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
### 数组处理
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

## Vue
### 全局混入
main.js
```js
Vue.mixin({
	data() {
		return {}
	},
	methods: {}
})
```