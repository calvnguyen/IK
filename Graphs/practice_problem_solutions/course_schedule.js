/**
 * @param {number} n
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
function course_schedule(n, prerequisites) {
    let courseList = Array.from({length:n}, ()=>[]);
    let visited = new Array(n).fill(false);
    let arrival = new Array(n).fill(-1);
    let departure = new Array(n).fill(-1);
    let timestamp = 0;
    let topsort = [];

    prerequisites.forEach(([c1,c2]) => {
        courseList[c1].push(c2);
    });
    
    for (let v = 0; v < n; v++) {
      if(!visited[v]) {
        if(detectCycle(v)) {
          return [-1];
        }
      }
    }

return topsort;

function detectCycle(node) {
  arrival[node] = timestamp++;
  visited[node] = true;

  let neighbors = courseList[node];

  for (let i = 0; i < neighbors.length; i++) {
    let neighbor = neighbors[i];

    if (!visited[neighbor]) {
      if (detectCycle(neighbor)) return true;
    } else {
      if (departure[neighbor] === -1) return true;
    }
   }

   departure[node] = timestamp++;
   topsort.push(node);
   return false;
 }
}

