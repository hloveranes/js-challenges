// JavaScript Algorithms and Data Structures
// Basic Algorithm Scripting
// Find the Longest Word in a String

function findLongestWordLength(str) {
  let str_arr = str.split(/\s/)
  let last_long_word = 0;
  for(var i = 0;i < str_arr.length; i++){
    if(i == 0) { 
      last_long_word = str_arr[i].length;
    }
    if(last_long_word < str_arr[i].length) {
      last_long_word = str_arr[i].length;
    }
  }
  return last_long_word;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
