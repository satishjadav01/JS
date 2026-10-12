
console.log("Event in javascript");

//! Event 
//* Event is an object in javascript
//* The Change in a state of an object is called as Event
//* Whenever Event will trigger,one function will be invoke 

function notify() {
    alert("Button is clicked ");
}

//! What is addEventListener()?
//* The addEventListener() method is used to add or attaches the event in javascript.

//? Syntax : addEventListener(event_type,callback_funtion)
//? Mouse Event : click,dbclick,mouseleave,etc
let btn = document.getElementById('btn1');
// console.log(btn);

//! 1st way :
// btn.addEventListener("click",function(){
//     alert("How are you ?");
// });

//! 2nd way :
// btn.addEventListener("click",()=>{
//     alert("How are you ? ");
// });

// //! 3rd way : 
// function greet() {
//     alert("Hello How are you ? ");
// }
// btn.addEventListener("click",greet);

//! what is e ? 
//* e stand for Event in callback function
//* e consist of properties of an event trigger by user.

let btns = document.querySelectorAll(".btn");
console.log(btns);

btns.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        console.log(e.target);
        // console.log(e.target.name);
        // console.log(e.target.value);
    })
});

//! form event
//? How to access form element 

let loginForm = document.getElementById("login-form")     
console.log(loginForm);

//! e.preventDefault():
//* The e.preventDefault() method prevents the default behaviour of an html element such as reloading pages,scrolling page , at the time navigation page reloading , etc

loginForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    let username = document.getElementById("username")
    console.log(username.value);
    
});
//! Difference between change and input:

let username = document.getElementById("username");
let country = document.getElementById("country");

username.addEventListener("input", (e) => {
  document.getElementById("output").innerText = username.value;
});

country.addEventListener("change", (e) => {
  document.getElementById("output2").innerText = country.value;
});



console.log("Remainning Events");

//! 2 from event 1) focus 2)blur

let username = document.querySelector("input[type='text']");
console.log(username);

username.addEventListener("focus",()=>{
    username.style.outline = "none"
    username.style.border = "2px solid green";
});

username.addEventListener("blur",()=>{
    username.style.outline = "none"
    username.style.border = "2px solid red";
});


//!3. keybord Events
document.getElementById("myText").addEventListener("keypress",(e)=>{
    console.log(e.key);
});

document.getElementById("coding").addEventListener("keydown",(e)=>{
    if (e.ctrlKey && e.key == "c"){
        e.preventDefault();
        alert("ctrl+c is disabled ")
    }
});

//! 4. keybord event
//? copy,past,cut

let editor = document.getElementById("editor");

editor.addEventListener("copy",(e)=>{
    console.log("text copied to clipboard ");
    e.clipboardData.setData("text/plain","copy nahi hoga bhai");
    e.preventDefault();
});

editor.addEventListener("cut",(e)=>{
    console.log('text is cut');
});

editor.addEventListener("paste",(e)=>{
    console.log('text is paste');
});

document.addEventListener('copy',(event)=>{
    const selection = document.getSelection().toString();
    console.log('user copied',selection);
});


// Exmple: Modify the data before it enters the clipboard
event.clipboardData.setData('text/plain', selection.toUpperCase());
event.preventDefault(); // Required to override default behavior

console.log("Remainning Events");

//! 2 from event 1) focus 2)blur

let username = document.querySelector("input[type='text']");
console.log(username);

username.addEventListener("focus",()=>{
    username.style.outline = "none"
    username.style.border = "2px solid green";
});

username.addEventListener("blur",()=>{
    username.style.outline = "none"
    username.style.border = "2px solid red";
});


//!3. keybord Events
document.getElementById("myText").addEventListener("keypress",(e)=>{
    console.log(e.key);
});

document.getElementById("coding").addEventListener("keydown",(e)=>{
    if (e.ctrlKey && e.key == "c"){
        e.preventDefault();
        alert("ctrl+c is disabled ")
    }
});

//! 4. keybord event
//? copy,past,cut

let editor = document.getElementById("editor");

editor.addEventListener("copy",(e)=>{
    console.log("text copied to clipboard ");
    e.clipboardData.setData("text/plain","copy nahi hoga bhai");
    e.preventDefault();
});

editor.addEventListener("cut",(e)=>{
    console.log('text is cut');
});

editor.addEventListener("paste",(e)=>{
    console.log('text is paste');
});

document.addEventListener('copy',(event)=>{
    const selection = document.getSelection().toString();
    console.log('user copied',selection);
});


// Exmple: Modify the data before it enters the clipboard
event.clipboardData.setData('text/plain', selection.toUpperCase());
event.preventDefault(); // Required to override default behavior










