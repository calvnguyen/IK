/*

Find All Well Formed Brackets

Given a positive integer n, return ALL strings of length 2*n with well formed round brackets.


Example

Input: 3

Output:

[

    "((()))",

    "(()())",

    "(())()",

    "()(())",

    "()()()"

]


Any array containing these five strings in any order is a correct output.


Notes

Input Parameters: Function has one argument, integer n.

Output: Return array of strings containing all possible well formed round brackets string of length 2*n. Order of strings in the returned array is insignificant, e.g. for n=2 both ["(())", "()()"] and ["()()", "(())"] will be accepted.

*/

function find_all_well_formed_brackets(n) {
  const results = [];
  parenthesesHelper(n, 0, 0, '', results);
  return results;

}

function parenthesesHelper(n, open, close, slate, results) {
  if (open === n && close === n) {
  	// string is immutable
    results.push(slate);
    return;
  }

  if (open < n) {
    parenthesesHelper(n, open + 1, close, slate + '(', results);
  }

  if (close < open) {
    parenthesesHelper(n, open, close + 1, slate + ')', results);
  }
}

console.log(find_all_well_formed_brackets(3));