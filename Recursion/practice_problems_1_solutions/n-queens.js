/**
n Queen Problem

Given an integer n, find all the possible ways to position n queens on an n×n chessboard so that no two queens attack each other.
A queen in chess can move horizontally, vertically, or diagonally.
Do solve the problem using recursion first even if you see some non-recursive approaches.

Example One

Input: 4

Output:

[[

"--q-",

"q---",

"---q",

"-q--"

], [

"-q--",

"---q",

"q---",

"--q-"

]]

There are two distinct ways four queens can be positioned on a 4×4 chessboard without attacking each other. The positions may appear in the output in any order. So the same two positions in different order would be another correct output.

Example Two

Input: 2

Output: [ ]

No way to position two queens on a 2×2 chessboard without them attacking each other - so empty array.

Notes
The function has one input argument: n.
Output: The function must return a two-dimensional array of strings representing the arrangements. Size of the array must be m×n where m is the number of distinct arrangements. Length of each string must be n and the strings’ characters may be either ‘q’ (for a queen) or ‘-’ (for an empty position on the chessboard). Valid arrangements may appear in the output in any order.
 */

/**
 * @param {number} n
 * @return {string[][]}
 */
 // There is exactly one queen on each row and one queen on each column in a valid backtracking solution
 // T(N): O(N!)
 // S(N): O(1)
function find_all_arrangements(n) {
  const results = [];
  solveNQueensHelper(n, 0, [], results);
  return results;
}

/* Queen will be under attack for these cases, 
         *  1. There is another queen in the same column
         *  2. There exists a queen in diagonal 1 i.e from top left to bottom right 
         *  3. There exists a queen in diagonal 2 i.e from bottom left to top right 
         * 
         * Now, for attack to happen,
         * For diagonal 1 => row - col of queen should be equal to row - col of any other position
         * For diagonal 2 => row + col of queen should be equal to row + col of any other position */
function isMoveValid(row, columns) {
  for (let i = 0; i < row; i++) {
    if (columns[i] === columns[row]) {
      return false; // Two queens are in the same column
    }

    if (row - i === Math.abs(columns[row] - columns[i])) {
      return false; // Two queens are in the same diagonal
    }
  }

  return true;
}

function solveNQueensHelper(n, row, slate, results) {
  if (row === n) {
    results.push(formatResult(n, slate));
    return;
  }

  // go row by row and backtrack
  for (let j = 0; j < n; j++) {
    slate[row] = j;

    if (isMoveValid(row, slate)) {
      solveNQueensHelper(n, row + 1, slate, results);
    }
  }
}

// put in n x n format array with queens
function formatResult(n, columns) {
  const result = [];
  for (let i = 0; i < n; i++) {
    const arr = Array(n).fill('-');
    arr[columns[i]] = 'q';
    result.push(arr.join(''));
  }
  return result;
}

console.log(find_all_arrangement(4));