// JavaScript Algorithms and Data Structures
// Basic Algorithm Scripting
// Chunky Monkey

function chunkArrayInGroups(arr, size, res = []) {
  // return when arr argument is empty
  if(arr.length < 1) return res;
  // slice through array
  res.push(arr.slice(0, size));
  // do a recursive
  chunkArrayInGroups(arr.slice(size),size,res);
  // if not present return undefined
  return res;
}
