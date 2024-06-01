function isPalindrome(word) {
  
  let j = word         .split('')
                        .reverse('') 
                        .join('')
                       
 
  return word === j;
}
console.log(isPalindrome("Mom"))
// check for special characters
// 

/* 
  Add your pseudocode here
function isPalindrome(word) {
  
  // Step 1: Split the word into an array of characters
  let j = word.split('');

  // Step 2: Reverse the array of characters
  let reversedCharacterArray = characterArray.reverse();

  // Step 3: Join the reversed array back into a string
  let reversedWord = reversedCharacterArray.join('');

  // Step 4: Compare the original word with the reversed word
 

// Test the function with a single character word
console.log(isPalindrome("mom")); // Output: true
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
// if (require.main === module) {
//   // add your own custom tests in here
//   console.log("Expecting: true");
//   console.log("=>", isPalindrome("racecar"));

//   console.log("");

//   console.log("Expecting: false");
//   console.log("=>", isPalindrome("robot"));
// }

// module.exports = isPalindrome;
