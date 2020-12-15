
/*
  Leaf Similar Trees

  Input: root1 = [3,5,1,6,2,9,8,null,null,7,4], root2 = [3,5,1,6,7,4,2,null,null,null,null,null,null,9,8]
  Output: true

*/
// Iterative DFS solution using stack
function getLeaves(root) {
    var leaves = [];
    var stack = [root];
    while( stack.length > 0) {

    	// return the last element  (LIFO)
        var node = stack.pop();
        if( node.left === null && node.right === null) {
            leaves.push(node.val);
        } else {
            if( node.right) {
                stack.push(node.right);
            }
            if( node.left) {
                stack.push(node.left);
            }
        }
    }
    return leaves;
    
}
function leafSimilar(root1, root2) {
    let r1 = getLeaves(root1);
    let r2 = getLeaves(root2);
    if( r1.length !== r2.length)
        return false;
    for(let i = 0; i < r1.length; i++ ) {
        if( r1[i] !== r2[i])
            return false;
    }
    return true;
};