let num = [10,20,30,40,50,610]

function secoundLargest(str) {
    return[...new Set(num)].sort((a,b)=>b-a)[1]
}  
console.log(secoundLargest(num));
