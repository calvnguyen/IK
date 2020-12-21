
/**
In an N by N square grid, each cell is either empty (0) or blocked (1).

A clear path from top-left to bottom-right has length k if and only if it is composed of cells C_1, C_2, ..., C_k such that:

Adjacent cells C_i and C_{i+1} are connected 8-directionally (ie., they are different and share an edge or corner)
C_1 is at location (0, 0) (ie. has value grid[0][0])
C_k is at location (N-1, N-1) (ie. has value grid[N-1][N-1])
If C_i is located at (r, c), then grid[r][c] is empty (ie. grid[r][c] == 0).

Return the length of the shortest such clear path from top-left to bottom-right.  If such a path does not exist, return -1.

Example 1:

Input: [[0,1],[1,0]]


Output: 2

Example 2:

Input: [[0,0,0],[1,1,0],[1,1,0]]


Output: 4

/*

/**
 * @param {number[][]} grid
 * @return {number}
 */
 // BFS solution
 // T(N) & S(N) = O(m x n) = linear
 function shortestPathBinaryMatrix(grid) {
    
    if (!grid || grid.length === 0) {
    	return -1;
    }

    // grid sizing
    const m = grid.length;
    const n = grid[0].length;

    // invalid start and end positions
    if (grid[0][0] === 1 || grid [m-1][n-1] === 1) {
    	return -1;
    }



  let step = 0;
  const queue = [[0, 0]]; // start at 0, 0
  const dirs = [[-1, 0], [1, 0], [0, 1], [0, -1], [-1, 1], [-1, -1], [1, 1], [1, -1]];
 
  let visited = [[],[]];
  visited[0][0] = true;

  while (queue.length) {
  	const size = queue.length;
  	step++;

  	for (let i = 0; i < size; i++) {
  		const [x,y] = queue.shift();

  		// at the end, return the current step
  		if (x === m - 1 && y === n - 1) return step;

  		for (const [dx, dy] of dirs) {
  			const newX = x + dx;
  			const newY = y + dy;
  			// failed condition (no 0's etc)
  			if (newX < 0 || newX > m - 1 || newY < 0 || y > n - 1 || visited[newX][newY] || grid[newX][newY] === 1) {
  				continue;
  			}
  			// contain 0's
  			queue.push([newX, newY]);
  			visited[newX][newY] = true;
  		}
  	}

  }
  return -1;

};


const length = shortestPathBinaryMatrix([[0,1],[1,0]]);
console.log(length);