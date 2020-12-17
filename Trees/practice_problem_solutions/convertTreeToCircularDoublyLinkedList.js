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
class FirstLast {
    constructor() {
        this.first = new TreeNode(null);
        this.last = new TreeNode(null);
    }
}

function BTtoLL(root) 
{
    if (!root) {
        return null;
    }

    let firstLast = new FirstLast();

    dfs(root, firstLast);

    // set the circular links
    firstLast.first.left_ptr = firstLast.last;
    firstLast.last.right_ptr = firstLast.first;

    return firstLast.first;

};

/* In-order traversal solution.
*/
function dfs(root, firstLast)
{
  if (!root) return;

  if (root.left_ptr) {
    dfs(root.left_ptr, firstLast);
  }

  // current Node, set first node to root if it doesn't exist
  if (firstLast.first.val === null) {
    firstLast.first = root;
  }

  let prev = firstLast.last;

  if (prev) {
    prev.right_ptr = root;  // next
    root.left_ptr = prev;   // previous
  }

  // last node
  firstLast.last = root;

  if (root.right_ptr) {
    dfs(root.right_pt, firstLast);
  }
}

const root = new TreeNode(10);
root.left_ptr = new TreeNode(20);
root.right_ptr = new TreeNode(30);
root.left_ptr.left_ptr = new TreeNode(40);
root.left_ptr.right_ptr = new TreeNode(50);

BTtoLL(root);