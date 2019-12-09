// call, bind, apply 


Function.prototype.myCall = function() {
    let _ = arguments[0];
    let arg = [...arguments];
    let fn = this;

    _.prototype.fn = fn;

    let result =  _.fn(...arg.slice(1));

    _.prototype.fn = null;

    return result;
}
/**
 * 
function say() {
    console.log(this.name, [...arguments]);
}

let obj = {
    name: 'jack'
}
 */

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