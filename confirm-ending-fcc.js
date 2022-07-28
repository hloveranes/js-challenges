// JavaScript Algorithms and Data Structures
// Basic Algorithm Scripting
// Confirm the Ending

function confirmEnding(str, target) {
  return str.slice(str.length-target.length) == target ? true : false
}

confirmEnding("Open sesame", "same");
