
/*
Palindromic Decomposition Of A String

Find all palindromic decompositions of a given string s.

A palindromic decomposition of string is a decomposition of the string into substrings, such that all those substrings are valid palindromes.

Example

Input: "abracadabra"

Output: [ "a|b|r|a|c|a|d|a|b|r|a", "a|b|r|a|c|ada|b|r|a", "a|b|r|aca|d|a|b|r|a" ]

Notes

Input Parameters: There is only one argument: string s.

Output: Return array of string res, containing ALL possible palindromic decompositions of given string. To separate substrings in the decomposed string, use '|' as a separator between them.

You need not to worry about the order of strings in your output array. Like for s = "aa", arrays ["a|a", "aa"] and ["aa", "a|a"] both will be accepted.
In any string in your returned array res, order of characters should remain the same as in the given string. (i.e. for s = "ab" you should return ["a|b"] and not ["b|a"].)
Any string in the returned array should not contain any spaces. e.g. s = "ab" then ["a|b"] is expected, ["a |b"] or ["a| b"] or ["a | b"] will give the wrong answer.
    string: 'aab'
    start = 0 will find palindrome in 'a', 'aa', 'aab'
    start = 1 will find palindrome in      'a',  'ab'
    start = 2 will find palindrome in            'b'
 */

/**
 * @param {string} s
 * @return {string[][]}
 */
 // T(N): O(N * 2^N)
 // S(N): O(N)
function generate_palindromic_decompositions(s) {
    let result = [];
    // sanity check
    if (s === null || s.length === 0) return result;
    palindromeHelper(s, 0, [], result);  
    const stringOutputWithDelimeter = result.map((item) => {
        return item.join('|');
    });

    return stringOutputWithDelimeter; 
}
  
function palindromeHelper(str, start, slate, result) {
    // base case
    if (start === str.length) {
        result.push(slate.slice());
        return;
    }

    // go through all possible substrings starting at start index
    // for each substring, check if it's a palindrome
    // if it is, push it to our current slate (potential solution so far)
    // perform dfs on remaining substring (i+1)
    // restore the slate
    for (let i = start; i < str.length; i++) {
        let subStr = str.slice(start, i + 1);
        if (!isPalindrome(subStr)) {
            continue;
        }

        slate.push(subStr);
        palindromeHelper(str, i + 1, slate, result);
        slate.pop();
    }
}

// utility to check if string is a palindrome
function isPalindrome(string) {
  if (string.length <= 1) {
    return true;
  }

  let firstLetter = string[0];
  let lastLetter = string[string.length - 1];

  if (firstLetter === lastLetter) {
    let strWithoutFirstLastChars = string.substring(
      1,
      string.length - 1
    );
    // check towards inside from left and right
    return isPalindrome(strWithoutFirstLastChars);
  } else {
    return false;
  }
}

console.log(generate_palindromic_decompositions('abracadabra'));