//! There are type of timing function like 

//? setTimeout
//? setInterval
//? clearTimeout
//? clearInterval


//! setTimeout
//* which is used to dealy the task again after creation period of the time are known as setTimeout.

// let timeOut = setTimeout(() => {
//     console.log("Satish");
// }, 2000);

// console.log(timeOut);

//! setTimeout
//* which is used to dealy the task again after creation period of the time are known as setTimeout.

// let timeOut = setTimeout(() => {
//     console.log("Satish");
// }, 2000);
// console.log(timeOut);

//! setInterval
//* The setInterav which is used to reapet the task again and again 


let count = 10;
let timer = setInterval(()=>{
    console.log('count',count--);
    if(count == 0){
        clearInterval(timer)
        console.log("Booom");
    }
},2000)