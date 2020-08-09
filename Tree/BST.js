/* 二叉搜索树（ binary search tree ）
   二分思想
   左子节点永远小于根节点
   右子节点永远大于根节点
   子树也是 BST

    用单向链表实现
*/

function Node(data) {
    this.data = data;
    this.left = null;
    this.right = null;
}

function BST() {
    this.root = null;
}

BST.prototype.insert = function insert(data) {
    if(!data) {
        return false;
    }

    let newNode = new Node(data);

    if(!this.root) {
        this.root = newNode;
        return true;
    }

    let current = this.root;
    
    while(true) {
        let prev = current;
        if (data > current.data) {
            current = current.right;
            if(!current) {
                current = newNode;
                prev.right = current;
                break;
            }            
        } else {
            current = current.left;
            if(!current) {
                current = newNode;
                prev.left = current;
                break;
            }            
        }
    }

    return true;
}

// 先序遍历，先处理节点，再遍历左子树，最后遍历右子树
BST.prototype.preOrder = function preOrder({node = this.root, handler}) {
    handler(node);

    if(node.left) {
        this.preOrder({node : node.left, handler});
    }
    
    if(node.right) {
        this.preOrder({node : node.right, handler});
    }
}

// 中序遍历，先遍历左子树，再处理节点，最后遍历右子树
// 可以观察到，中序遍历其实就是从小到大排序
BST.prototype.midOrder = function midOrder({node = this.root, handler}) {
    if(node.left) {
        this.midOrder({node : node.left, handler});
    }
    
    handler(node);

    if(node.right) {
        this.midOrder({node : node.right, handler});
    }
}

// 后序遍历，先遍历左子树，再遍历右子树，最后处理节点
BST.prototype.postOrder = function postOrder({node = this.root, handler}) {
    if(node.left) {
        this.postOrder({node : node.left, handler});
    }

    if(node.right) {
        this.postOrder({node : node.right, handler});
    }

    handler(node);
}

// 层序遍历，一层一层的输出元素，递归不好使，需要借助队列
// 参考：https://blog.csdn.net/monster_ii/article/details/82115772
BST.prototype.levelOrder = function levelOrder({node = this.root, handler}) {
    let queue = [node];
    
    while(queue.length) {
        let cur = queue.shift();

        handler(cur);

        if (cur.left) {
            queue.push(cur.left);
        }

        if(cur.right) {
            queue.push(cur.right);
        }
    }
}

BST.prototype.min = function min(){
    let current = this.root;

    while(current.left){
        current = current.left;
    }

    return current.data;
}

BST.prototype.max = function max(){
    let current = this.root;

    while(current.right){
        current = current.right;
    }

    return current.data;
}

BST.prototype.search = function search(data) {
    if(!data) {
        return false;
    }

    let current = this.root;
    while(current && data != current.data) {
        if(data > current.data) {
            current = current.right;
        } else {
            current = current.left;
        }
    }

    return current ? current : false;
}

BST.prototype.remove = function remove(data) {
    if(!data) {
        return false;
    }

    let current = this.root;
    let parent = null;

    while(current && data != current.data) {
        parent = current;
        if(data > current.data) {
            current = current.right;
        } else {
            current = current.left;
        }
    }

    if(!current) {
        return false;
    }

    /* 要删除的节点（A）有两个子节点
       规律：找到 A 的前驱或者后继节点替代 A
       前驱： A 的左子节点里最大的节点
       后继： A 的右子节点里最小的节点
       下面以找到后继节点替代 A 为例
    */
    if(current.left && current.right) {
        let houji = current.right;
        let houjiParent = current;

        while(houji.left) {
            houjiParent = houji;
            houji = houji.left;
        }

        houji.left = current.left;

        if(houji.right){
            // 替换节点有右子节点需要移动到父节点的左子节点
            houjiParent.left = houji.right;
        } else if (current.right != houji){
            // 替换节点没有子节点，并且父节点也不是删除节点
            houji.right = current.right;
            houjiParent.left = null;
        }

        if(current != this.root) {
            parent.left == current ? parent.left = houji : parent.right = houji;
        } else {
            this.root = houji;
        }

        current = null;

    } else if (!current.left && !current.right){
        // 删除节点是个叶子节点

        if(current == this.root) {
            // 树只有一个根节点
            this.root = null;
        } else {
            parent.left == current ? 
            parent.left = null
            : parent.right = null;
        }
    } else {
        // 删除节点有一个子节点
        if(parent.left == current) {
            parent.left = current.left || current.right;
        } else {
            parent.right = current.left || current.right;
        }
    }

    current = null;
}


function init() {
    let t = new BST();
    t.insert(11);
    t.insert(7);
    t.insert(15);
    t.insert(5);
    t.insert(6);
    t.insert(3);
    t.insert(9);
    t.insert(8);
    t.insert(10);
    t.insert(13);
    t.insert(12);
    t.insert(14);
    t.insert(20);
    t.insert(18);
    t.insert(25);   

    return t; 
}

// t.remove(3);
// t.remove(5);
// t.remove(25);

let t = init();

let pre = [];
t.preOrder({handler : function(node) {
    pre.push(node.data);
}});

console.log(pre.join('->'));

let mid = [];
t.midOrder({ handler : function(node) {
    mid.push(node.data);
}});

console.log(mid.join('->'));

let post = [];
t.postOrder({ handler : function(node) {
    post.push(node.data);
}});

console.log(post.join('->'));

let level = [];
t.levelOrder({ handler : function(node) {
    level.push(node.data);
}});

console.log(level.join('->'));

// console.log(t.min(), '--', t.max());
// console.log(t.search(100));


module.exports = {
    init
};