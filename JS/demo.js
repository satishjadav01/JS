function isPalidrome(str) {
  let rev = "";

  for (char of str) {
    rev = str + rev;
  } 
  return rev === str;
}
console.log(isPalidrome(""));  
