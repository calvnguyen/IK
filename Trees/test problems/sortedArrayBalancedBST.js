class TreeNode {
	constructor(value) {
		this.val = value;
		this.left_ptr = null;
		this.right_ptr = null;
	}
}

//  get the middle node and make it root, do the same for left and right subtrees
// T(N): O(N)
// S(N): O(logN)  // Balanced Binary Search Tree
function build_balanced_bst(a) {
	if (a.length === 0) return new TreeNode(null);

	return arrToBST(a, 0, a.length -1);

}

function arrToBST(arr, start, end) {
	// base case
	if (start > end) return null;

	if (start === end) return new TreeNode(arr[start]);

	let mid = Math.floor((start + end) / 2);
	let root = new TreeNode(arr[mid]);

	root.left_ptr = arrToBST(arr, start, mid - 1);

	root.right_ptr = arrToBST(arr, mid + 1, end);

	return root;
}

function inOrder(node) { 
	if (!node) { 
	    return; 
	}  
    inOrder(node.left_ptr); 
    console.log(node.val + " ");
    inOrder(node.right_ptr); 
 } 



let result = build_balanced_bst([8, 10, 12, 15, 16, 20, 25]);

console.log(result);

console.log(inOrder(result));