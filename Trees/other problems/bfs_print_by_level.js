class TreeNode {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

// T(N) = O(N)  where N is size of tree
// S(N) = O(N)  shallow and wide tree (worst case)
function bfsByLevel(root) {
	if (!root) {
		return [];
	}
	let queue = [];
	let result = [], temp = [];
	queue.push(root);

	while (queue.length !== 0) {
		temp = [];
		let size = queue.length;

		for (let i = 0; i < size; i++) {
			let node = queue.shift();
			temp.push(node.value);

			if (node.left) {
				queue.push(node.left);
			}

			if (node.right) {
				queue.push(node.right);
			}
		}
		result.push(temp);
	}

	return result;
}


const root = new TreeNode(3);
root.left = new TreeNode('9');
root.right = new TreeNode('20');
root.left.left = null
root.right.right = null;
root.right.left = new TreeNode('15');
root.right.right = new TreeNode('7');

console.log(bfsByLevel(root));

