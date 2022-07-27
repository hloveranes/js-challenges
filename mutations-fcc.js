// JavaScript Algorithms and Data Structures
// Basic Algorithm Scripting
// Mutations

function mutation(arr) {
  let hasFalse = true;
  for(var i = 0; i < arr[1].length; i++ ) {
      if(!arr[0].toLowerCase().includes(arr[1][i].toLowerCase())){
      hasFalse = false;
      }
  }
  return hasFalse;
}

mutation(["hello", "Hello"]);
