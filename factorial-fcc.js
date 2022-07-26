// JavaScript Algorithms and Data Structures
// Basic Algorithm Scripting
// Factorialize a Number

function factorialize(num) {
  const factor = (num) => {
    let fct = 1;
    while(num > 0) {
      fct *= num
      num--;
    }
    return fct;
  };
  return factor(num)
}

factorialize(5);
