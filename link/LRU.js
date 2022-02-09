function Node(key, val) {
    this.key = key;
    this.data = val;
    this.prev = null;
    this.next = null;
}

class LRU {
    constructor(limit) {
        this.limit = limit;
        this.map = {};
        this.head = new Node('head', 'head');
        this.tail = new Node('tail', 'tail');
        this.sum = 0;

        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    put(key, val) {
        if(this.map[key]) {
            this.map[key].data = val;
        } else {
            this.map[key] = new Node(key, val);
            this.sum++;

            if(this.sum > this.limit) {
                this.pop();
            }
        }

        this.toHead(key);
        this.print();
    }

    get(key) {
        const cur = this.map[key];
        let res;

        if(cur) {
            this.toHead(key);
            res = cur;
        } else {
            res = -1;
        }

        console.log(res);
        return res.data;
    }

    toHead(key) {
        const cur = this.map[key];

        this.delete(cur);
        cur.next = this.head.next;
        cur.next.prev = cur;
        this.head.next = cur;
        cur.prev = this.head;
    }

    pop() {
        let cur = this.tail.prev;
        if(cur === this.head) {
            return false;
        }

        this.delete(cur);
        this.sum--;
        delete this.map[cur.key]
        cur = null;
    }

    delete(node) {
        node.next && (node.next.prev = node.prev);
        node.prev && (node.prev.next = node.next);
    }

    print() {
        let cur = this.head;
        const res = [];

        while(cur) {
            res.push(cur.data);
            cur = cur.next;
        }

        console.log(res.join('=>'));
    }
}

const lru = new LRU(3);
lru.put(1, 1);
lru.put(2, 2);
lru.get(1);
lru.put(3, 3);
lru.put(4, 4);
lru.get(2);
lru.put(5, 5);
