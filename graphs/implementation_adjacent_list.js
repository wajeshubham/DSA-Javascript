class Graph {
  constructor() {
    this.numberOfNodes = 0;
    this.adjacentList = {};
  }

  addVertex(node) {
    this.adjacentList[node] = [];
    this.numberOfNodes++;
  }

  addEdge(node1, node2) {
    this.adjacentList[node1].push(node2);
    this.adjacentList[node2].push(node1);
  }

  showConnections() {
    for (let key of Object.entries(this.adjacentList)) {
      console.log(key[0] + " ---> " + key[1].join(" "));
    }
  }
}

let graph = new Graph();

graph.addVertex(`0`);
graph.addVertex(`1`);
graph.addVertex(`2`);
graph.addVertex(`3`);
graph.addVertex(`4`);
graph.addVertex(`5`);
graph.addVertex(`6`);

graph.addEdge("3", "1");
graph.addEdge("3", "4");
graph.addEdge("4", "2");
graph.addEdge("4", "5");
graph.addEdge("1", "2");
graph.addEdge("1", "0");
graph.addEdge("0", "2");
graph.addEdge("6", "5");

graph.showConnections();
