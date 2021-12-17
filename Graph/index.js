function Graph() {
    // 领接表
    this.vertexs = [];
    this.edges = {};
    this.color = {};
}

Graph.prototype.addVer = function(v) {
  this.vertexs.push(v);
  this.edges[v] = [];
  this.color[v] = 'white';
};

Graph.prototype.addEdges = function(v1, v2) {
  if (!this.edges[v1]) {
    this.addVer(v1);
  }

  this.edges[v1].push(v2);
}

Graph.prototype.toString = function() {
  let str = '';

  for(let key in this.edges) {
    str += `${key}->${this.edges[key].join(' ')}\n`;
  }
  return str;
}


Graph.prototype.bfs = function(start,handler) {
  let queue = [start];

  while(queue.length) {
    let cur = queue.shift();
    this.color[cur] = 'red';
    handler(cur);

    this.edges[cur].forEach(e => {
      if (this.color[e] == 'white') {
        queue.push(e);
        this.color[e] = 'gray';
      }
    })
  }
}

Graph.prototype.dfs = function (start, handler) {

  recursive.call(this, start, handler);

  function recursive(e, handler) {
    this.color[e] = 'gray';
    handler(e);
    this.edges[e].forEach(el => {
      if (this.color[el] == 'white') {
        recursive.call(this, el, handler);
      }
    })

    
    this.color[e] = 'red';    
  }
}

let g = new Graph;
g.addVer('a');
g.addVer('b');
g.addVer('c');
g.addVer('d');
g.addVer('e');
g.addVer('f');
g.addVer('g');
g.addVer('h');
g.addVer('i');
g.addEdges('a', 'b');
g.addEdges('a', 'c');
g.addEdges('a', 'd');
g.addEdges('b', 'e');
g.addEdges('b', 'a');
g.addEdges('b', 'f');
g.addEdges('c', 'a');
g.addEdges('c', 'd');
g.addEdges('c', 'g');
g.addEdges('d', 'g');
g.addEdges('d', 'h');
g.addEdges('d', 'c');
g.addEdges('d', 'a');
g.addEdges('e', 'b');
g.addEdges('e', 'i');
g.addEdges('f', 'b');
g.addEdges('g', 'c');
g.addEdges('g', 'd');
g.addEdges('h', 'd');
g.addEdges('i', 'e');

// console.log(g.toString())
g.dfs('a', function(e){
  console.log(e)
});
