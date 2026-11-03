function isPalidron(str) {
    let rev = ""

    for(char of str){
        rev = char + rev
    }
    return str === rev
}
console.log(isPalidron("satish"));
