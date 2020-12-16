class TreeNode {
	constructor(value) {
		this.val = value;
		this.left_ptr = null;
		this.right_ptr = null;
	}
}

let result = [];
function postorder_traversal(root) {
	if (!root) return result
	dfs(root);
	return result;
}

// 2 stacks approach
/*
Postorder traversal is just reverse of preorder traversal (if we traverse the right node first and then left node)
So idea is follow the same technique as preorder traversal and instead of printing it push it to the another Stack so that they will come out in reverse order (LIFO).
At the end just pop all the items from the second Stack and print it.
*/
function dfs(root) {
	let s1 = [];
	let s2 = [];

	// push the root node into first stack
	s1.push(root);

	while (s1.length !== 0) {
		// take out the root and insert into second stack
		let temp = new TreeNode(null);
		temp = s1.pop();

		s2.push(temp);
		// now we have the root, push the left and right child of the root into the first stack
		if (temp.left_ptr) {
			s1.push(temp.left_ptr);
		}
		if (temp.right_ptr) {
			s1.push(temp.right_ptr);
		}
	}

	// push in reverse order
	while (s2.length !== 0) {
		result.push(s2.pop().val);
	}
}

const root = new TreeNode(5);
root.left_ptr = new TreeNode(4);
root.right_ptr = new TreeNode(5);
root.left_ptr.left_ptr = new TreeNode(5);
root.right_ptr.right_ptr = new TreeNode(5);

console.log(postorder_traversal(root));

