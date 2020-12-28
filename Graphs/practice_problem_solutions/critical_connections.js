function find_critical_connections(noOfServers, connections) {
  const visited = new Set()
  const parent = {}
  const result = []
  const arrival = {}
  const departure = {}
  let timestamp = 0
  const lastarrival = {}

  const adjList = {}
  for (let i = 0; i < noOfServers; ++i) {
    adjList[i] = []
  }
  for (let i = 0; i < connections.length; ++i) {
    const [ a, b ] = connections[i]
    adjList[a].push(b)
    adjList[b].push(a)
  }

  const DFS = (source) => {
    // At every DFS call, permnently update the timestamp
    timestamp++
    // Set arrival time to Number of DFS calls + Number of DFS returns
    arrival[source] = timestamp
    // Set last arrival time  to Number of DFS calls + Number of DFS returns
    lastarrival[source] = timestamp
    // Add node to visited
    visited.add(source)

    // Grab all the neighbors of the current nodee
    const neighbors = adjList[source]
    // Iterate over all the neighbors of the current node
    for (let i = 0; i < neighbors.length; ++i) {
      const neighbor = neighbors[i]

      // if you have not visited the neighbor node:
      if (!visited.has(neighbor)) {
        // set the parent of the neighbor node to be the current node
        parent[neighbor] = source
        // set the last arrival time of the current node to be the smallest of either:
        // the last arrival time of the current node (itself)
        // the last arrival time of the DFS(neighbor)
        lastarrival[source] = Math.min(lastarrival[source], DFS(neighbor))
      } else if (neighbor !== parent[source]) {
        // if you have visited the neighbor before and it was not from the current node
        // then you have a cycle, because some other node path has reached this node
        // set last arrival of the current node to be the smaller of either:
        // itself's last arrival time
        // the arrival time of the neighbor
        lastarrival[source] = Math.min(lastarrival[source], arrival[neighbor])
      }
    }

    // if the lastarrival time of the current node is equal to the arrival time of the current node
    // and the parent of the current node was found
    // then that means the lastarrival time was never updated after being set at the beginning of the function
    // this means no other path reaches the current node
    // the path is a critical edge
    if (lastarrival[source] === arrival[source] && parent[source] !== undefined) {
      result.push([ source, parent[source] ])
    }

    // At every DFS return, increment the timestamp
    departure[source] = timestamp++

    return lastarrival[source]
  }

  DFS(0)

  return result.length > 0 ? result : [ [ -1, -1 ] ]
}