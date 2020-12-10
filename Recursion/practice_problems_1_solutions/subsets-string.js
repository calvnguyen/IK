/**
Generate ALL possible subsets of a given set. The set is given in the form of a string s containing distinct lowercase characters 'a' - 'z'.
Example

Input: "xy" 

Output: ["", "x", "y", "xy"] 

 * Backtracking solution
 * T(N) = O(N*2^N)
 * S(N) = O(N*2^N)
 *
 * @param {number[]} nums
 * @return {number[][]}
 */

 function generate_all_subsets(s) {
 	const results = [];
 	// convert to char array
 	arrStr = [...s];
 	subsetsStrBacktrackHelper(arrStr, 0, [], results);
 	return results;
}

/**
 * @param {string[]} arrStr
 * @param {string} start
 * @param {string} slate
 * @param {number[][]} results
 */
function subsetsStrBacktrackHelper(arrStr, start, slate, results) {
	if (start === arrStr.length) {
		// use empty string in result instead of array
		if (slate.length === 0) {
			results.push('');
		} else {
			// strings are immutable in JS, no need to copy
			results.push(slate);
		}
		return;
	}
	
	// generate all subsets for a given string's length (all subsets of length 0, length 1, length 2, length 3, etc)
	subsetsStrBacktrackHelper(arrStr, start + 1, slate, results);
	slate += arrStr[start];
	subsetsStrBacktrackHelper(arrStr, start + 1, slate, results);
	// Backtrack
	slate = slate.slice(0, -1);
};

console.log(generate_all_subsets("xy"));