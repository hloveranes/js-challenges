function palindrome(str) {
  let regx = /[-|_|\.|\s|,|(|)]/gi;
  let newStr = str.toLowerCase().replace(regx, '');
  let lent = newStr.length;

  for(var i=0;i<lent;i++){
    let li = lent-i-1;
    if(newStr[li] !== newStr[i]){
      return false
    }
  }
  return true;
}

palindrome("0_0 (: /-\ :) 0-0");
