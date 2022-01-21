/**
 * 父子树（多叉树）
 * 每个节点都有一个父节点 id
 * 子节点需要在父节点的子树中
 */

function Node(node) {
    this.val = node.val;
    this.children = [];
    this.pid = node.parentid;
    this.id = node.id;
}

class ParentTree {
    root = null;

    constructor(arr) {
        if(arr !== undefined) {
            arr.forEach(ele => {
                this.insert(ele);
            });
        }
    }

    insert(node) {
        const newNode = new Node(node);

        if(this.root === null) {
            this.root = newNode;
            return true;
        }

        const parent = this.find(newNode.pid);

        if(parent) {
            parent.children.push(newNode);
            return true;
        } else {
            return false;
        }
    }

    find(id) {
        const queue = [this.root];

        while(queue.length) {
            const top = queue.shift();
            if(top.id === id) {
                return top;
            }

            queue.push(...top.children);
        }

        return null;
    }
}

const tree = new ParentTree(
    [
        { id: 1, val: 1 },
        { id: 2, val: 2, parentid: 1 },
        { id: 3, val: 3, parentid: 1 },
        { id: 4, val: 4, parentid: 2 },
        { id: 5, val: 5, parentid: 3 },
    ]
);

console.log(tree);