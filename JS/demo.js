function reverseString(str) {
    let rev = ""

    for(char of str){
        rev = char + rev
    }
    return rev
}
console.log(reverseString('satish'));
