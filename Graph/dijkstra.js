/**
 * 参考：https://www.cnblogs.com/MySweetheart/p/13444836.html
 * 1. dis 为起始点到每一个点的最短距离
 * 2. visited 为分辨是否遍历过的点
 * 3. 这是带权的有向无环图，不带权的可以考虑使用领接表
 */
const graph = [
    [0, 4, 2, 0, 0, 0],
    [0, 0, 0, 2, 0, 0],
    [0, 0, 0, 1, 3, 0],
    [0, 0, 0, 0, 0, 2],
    [0, 0, 0, 0, 0, 3],
    [0, 0, 0, 0, 0, 0]
];

function dijkstra() {
  const len = graph.length;
  const dis = new Array(len).fill(Infinity);
  const visited = new Array(len).fill(false);
  dis[0] = 0;
  
  let count = 0;
  let cur = 0;

  while(count < len) {
    if(cur === undefined) break;
    visited[cur] = true;
    const curPath = graph[cur];
    let min;

    for(let i = 0; i < curPath.length; i++) {
      const curPathLen = curPath[i];
      if(curPathLen === 0) {
        continue;
      }

      const nextLen = curPathLen + dis[cur];
      if(dis[i] > nextLen) {
        dis[i] = nextLen;
      }

      if(!visited[i] && (!min || dis[i] < dis[min])) {
        min = i;
      }
    }

    cur = min;
    count++;
  }

  return dis;
}

console.log(dijkstra());