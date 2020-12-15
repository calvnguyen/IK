// DFS top -> bottom

function pathSum(root, sum) {
	let result = [];
	if (!root) return result;

	dfs(root, sum, [], result);

	return result;
}

// dfs helper
function dfs(node, target, path, result) {

	// base case
	if (isLeaf(node) && target === 0) {
		result.push(path.slice());
	}

	path.push(node.val);
	// recursion case
	if (node.left) {
		dfs(node.left, target - node.val, path, result);
	}
	if (node.right) {
		dfs(node.right, target - node.val, path, result);
	}
	path.pop();
}

function isLeaf(node) {
	return !node.left && !node.right;
}