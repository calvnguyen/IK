// DFS top -> bottom
// global box
let result = false;

function hasPathSum(root, sum) {
	if (!root) return result;

	dfs(root, sum);

	return result;
}

// dfs helper
function dfs(node, target, ) {
	if (result) return;

	// base case
	if (isLeaf(node) && target === 0) {
		result = true;
	}

	// recursion case
	if (node.left) {
		dfs(node.left, target - node.val);
	}
	if (node.right) {
		dfs(node.right, target - node.val);
	}
}

function isLeaf(node) {
	return !node.left && !node.right;
}