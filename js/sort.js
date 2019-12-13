/**
 * @type 排序
 * @author gaochaofeng
 * @lastTime 2019.12.13
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
