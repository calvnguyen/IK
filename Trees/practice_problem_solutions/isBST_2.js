class TreeNode {
    constructor(value) {
        this.val = value;
        this.left_ptr = null;
        this.right_ptr = null;
    }
}


function isBST(root) 
{
    
    var max= Infinity;
    var min= -Infinity;
    
    return dfs(root,min,max);
  
    
};

function dfs(root,min,max)
{
    if(!root) return true;

    // Сheck that curent node meets the minimum and maximum limits
    if((root.val < min) || ( root.val > max)) {
        return false;  
    }

    // Check left and right subtrees
    return  dfs(root.left_ptr, min, root.val) && dfs(root.right_ptr, root.val, max);
}



const root = new TreeNode(200);
root.left_ptr = new TreeNode(200);
root.right_ptr = new TreeNode(400);
root.left_ptr.left_ptr = new TreeNode(100);
root.left_ptr.right_ptr = new TreeNode(400);

console.log(isBST(root));