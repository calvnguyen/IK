class TreeNode {
	constructor(value) {
		this.data = value;
		this.left = null;
		this.right = null;
	}
}

// Use bottom up DFS using post-order traversal
function lca (root, node_a, node_b) {
	let result;
    result = dfs(root, node_a, node_b);
    return result;
}


function dfs(node, a, b) {
	// base cases
	if(!node) return null;

	// if we find a or b, return the node to previous call
	if (node.data === a.data || node.data === b.data) {
		return node.data;
	}

	let left = dfs(node.left, a, b);
	let right = dfs(node.right, a, b);

	// if a & b are coming from left and right, then it means ancestor is at the top (root)
	if (left && right) {
		return node.data;
		// both a & b are on the same branch, so return whichever is on top
	} else if (left) {
		return left;
	} else { 
		return right;
	}
}


const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.left.right.left = new TreeNode(8);
root.left.right.right = new TreeNode(9);
root.right.right = new TreeNode(7);
root.right.left = new TreeNode(6);
console.log(root);
console.log(lca(root, new TreeNode(6), new TreeNode(7)));

