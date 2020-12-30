function build_other_graph(node) {
    class Vertex {
      constructor(val) {
        this.val = val;
        this.neighbours = [];
      }
    }
    function buildFromNode(vertex, cloneMap) {
        if (cloneMap[vertex.val]) return cloneMap[vertex.val];

        cloneMap[vertex.val] = new Vertex(vertex.val);

        for (let i = 0; i < vertex.neighbours.length; i++) {
          const clonedVertex = buildFromNode(vertex.neighbours[i], cloneMap);
          clonedVertex.neighbours.push(cloneMap[vertex.val]);
        }

        return cloneMap[vertex.val];
    }

    const cloneMap = {};

    return buildFromNode(node, cloneMap);
}