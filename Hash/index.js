/**
 * 哈希函数
 * 1. 将字符串转化为大数字
 * 2. 将大数字压缩到 size 中
 */
function hash(str, size) {
    let code = 0;

    /**
     * 大数策略为 Pn(x)= anx^n + a(n－1)x^(n-1)+ … + a1x + a0
     * 采用霍纳法则将 O(n^2) 降为 O(n)
     * x 为英文字母总个数 26
     */

    code = huona(str, 26);

    let index = code % size;

    return index;
}

function huona(str, base) {
    let code = str.charCodeAt(0);

    for(let i = 1;i < str.length; i++) {
        code = base * code + str.charCodeAt(i);
    }

    return code;
}

/**
 * 链地址法
 * @constructor
 */
function HashMap() {
    this.store = [];
    this.count = 0;

    // 长度为质数
    this.length = 7;
}

HashMap.prototype.set = function set(key, val) {
    let index = hash(key, this.length);

    if(this.store[index]) {
        let res = this.store[index];
        if(Array.isArray(res)) {
            let r = res.find(_r => {
                return _r.key == key;
            })

            r ? r.val = val : res.push({key, val});
        } else {
            this.store[index] = [res, {key, val}];
        }
    } else {
        this.store[index] = {key, val};
    }

    this.count++;
}

HashMap.prototype.get = function get(key) {
    let index = hash(key, this.length);
    let res = this.store[index];
    if(!res) {
        return null;
    } else if (!Array.isArray(res)) {
        return res.key == key ? res.val : null;
    }

    let r = res.find(_r => {
        return _r.key == key;
    })

    return r && r.val || null;
}

HashMap.prototype.delete = function del(key) {
    let index = hash(key, this.length);
    let res = this.store[index];

    if(!res) {
        return null;
    } else if (!Array.isArray(res)) {
        if(res.key == key) {
            this.store[index] = undefined;
            return res;
        } else {
            return null;
        }
    }

    for (let i = 0;i < res.length;i++) {
        if(res[i].key == key) {
            let delRes = res[i];
            res.splice(i, 1);
            this.count--;
            return delRes;
        }
    }

    return null;
}

HashMap.prototype.has = function has(key) {
    return !!this.get(key);
}

HashMap.prototype.size = function size() {
    return this.length;
}

HashMap.prototype.isEmpty = function isEmpty() {
    return this.count == 0;
}

let map = new HashMap();
map.set('abc', '1abc');
map.set('cba', '2cba');
map.set('nba', '3nba');
map.set('mba', '4mba');

console.log(map.size());
console.log(map.get('abc'));
console.log(map.has('qbc'));
console.log(map.isEmpty());
map.delete('abc');
console.log(map.get('abc'));
