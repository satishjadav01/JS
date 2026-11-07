function isPalidrome(str) {
    rev = ""

    for(char of str){
        rev = char + rev
    }
    return str === rev
}
console.log(isPalidrome('nayan'));
