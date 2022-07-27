// JavaScript Algorithms and Data Structures
// Basic Algorithm Scripting
// Falsy Bouncer

function bouncer(arr) {
  let result = [];
  arr.map((item) => {     
    if(Boolean(item)) result.push(item);
  })
  return result;  
}

bouncer([7, "ate", "", false, 9]);
