function countVovels(str) {
    count = 0
    vovels = "aeiouAEIOU"

    for(char of str){
        if(vovels.includes(char)){
            count ++
        }
    }
    return count
}
console.log(countVovels('satish')); 
