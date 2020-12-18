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
let count = 0;
let stack = [];
function kth_smallest_element(root, k) {
	if (!root) return null;
	dfs(root, k);
	return count;
}

// iterative in-order traversal
function dfs(node, k) {
    while(stack.length !== 0 || node !== null) {
        while(node != null) {
            stack.push(node);
            node = node.left_ptr;
        }

        node = stack.pop();
        // track the count of numbers appearing in sorted order
        count++;

        if (count === k) {
            return node.val;
        }
        node = node.right_ptr;
    }
}


const root = new TreeNode(1);
root.left_ptr = new TreeNode(2);
root.right_ptr = new TreeNode(3);
root.right_ptr.left_ptr = new TreeNode(4);
root.right_ptr.right_ptr = new TreeNode(7);

console.log(kth_smallest_element(root, 4));

