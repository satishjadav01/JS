//! What is Promise ?? 
//* A promise is an object in JS
//* A promise is an eventual compelition or failure of an anynchronous operations and it result the output

//! States of Promise :
//? pending -> Initial States ->Neither fulfilled or rejectd
//? resolve -> fulfilled -> Success -> data -> user the data
//? rejectd -> rejection -> error -> handle the error
//? settled -> Either resolve or rejected


let myPromise = new Promise((resolve,reject)=>{
    let network = Math.floor(Math.random()*100);
    console.log(network);
    
    if(network > 80 ){
        resolve("network are coming..")
    }else{
        reject ("network may be slow....")
    }
})
console.log(myPromise);

myPromise.then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log("Error while network fixing",error);
})
    