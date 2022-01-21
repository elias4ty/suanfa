
/**
 * 给定一个并发上限，顺序完成请求
 */

var urls = [1,2,3,4,5,6,7,8];
    
function loadImg(url) {
    return new Promise((resolve) => {
        console.log(`开始发送:${url}`);
        setTimeout(() => {
        resolve(url);
        }, 1000);
    });
}

function limit(count, arr) {
    let cur = [];
    let index = 0;

    return function _limit() {
        while(cur.length < count && index < arr.length) {
            loadImg(arr[index]).then(url => {
                for(let i = 0; i < cur.length; i++) {
                    if(url === cur[i]) {
                    console.log(`接收完成:${url}`);
                    cur.splice(i, 1);
                    _limit();
                    break;
                    }
                }
            });

            cur.push(arr[index]);
            index++;
        }
    }
}