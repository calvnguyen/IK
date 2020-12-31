var cloneGraph = function(node, map = {}) {
    if(!node) return null
    if(map[node.val])
        return map[node.val]

    let nNode = new Node(node.val)
    map[node.val] = nNode
    let neighbors = []
    for(let i = 0; i < node.neighbors.length; ++i){
        neighbors.push(cloneGraph(node.neighbors[i], map))
    }
    nNode.neighbors = neighbors
    return nNode
};