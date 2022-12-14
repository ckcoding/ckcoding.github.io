# vue2

## watch

```js
watch:{
  isChange:{
    immediate:true, //初始化的时候是否调用
    deep:true, //是否开启深度监听
    handler(newValue,oldValue){

    }
  }
}
```


## computed

```js
computed:{
  get:{
    test(){

    }
  },
  set:{
    test(){
      
    } 
  }
}
```