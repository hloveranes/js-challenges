// JavaScript Algorithms and Data Structures
// Regular Expressions
// Use Capture Groups to Search and Replace

let str = "one two three";
let fixRegex = /(\w+)(\s)(\w+)(\s)(\w+)/; // Change this line
let replaceText = "$5 $3 $1"; // Change this line
let result = str.replace(fixRegex, replaceText);
