// JavaScript Algorithms and Data Structures
// Basic Algorithm Scripting
// Slice and Splice

function frankenSplice(arr1, arr2, n) {
  const tmpArr2 = arr2.slice();
   tmpArr2.splice(n,0, ...arr1)
   return tmpArr2
}

frankenSplice([1, 2, 3], [4, 5], 1);
