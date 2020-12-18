class TreeNode {
	constructor(value) {
		this.val = value;
		this.children = [];
	}
}

// traverse K-ary tree BFS
// T(N) = O(N)
// S(N) = O(N)
function find_height(root) 
{
    let result = dfs(root);
    return result;
}

function dfs(root) {
	if (root.children.length === 0) return 0;

	let h = 0;

	for (let c of root.children) {
		h = Math.max(h, dfs(c));
	}

	return h + 1;

}


let root = new TreeNode('1');
root.children = [new TreeNode('2'), new TreeNode('3'), new TreeNode('5')];
root.children[2].children = [new TreeNode('4')];

console.log(find_height(root));