// Revers String without using Reverse()

function ReverseString(str) {
    let rev = ""

    for(char of str){
        rev = char + rev
    }
    return rev
}
console.log(ReverseString('satish'));

