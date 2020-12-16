class TreeNode {
    constructor(value) {
        this.val = value;
        this.left_ptr = null;
        this.right_ptr = null;
    }
}

let prev;
// T(N): O(N)
// S(N): O(N)
function isBST(root) 
{
    prev = null;
    return dfs(root);
};

/* In-order traversal solution
Compute inorder traversal list dfs.
Check if each element in dfs is smaller than the next one.
*/
function dfs(root)
{
    if(!root) return true;

    if (!dfs(root.left_ptr)) {
        return false;
    }

    if (prev && root.val < prev) {
        return false;
    }

    prev = root.val;
    return dfs(root.right_ptr);

}



const root = new TreeNode(200);
root.left_ptr = new TreeNode(200);
root.right_ptr = new TreeNode(400);
root.left_ptr.left_ptr = new TreeNode(100);
root.left_ptr.right_ptr = new TreeNode(400);

console.log(isBST(root));