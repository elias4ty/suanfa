const BST = require('./Tree/BST');

var levelOrder = function(root) {
    if(!root) {
        return [];
    }
    let queue = [root, null];
    let num = [];
    let row = [];

    while(queue.length) {
        let cur = queue.shift();

        if (cur) {
            row.push(cur.data);
            if (cur.left) {
                queue.push(cur.left);
            }

            if(cur.right) {
                queue.push(cur.right);
            }
        } else {
            num.push(row);
            row = [];
            if (queue.length) {
                queue.push(null);
            }
        }
    }

    return num;
};

let t = BST.init();

let num = levelOrder(t.root);

console.log(num);