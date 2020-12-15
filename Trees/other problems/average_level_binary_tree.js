
/*

Given a non-empty binary tree, return the average value of the nodes on each level in the form of an array.
Example 1:
Input:
    3
   / \
  9  20
    /  \
   15   7
   
Output: [3, 14.5, 11]
Explanation:
The average value of nodes on level 0 is 3,  on level 1 is 14.5, and on level 2 is 11. Hence return [3, 14.5, 11].
Note:
The range of node's value is in the range of 32-bit signed integer.

*/


// Time: O(N) - each node is traversed once
// Space: O(N) - for the queue, we have a maximum of N/2 nodes at any level therefore we will need O(N) space to store them in the queue.

const averageOfLevels = function(root) {
    const result = [];
    if (!root) return result;
    const queue = [];
    queue.push(root);
    
    while (queue.length > 0) {
        const level = queue.length;
        let avg = 0.0;
        for (let i = 0; i < level; i++) {
            let currentNode = queue.shift();
            avg += currentNode.val;
            
            if (currentNode.left !== null) {
                queue.push(currentNode.left);
            }
            if (currentNode.right !== null) {
                queue.push(currentNode.right);
            }
        }
        result.push(avg / level);
    }
    return result;
};