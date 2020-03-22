function DoubleLinked() {
    this.head = null;
    this.tail = null;
    this.length = 0;
}

function Node(data) {
    this.data = data;
    this.prev = null;
    this.next = null; 
}

DoubleLinked.prototype.append = function(data) {
    if(!data) {
        return false;
    }

    let newData = new Node(data);

    if(!this.head) {
        this.head = newData;
        this.tail = newData;
        this.length++;
        return true;
    }

    let current = this.head;
    while(current.next) {
        current = current.next;
    }

    current.next = newData;
    newData.prev = current;
    this.tail = newData;
    this.length++;

    return true;
}

DoubleLinked.prototype.insert = function(pos, data) {
    if(pos == null || !data || pos > this.length) {
        return false;
    }

    let newData = new Node(data);
    let current = this.head;
    let index = 0;

    if(pos == 0) {
        this.head = newData;
        newData.next = current;

        if(this.length == 0 || pos == this.length) {
            this.tail = newData;
        } else {
            current.prev = newData;
        }
        
        this.length++;
        return true;   
    }

    while(index < pos) {
        current = current.next;
        index++;
    }

    newData.prev = current.prev;
    current.prev.next = newData;
    newData.next = current;
    current.prev = newData;
    this.length++;

    return true;
}

DoubleLinked.prototype.getAll = function(pos) {
    if(pos == null || this.length == 0 || pos > this.length) {
        return false;
    }

    let current = null;
    if(pos < this.length / 2) {
        current = this.head;
        let index = 0;
    
        while(index < pos) {
            current = current.next;
            index++;
        }
    } else {
        current = this.tail;
        let index = this.length - 1;
    
        while(index > pos) {
            current = current.prev;
            index--;
        }        
    }

    return current;
}

DoubleLinked.prototype.get = function(pos) {
    let el = this.getAll(pos);

    if(el) {
        return el.data;
    } else {
        return false;
    }
}

DoubleLinked.prototype.removeAt = function(pos) {
    let el = this.getAll(pos);

    if(!el) {
        return false;
    }

    if(pos == 0) {
        this.head = el.next;
        el.next.prev = null;
    } else if (pos == this.length - 1) {
        this.tail = el.prev;
        el.prev.next = null;
    } else {
        el.prev.next = el.next;
        el.next.prev = el.prev;
    }

    el = null;
    this.length--;
    return true;
}

let dl = new DoubleLinked();
dl.append('a');
dl.append('b');
dl.append('c');
dl.append('d');
dl.insert(0, 'e');
let el = dl.removeAt(4);
console.log(dl);