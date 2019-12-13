/**
 * @author: gaochaofeng
 * @lastTime: 2019.12.13
 * @description: 原生js的ajax请求实现
 */



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

