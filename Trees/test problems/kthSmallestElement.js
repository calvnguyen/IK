class TreeNode {
	constructor(value) {
		this.val = value;
		this.left_ptr = null;
		this.right_ptr = null;
	}
}

// in-order-traversal
// T(N): O(N)
// S(N): O(N)
let result = [];
function kth_smallest_element(root, k) {
	if (!root) return null;
	dfs(root);

	kth_smallest = result[k-1];

	return kth_smallest;
}

function dfs(node) {
	if (node) {

		if (node.left_ptr) {
			dfs(node.left_ptr);
		}

		result.push(node.val);

		if (node.right_ptr) {
			dfs(node.right_ptr);
		}
	}
}


const root = new TreeNode(1);
root.left_ptr = new TreeNode(2);
root.right_ptr = new TreeNode(3);
//root.right_ptr.left_ptr = new TreeNode(4);
//root.right_ptr.right_ptr = new TreeNode(7);

console.log(kth_smallest_element(root, 3));

