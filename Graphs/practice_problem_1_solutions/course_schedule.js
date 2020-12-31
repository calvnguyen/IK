/**
 * @param {number} n
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
function course_schedule(n, prerequisites) {
    let adjList = Array.from({ length: n }, ()=>[]);
    let visited = new Array(n).fill(false);
    let arrival = new Array(n).fill(-1);
    let departure = new Array(n).fill(-1);
    let timestamp = 0;
    let topSort = [];

    buildAdjList(prerequisites);
    
    for (let v = 0; v < n; v++) {
      if(!visited[v]) {
        if(detectCycle(v)) {
          return [-1];
        }
      }
    }

// get decreasing order of dep. times
return topSort.reverse();;

function buildAdjList(vertices) {
  vertices.forEach((vertice) => {
    let src = vertice[1];
    let dest = vertice[0];
    console.log('src: ',src);
    console.log('dest: ',dest);
    adjList[src].push(dest);
    console.log('adj list');
    console.log(adjList);
  });
}

function detectCycle(node) {
  visited[node] = true;
  arrival[node]= timestamp++;
  let neighbors = adjList[node];

  for (let i = 0; i < neighbors.length; i++) {
    let neighbor = neighbors[i];
    if (!visited[neighbor]) {
      if (detectCycle(neighbor))
        return true;
    } else {
      // back edge exists
      if (departure[neighbor] === -1)
        return true;
    }
  }

  // push increasing order of dep. times
  topSort.push(node); 
  departure[node] = timestamp++;
  return false;
 }
}


console.log(course_schedule(4, [[1, 0], [2, 0], [3, 1], [3, 2]]));