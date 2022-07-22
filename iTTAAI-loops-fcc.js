// JavaScript Algorithms and Data Structures
// Basic Data Structures
// Iterate Through All an Array's Items Using For Loops

function filteredArray(arr, elem) {
  let newArr = [];
  // Only change code below this line
  for(var i = 0;i < arr.length;i++){
    const noInArr = (inArr) => {
      let isInside = false;
      for(var x = 0;x < inArr.length; x++){
       if(inArr[x] == elem){
         isInside = true;
       }
      }
      return isInside;
    }
    if(!noInArr(arr[i])){
        newArr.push(arr[i]);
    }
  }
  // Only change code above this line
  return newArr;
}

console.log(filteredArray([[10, 8, 3], [14, 6, 23], [3, 18, 6]], 18));
