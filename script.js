// complete the given function

function isPalindrome(s) {
  s = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  return s === s.split('').reverse().join('');
}

// Example usage:
const input = "race a car";
const result = isPalindrome(input);
console.log(result);

module.exports = palindrome
