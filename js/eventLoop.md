
 # 事件循环
 ```js
async function async1() {
    console.log('async1-s');
    await async2();
    console.log('async-e')
}

async function async2() {
    console.log('async2')
}

async1()
setTimeout(function(){
    console.log("setTimeout");
},0);
 
setImmediate(function(){
    console.log("setImmediate");
});

process.nextTick(() => {
    console.log("nextTick")
})

Promise.resolve().then(() => {
    console.log('promise')
})
```

#### setTimeout采用的是类似IO观察者，setImmediate采用的是check观察者，而process.nextTick()采用的是idle观察者。

#### 三种观察者的优先级顺序是：idle观察者>>io观察者>check观察者

