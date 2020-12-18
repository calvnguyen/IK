class TreeNode {
    constructor(value) {
        this.val = value;
        this.left_ptr = null;
        this.right_ptr = null;
    }
}

/*
*  T(N): O(N)
*  S(N): O(N)
*/
// store the head (first) and tail (last) of the doubly linked list

class FirstLast {
    constructor() {
        this.first = new TreeNode(null);
        this.last = new TreeNode(null);
    }
}

let flLeft = new FirstLast();
let flRight = new FirstLast();

function BTtoLL(root) 
{
    if (!root) {
        return root;
    }

    let firstLast = new FirstLast();

    firstLast = dfs(root);

    // set the circular links
    firstLast.last.right_ptr = firstLast.first;
    firstLast.first.left_ptr = firstLast.last;
    
    return firstLast.first;

};

/* In-order traversal solution.
*/
function dfs(root) {
    // base case - leaf node
    let firstLast = new FirstLast();
    if (isLeaf(root)) {
        firstLast.first = root;
        firstLast.last = root;
        return firstLast;
    }

    if (root.left_ptr) {
        flLeft = dfs(root.left_ptr);
        firstLast.first = flLeft.first;
        flLeft.last.right_ptr = root;
        root.left_ptr = flLeft.last
    } else {
        firstLast.first = root;
    }

    if (root.right_ptr) {
        flRight = dfs(root.right_ptr);
        firstLast.last = flRight.last;
        flRight.first.left_ptr = root;
        root.right_ptr = flRight.first;
    } else {
        firstLast.last = root;
    }

    return firstLast;
}

function isLeaf(node) {
    return !node.left_ptr && !node.right_ptr;
}

const root = new TreeNode(10);
root.left_ptr = new TreeNode(20);
root.right_ptr = new TreeNode(30);
root.left_ptr.left_ptr = new TreeNode(40);
root.left_ptr.right_ptr = new TreeNode(50);

console.log(BTtoLL(root));