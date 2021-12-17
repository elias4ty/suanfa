/**
 * 参考：https://www.bilibili.com/video/av96560812/
 * 
 * 图要使用入度表
 */

const graph = { // 入度表
    1: [],
    2: [1],
    3: [1],
    4: [2,3],
    5: [3],
    6: [4, 5]  
};

const len = Object.keys(graph).length;

function topologic() {
    const stack = [];
    const ans = [];

    findNewNode(stack);
    
    while(stack.length){
        const cur = stack.shift();
        ans.push(cur);

        Object.keys(graph).forEach(key => {
            const now = graph[key];

            for(let i = 0; i < now.length; i++) {
                if(now[i] === cur) {
                    now.splice(i, 1);

                    if(!now.length){
                        stack.push(+key);
                        delete graph[key];
                    }
                    break;
                }
            }
        });
    }

    if(ans.length !== len) {
        throw new Error('此图有环，干！')
    }

    return ans.join('->');

}

function findNewNode(stack) {
    Object.keys(graph).forEach(key => {
        if(!graph[key].length) {
            stack.push(+key);
            delete graph[key];
        }
    });
}

console.log(topologic());