// JavaScript Algorithms and Data Structures
// Basic Algorithm Scripting
// Finders Keepers

function findElement(arr, func) {
  let hasPassed = false;
  for (var i = 0; i < arr.length; i++ ){
     if(func(arr[i])) {
       hasPassed = true;
      return arr[i];
     }
  } 
  if(!hasPassed) return undefined;
}

findElement([1, 3, 5, 8, 9, 10], num => num % 2 === 0);
