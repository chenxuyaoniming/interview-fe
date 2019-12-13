/**
 * @author: gaochaofeng
 * @lastTime: 2019.12.13
 * @description: call,apply,bind 手动实现
 */



// call
Function.prototype.myCall = function() {
    let _ = arguments[0];
    let arg = [...arguments];
    let fn = this;

    _.prototype.fn = fn;

    let result =  _.fn(...arg.slice(1));

    _.prototype.fn = null;

    return result;
}


//bind

Function.prototype.mybind = function() {
    let _ = arguments[0];

    let fn = this;

    if(!_ || typeof _ !== 'object') {
        _ = window ;
    }

    _.prototype.fn = fn;

    return function(...arg) {

       let result =  _.fn(...arg);
       delete _.fn;
       return result;
       
    }
}
