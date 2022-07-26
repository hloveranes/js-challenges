// JavaScript Algorithms and Data Structures
// Basic Algorithm Scripting
// Return Largest Numbers in Arrays

function largestOfFour(arr) {
  let largest_array = [];

  for(var i = 0; i < arr.length; i++) {
    let largest_num = 0;
    
    for(var x = 0; x < arr[i].length; x++){
      if(arr[i][x] < 0){
        if(x == 0) {
          largest_num = arr[i][x];
        }else if(largest_num < arr[i][x]) {
          largest_num = arr[i][x];
        }
      }else{
        if(largest_num < arr[i][x]) {
          largest_num = arr[i][x];
        }
      }
    }
    largest_array.push(largest_num)
  }
  
  return largest_array;
}

largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]);
