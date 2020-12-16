class TreeNode {
	constructor(value) {
		this.val = value;
		this.left_ptr = null;
		this.right_ptr = null;
	}
}

function isBST(root) {
	if (!root || isSingleNodeTree(root)) return true;

	let result = dfs(root);

	return result;
}

function dfs(node) {
	// base cases
	if (isLeaf(node)) {
		return true;
	}

	let isBST = true;

	if (node.left_ptr) {
		 const isLeft = dfs(node.left_ptr);
		 if (!isLeft || node.left_ptr.val > node.val) {
		 	isBST = false;
		 }
	}

	if (node.right_ptr) {
		const isRight = dfs(node.right_ptr);
	
		if (!isRight || node.right_ptr.val < node.val) {
			isBST = false;
		}
	}

	return isBST;
}

function isLeaf(node) {
	return (!node.left_ptr && !node.right_ptr);
}

function isSingleNodeTree(node) {
	return ((node.left_ptr && !node.right_ptr) || (node.right_ptr && !node.left_ptr));
}

const root = new TreeNode(200);
root.left_ptr = new TreeNode(200);
root.right_ptr = new TreeNode(400);
root.left_ptr.left_ptr = new TreeNode(100);
root.left_ptr.right_ptr = new TreeNode(400);

console.log(isBST(root));

