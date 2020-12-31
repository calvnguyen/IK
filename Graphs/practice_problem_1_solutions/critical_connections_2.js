function find_critical_connections(noOfServers, connections) {
  const visited = {}
  const parent = {}
  const result = []
  const arrival = {}
  const departure = {}
  let timestamp = 0
  const lastarrival = {}

  const adjList = {}
  for (let i = 0; i < noOfServers; ++i) {
    adjList[i] = []
    visited[i] = false
  }
  for (let i = 0; i < connections.length; ++i) {
    const [ a, b ] = connections[i]
    adjList[a].push(b)
    adjList[b].push(a)
  }

  const DFS = (source) => {
    timestamp++
    arrival[source] = timestamp
    lastarrival[source] = timestamp
    visited[source] = true

    const neighbors = adjList[source]
    for (let i = 0; i < neighbors.length; ++i) {
      const neighbor = neighbors[i]
      if (!visited[neighbor]) {
        parent[neighbor] = source
        lastarrival[source] = Math.min(lastarrival[source], DFS(neighbor))
      } else if (neighbor !== parent[source]) {
        lastarrival[source] = Math.min(lastarrival[source], arrival[neighbor])
      }
    }

    if (lastarrival[source] === arrival[source] && parent[source] !== undefined) {
      result.push([ source, parent[source] ])
    }

    departure[source] = timestamp++

    return lastarrival[source]
  }

  DFS(0)

  return result.length > 0 ? result : [ [ -1, -1 ] ]
}