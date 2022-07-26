// JavaScript Algorithms and Data Structures
// Basic Algorithm Scripting
// Title Case a Sentence

function titleCase(str) {
  let newStr = ''
  str.split(/\s/).map(item => {
    let word = item.toLowerCase();
    newStr += word[0].toUpperCase() + word.slice(1) + ' ';
  })

  return newStr.replace(/\s$/, '');
}

titleCase("sHoRt AnD sToUt")
