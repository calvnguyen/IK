/*
 * Complete the function below.
 */

function Node()
{
    this.val = 0;													
    this.neighbours = [];
}


function build_other_graph(node) {
 if (!node) return node
  const visited = {};
  const created = {};

  const newNode = new Node();
  newNode.val = node.val;
  newNode.neighbours = node.neighbours.slice(0);

  DFS(newNode, null);
  return newNode;

  // on a node, parent
  // make new neighbors list
  // push parent to new neighbors list
  // iterate over old neighbors
  // for each neighbor
  // if !visited: create node, call DFS
  // if visited: push yourself to their neighbors

  // when you see a node / neighbor, if you haven't flipped it yet, flip the neighbor
  // if you haven't visited the node / neighbor, visit it
  function DFS(node, parent) {
    const oldNeighbors = node.neighbours;
    const newNeighbors = parent ? [ parent ] : [];
    node.neighbours = newNeighbors;

    visited[node.val] = node;
    for (let i = 0; i < oldNeighbors.length; ++i) {
      const originalNode = oldNeighbors[i];

      if (!visited[originalNode.val]) {
        const newNode = new Node();
        newNode.val = originalNode.val;
        newNode.neighbours = originalNode.neighbours.slice(0);
        DFS(newNode, node);
      } else {
        const neighbourNode = visited[originalNode.val];
        neighbourNode.neighbours.push(node);
      }
    }
  }

}


const node1 = new Node();
node1.val = 1;

const node2 = new Node();
node2.val = 2;

const node3 = new Node();
node3.val = 3;

node1.neighbours.push(node2);
node1.neighbours.push(node3);
node2.neighbours.push(node3);
node2.neighbours.push(node1);
node3.neighbours.push(node1);
node3.neighbours.push(node2);

const result = build_other_graph(node1);
console.log(result);