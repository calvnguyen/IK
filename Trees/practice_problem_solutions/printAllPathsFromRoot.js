class TreeNode {
    constructor(value) {
        this.val = value;
        this.left_ptr = null;
        this.right_ptr = null;
    }
}

/*
*  T(N): O(N)
*  S(N): O(1)
*/
function printAllPaths(root) 
{
    if (!root) return [];

    let path = [];
    let slate = [];

    dfs(root, path, slate);

    slate.forEach((item) => {
        if (item) {
            console.log(item.join(' ')); 
        }
    });
};

/* Pre-order traversal solution. Use a list path to store all current path, slate list to store all the paths
*/
function dfs(root, path, slate)
{
    path.push(root.val);
    // at leaf nodes, just add current path to slate and return
    if (isLeaf(root)) {
        slate.push(path);
        return;
    }

    /*
    Note: A new array list is created in the recursive calls because we 
    do not want to share the same array list in left and right subtree calls as the paths will be different.
    */

    if (root.left_ptr) {
        // make a snapshot of path at each left subtree
        dfs(root.left_ptr, path.slice(), slate);
    }

    if (root.right_ptr) {
        // make a snapshot of path at each right subtree
        dfs(root.right_ptr, path.slice(), slate);
    }

}


function isLeaf(node) {
    return !node.left_ptr && !node.right_ptr;
}


const root = new TreeNode(10);
root.left_ptr = new TreeNode(20);
root.right_ptr = new TreeNode(30);
root.left_ptr.left_ptr = new TreeNode(40);
root.left_ptr.right_ptr = new TreeNode(50);

printAllPaths(root);