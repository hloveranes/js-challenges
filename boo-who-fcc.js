// JavaScript Algorithms and Data Structures
// Basic Algorithm Scripting
// Boo who

function booWho(bool) {
  return typeof bool == Boolean || typeof bool == 'boolean' ? true : false;
}

console.log(booWho(true));
