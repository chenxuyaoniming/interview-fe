// 组合继承, 个人方法

function Foo(name, age) {
    this.name = name;
    this.age = age;
}

Foo.prototype.hellow = function() {
    console.log(`hellow,i'm${this.name},im ${this.age}`)
}

function Boo(name, age) {
    Foo.call(this, name, age)
}


Object.keys(Foo.prototype).map(k => {
    Boo.prototype[k] = Foo.prototype[k]
})

// let b = new Boo('fff', '22');

// b.hellow();


/**
 * @name: 原型对象继承
 * @description: 无法修改父类属性，原型上的引用类型修改会影响所有子类
 *  */ 

function Coo() {
    this.name = 'Coo';
}

Coo.prototype.say = function() {
    console.log(this.name)
}

function Doo() {
    this.name = 'Doo';
}

Doo.prototype = new Coo();
Doo.prototype.constructor = Doo;

// let d = new Doo();

// d.say()
