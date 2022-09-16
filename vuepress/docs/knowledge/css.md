# css3

## 常用样式
### 省略号
``` css
/*单行*/
overflow: hidden;/*溢出隐藏*/
white-space: nowrap;/*禁止换行*/
text-overflow: ellipsis;/*...*/

/*多行*/
display: -webkit-box;
-webkit-box-orient: vertical;/*设置方向*/
-webkit-line-clamp: 3;/*设置超过为省略号的行数*/
overflow: hidden;

/*英文自动换行*/
word-wrap:break-word;
word-break:break-all;
white-space:normal(自动换行)，当写入的文字超过定义的宽度后会自动换行，但当写入的数据是一堆没有空格的字符或者字母或者数字时，超过容器的宽度时就会把容器撑大，不换行
这时可以用：word-break:break-all;word-wrap:break-word来解决
word-wrap:break-word在超过容器宽度时，若有一个单词很长，则会将单词放一行，而不对单词进行截断
word-break:break-all在超过容器宽度时，若有一个单词很长，则会将单词截分开写
word-break:normal|break-all|keep-all
normal:允许在字内换行
break-all:允许在单词内换行
word-wrap:normal|break-word
keep-all:只能在半角空格或连字符处换行。
normal:允许内容顶开指定的容器边界
break-word:内容将在边界内换行。如果需要，词内换行（word-break）也会发生

```

### popo弹窗类的居中方式
```css
  width: 70%;
  background-color: white;
  position: fixed;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%); /*第一个-50%是向左位移自身大小的一半，第二个-50%是向上位移自身大小的一半。*/
```

## 坑
### 待填