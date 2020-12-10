/**
Generate All Possible Expressions That Evaluate To The Given Target Value

Given a string s that consists of digits (“0”..”9”) and target, a non-negative integer, find all expressions that can be built from string s that evaluate to the target.

When building expressions, you have to insert one of the following operators between each pair of consecutive characters in s: “join” or “*” or “+”. For example, by inserting different operators between the two characters of string “12” we can get either 12 (1 joined with 2) or 2 (1*2) or 3 (1+2).

Other operators such as “-” or “÷” are NOT supported.

Expressions that evaluate to the target but only utilize a part of s do not count: entire s has to be consumed.

Precedence of the operators is conventional: “join” has the highest precedence, “*” – medium and “+” has the lowest precedence. For example, 1+2*34=(1+(2*(34)))=1+68=69.

You have to return ALL expressions that can be built from string s and evaluate to the target.

Example One

Input:

s="222", target=24.
Output:
["22+2", "2+22"] and ["2+22", "22+2"] are both correct outputs.

22+2=24: we inserted the “join” operator between the first two characters and the “+” operator between the last two characters of s.
2+22=24: we inserted the “+” operator between the first two characters and the “join” operator between the last two characters of s.

Example Two

Input: s="1234", target=11.
Output: ["1+2*3+4"]

Example Three

Input:
s="99", target=1.

Output:
[]


 */
// not working yet...26/35 test cases passed =(
function generate_all_expressions(s, target) {
  const result = [];
  evaluateHelper(s, target, 0, 0, 0, '', result);
  return result;
}

function evaluateHelper(str, target, start, total, last, slate, result) {
  if (start === str.length) {
    if (total === target) {
      result.push(slate);
    }
    return;
  }

  for (let i = start; i < str.length; i++) {
    // for example, input is "105", we don't need answer like "1*05"
    if (i > start && str[start] === '0') {
      break;
    }

    const curr = parseInt(str.substring(start, i + 1));

    if (start === 0) {
      // this is the first number
      evaluateHelper(str, target, i + 1, total + curr, curr, slate + curr, result);
    } else {
      // not the first number, let's add operators
      evaluateHelper(str, target, i + 1, total + curr, curr, slate + '+' + curr, result);
      evaluateHelper(str, target, i + 1, total - last + last * curr, last * curr, slate + '*' + curr, result);
    }
  }
};

console.log(generate_all_expressions("1234", 11));
