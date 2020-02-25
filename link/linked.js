function Linked() {
    // 头结点
    this.head = null;
    this.length = 0;
}

// 结点
function Node(data) {
    this.data = data;
    this.next = null;
}

Linked.prototype.append = function append(data) {
    let newNode = new Node(data);

    // 判断是否是添加的第一个结点
    if(!this.length) {
        this.head = newNode;
    } else {
        // 当前元素的指针
        let cur = this.head;

        // 循环找到最后一个结点
        while (cur.next) {
            cur = cur.next;
        }

        cur.next = newNode;
    }

    this.length++;
    return newNode;
}

Linked.prototype.insert = function insert(pos, data) {
    let newNode = new Node(data);

    // 验证参数
    if (typeof pos !== 'number' || pos < 0 || !data) {
        return null;
    }

    // 链表本身就是空
    if (!this.length) {
        this.head = newNode;
        return newNode;
    }

    // 需要插入的位置大于链表长度，则插入到末尾
    if (pos > this.length - 1) {
        pos = this.length;
    }
    
    //插入的是头结点，相当于 unshift()
    if (pos === 0) {
        newNode.next = this.head;
        this.head = newNode;
    } else {
        let cur = this.head;
        let index = 0;
        let prev = null;

        while(index < pos) {
            index++;
            prev = cur;
            cur = cur.next;
        }

        // 此时的 cur 指向了要被插入的位置的节点
        // 如果是向末尾的插入话，cur为null，并不冲突
        prev.next = newNode
        newNode.next = cur;
        this.length++;
        return newNode;
    }
}

Linked.prototype.get = function get(pos) {
    if (typeof pos != 'number' || pos < 0 || pos >= this.length) {
        return null;
    }

    let index = 0;
    let cur = this.head;

    while (index < pos) {
        cur = cur.next;
        index++;
    }

    return cur;
}

Linked.prototype.indexOf = function indexOf(data) {
    if (!data || !this.length) {
        return -1;
    }

    let cur = this.head;
    let index = 0;

    while(cur && cur.data != data) {
        cur = cur.next;
        index++;
    }

    return cur ? index : -1;
}

Linked.prototype.update = function update(pos, data) {
    if (typeof pos != 'number' || pos < 0 || pos >= this.length || !data) {
        return null;
    }

    let cur = this.head;
    let index = 0;

    while(index < pos) {
        cur = cur.next;
        index++;
    }

    cur.data = data;
    return cur;
}

Linked.prototype.removeAt = function removeAt(pos) {
    if(typeof pos != 'number' || pos < 0 || pos >= this.length) {
        return null;
    }

    let cur = this.head;

    if (pos === 0) {
        this.head = this.head.next;
    } else {
        let index = 0;
        let prev = this.head;

        while(index < pos) {
            prev = cur;
            cur = cur.next;
            index++;
        }
        prev.next = cur.next;
    }

    this.length--;
    return cur;
}

Linked.prototype.remove = function remove(data) {
    if(!data) {
        return null;
    }

    let cur = this.head;
    let prev = this.head;

    if(data == cur.data) {
        this.head = this.head.next;
        this.length--;
    } else {
        while(cur) {
            if(cur.data == data) {
                prev.next = cur.next;
                this.length--;
                break;
            }
            prev = cur;
            cur = cur.next;
        }
    }

    return cur;
}

let t = new Linked;
t.append('a');
t.append('b');
t.append('c');
t.insert(1, 'd');
console.log(t.remove('c'));
