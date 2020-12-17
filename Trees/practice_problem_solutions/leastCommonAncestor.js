class TreeNode {
	constructor(value) {
		this.val = value;
		this.left_ptr = null;
		this.right_ptr = null;
	}
}

// Use bottom up DFS using post-order traversal
let result;
function lca (root, node_a, node_b) {
    dfs(root, node_a, node_b);
    return result;
}


function dfs(node, a, b) {
	// base cases
	if(!node) return null;

	// if we find a or b, return the node to previous call
	if (node.val === a || node.val === b) {
		return node;
	}

	let left = dfs(node.left_ptr, a, b);
	let right = dfs(node.right_ptr, a, b);

	// if a & b are coming from left and right, then it means ancestor is at the top (root)
	if (left && right) {
	    result = node.val;
		return node;
		// both a & b are on the same branch, so return whichever is on top
	} else if (left) {
		return left;
	} else { 
		return right;
	}
}


const root = new TreeNode(1);
root.left_ptr = new TreeNode(2);
root.right_ptr = new TreeNode(3);
root.left_ptr.left_ptr = new TreeNode(4);
root.left_ptr.right_ptr = new TreeNode(5);
root.left_ptr.right_ptr.left_ptr = new TreeNode(8);
root.left_ptr.right_ptr.right_ptr = new TreeNode(9);
root.right_ptr.right_ptr = new TreeNode(7);
root.right_ptr.left_ptr = new TreeNode(6);

console.log(lca(root, 8, 9));

