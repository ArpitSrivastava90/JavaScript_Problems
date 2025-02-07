//* String Methods

// CharAt ,  IndexOf  , LaastIndexOf

let UserName = "Arpit Srivastava";

// console.log(UserName.charAt(6));
// console.log(UserName.indexOf("t"));
// console.log(UserName.lastIndexOf("t"));

// StartsWith
// useCase --

let names = " Arpit";
// let result = names.startsWith(" ");
// result
//   ? console.log("your name  cannot be start with empty space  try again !")
//   : console.log(" Yeah this is right fornmat ");

// ReplaceAll

let number = "456-445-3545";
let NewNumber = number.replaceAll("-", "");
// console.log(NewNumber);

//! PadStart ()
//  useCase--

let FakeNumber = "6457254388";
let OGNumber = FakeNumber.padStart(12, "91");
// console.log(OGNumber);

// Quick Question
// 91456385765984 add space after 91

let numberr = "91456385765984";
// let result1 = numberr.slice(0, 2) + " " + numberr.slice(2);
// console.log(result1);

//!   Slice Method

// Extract Arpit &  Srivastava from "Arpit Srivastava"

let FullName = "Arpit Srivastava";
let FirstName = FullName.slice("0", FullName.indexOf(" "));
let lastName = FullName.slice(FullName.indexOf(" ") + 1);

// console.log(FirstName);
// console.log(lastName);

// 5 -  February Practice 10 questions

// Question 1

// Solution

// Given a string of 10 digits, format it as a standard phone number:
// 📞 Example Input: "9876543210"
// 📞 Expected Output: "(987) 654-3210"

// let PhnNumber = "9876543210";
// let result = `(${PhnNumber.slice(0, 3)}) ${PhnNumber.slice(
//   3,
//   6
// )}-${PhnNumber.slice(6)}`;
// console.log(result);

// Question 2
// Reverse the order of words in a given sentence while keeping individual words intact.
// 📜 Example Input: "JavaScript is awesome"
// 📜 Expected Output: "awesome is JavaScript"

// Solution

// let string = "JavaScript is awesome";
// let result2 = string.split(" ").reverse().join(" ");
// console.log(result2);

// Question 3
// Find the first character in a string that does not repeat.
//* Click -  if chararcter  Repeats its first index and lastIndex is Differrent
// 🔍 Example Input: "javascript"
// 🔍 Expected Output: "j"

// Solution

// let str = "javascript";
let str = "swiss";

// for (let char of str) {
//   if (str.indexOf(char) === str.lastIndexOf(char)) {
//     console.log(char);
//     return;
//   }
// }

// Question 4
// Convert a sentence so that each word starts with a capital letter.
// ✍ Example Input: "hello world, i love javascript"
// ✍ Expected Output: "Hello World, I Love Javascript"

// Solution

let sentence = "hello world, this is a test!";
let result3 = sentence
  .split(" ")
  .map((val) => {
    return val.charAt(0).toUpperCase() + val.slice(1);
  })
  .join(" ");

console.log(result3);

// Question 5
// Check if two given strings are anagrams (contain the same letters in different orders).
// 🧩 Example Input: "listen", "silent"
// 🧩 Expected Output: true
// 🔹 Concepts Used: split(), sort(), join()

// Solution

function anagrams(str1, str2) {
  str1.split("").sort().join() === str2.split("").sort().join()
    ? console.log(true)
    : console.log(false);
}
anagrams("listen", "silent");

// Question 6
// Remove duplicate characters from a given string.
// 🚀 Example Input: "aabbccddeeff"
// 🚀 Expected Output: "abcdef"

//  *  Click Compare with the index ( array.index(vlaue1)  === indx ?   )
// 🔹 Concepts Used: split(), filter(), indexOf()

// Solution

let Str3 = "aabbccddeeff";
function removeDuplicates(str) {
  return str
    .split("") // Convert the string into an array of characters
    .filter((char, index, self) => self.indexOf(char) === index) // Keep only the first occurrence
    .join(""); // Join the array back into a string
}

console.log(removeDuplicates(Str3));

//Question 7
// Count how many times each character appears in a string.
// 📊 Example Input: "banana"
// 📊 Expected Output: { b: 1, a: 3, n: 2 }

// 🔹 Concepts Used: split(), reduce()

// Solution


function charCount(str) {
  return str.split("").reduce((acc, char) => {
      acc[char] = (acc[char] || 0) + 1;
      return acc;
  }, {});
}

console.log(charCount("banana"));



// Question 8

// Given a credit card number as a string, mask all digits except the last 4.
// 💳 Example Input: "1234567812345678"
// 💳 Expected Output: "************5678"

// 🔹 Concepts Used: slice(), repeat()


// Solution

function maskCardNumber(cardNumber) {
  return "*".repeat(cardNumber.length - 4) + cardNumber.slice(-4);
}

console.log(maskCardNumber("1234567812345678"));

//Question 9

// Convert a string from snake_case to camelCase.
// 🐍 Example Input: "convert_this_to_camel"
// 🐍 Expected Output: "convertThisToCamel"

// 🔹 Concepts Used: split(), map(), slice(), join()

// Solution

function snakeToCamel(snake) {
  return snake.split("_").map((word, index) => 
      index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
  ).join("");
}

console.log(snakeToCamel("convert_this_to_camel"));




// Question 10
// Extract the domain name from a given URL string.
// 🌍 Example Input: "https://www.google.com/search?q=js"
// 🌍 Expected Output: "google"

// 🔹 Concepts Used: split(), replace(), match()

// Solution

function extractDomain(url) {
  return url.replace(/(https?:\/\/)?(www\.)?/, "").split("/")[0].split(".")[0];
}

console.log(extractDomain("https://www.google.com/search?q=js"));
