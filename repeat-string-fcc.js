// JavaScript Algorithms and Data Structures
// Basic Algorithm Scripting
// Repeat a String Repeat a String

function repeatStringNumTimes(str, num) {
  if(num < 0) return '';
  let result = '';
  for(var i = 0; i < num; i++){
    result += str;
  }
  return result;
}

repeatStringNumTimes("abc", 3);
