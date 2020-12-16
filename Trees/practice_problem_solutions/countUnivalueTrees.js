class TreeNode {
	constructor(value) {
		this.val = value;
		this.left_ptr = null;
		this.right_ptr = null;
	}
}

// T(N) = O(N)
// S(N) = O(N) - WORST CASE HEIGHT OF TREE
let result = 0;

function findSingleValueTrees(root) {
	if (!root) return 0;

	dfs(root);

	return result;
}

function dfs(node) {
	// base case
	if (isLeaf(node)) {
		result++;
		return true;
	}

	let isUnivalue = true;

	if (node.left_ptr) {
		 const isLeft = dfs(node.left_ptr);
         // make sure to check if current node value is equal to its child's value
		 if (!isLeft || node.left_ptr.val !== node.val) {
		 	isUnivalue = false;
		 }
	}

	if (node.right_ptr) {
		const isRight = dfs(node.right_ptr);
		// make sure to check if current node value is equal to its child's value
		if (!isRight || node.right_ptr.val !== node.val) {
			isUnivalue = false;
		}
	}

	// all passed, there is univalue tree
	if (isUnivalue) {
		result++;
	}

	return isUnivalue;
}

function isLeaf(node) {
	return (!node.left_ptr && !node.right_ptr);
}


const root = new TreeNode(5);
root.left_ptr = new TreeNode(4);
root.right_ptr = new TreeNode(5);
root.left_ptr.left_ptr = new TreeNode(5);
root.right_ptr.right_ptr = new TreeNode(5);

console.log(findSingleValueTrees(root));

