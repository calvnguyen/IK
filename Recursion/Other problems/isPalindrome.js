

// A Palindrome is a string / word that reads the same forward and backward

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

console.log(isPalindrome('racecar'));
console.log(isPalindrome('racescar'));

console.log(['0', '1'])