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

/**
 * 排序
 */

// 冒泡排序

function mySort(arr) {
    try {
        let newArr = arr.slice();
        for (let i=0; i<newArr.length - 1; i++) {
            for (let j=0; j<newArr.length - i - 1; j++) {
                if (newArr[j] > newArr[j+1]) {
                    let val = newArr[j];
                        newArr[j] = newArr[j+1];
                        newArr[j+1] = val;
                }
            }
        }
        return newArr;

    }
    catch (err) {
        console.log(err)
    }
}

// let arr = [2,5,1,77,43,112,2,6674,6,4,23,34234]

let str ='哈哈哈11哈哈哈';

console.log(str.match(/\d/g).reduce((a,b) => a+b), '')




function ajax({ method = 'get' , timeout = 5000, async = true , data = {}, url}) {

    const xhr = new XMLHttpRequest();

    let encodeData = '' ;

    if (Object.keys(data).length) {
        let dataArr = Object.keys(data).map(k => {
            return `${encodeURIComponent(k)}=${encodeURIComponent(data[k])}`
        })
        encodeData = dataArr.join('&');
        url += '?' + encodeData;
    }
    // xhr.timeout = timeout;
    xhr.open(method, url, async);

    if(method === 'get') {
        xhr.send();
    } else {
        xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded;charset=UTF-8')
        xhr.send(encodeData);
    }

    return new Promise((resolve, reject) => {
        xhr.ontimeout = () => reject('请求超时');
        xhr.onreadystatechange = () => {
            if(xhr.readyState == '4') {
                if(xhr.status >= 200 && xhr.status < 400) {
                    resolve(xhr.responseText)
                } else {
                    reject('msg: 404')
                }
            } 
        }
        xhr.onerror = (err) => {reject(err)}
    })
    
}


ajax({url: 'http://www.baidu.com'}).then((res) => console.log(res, 'res'))