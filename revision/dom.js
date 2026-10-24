//! What is DOM ? 
//* DOM is an API  in Javascript which Allow the html element inside javascript and javascript provide funtionalities are knonw as DOM    

//* DOM is an Tree Like Structure of a HTML Documnet is called as DOM 
//* without dom we can't update,delete and create the html element 


//! types of dom 
//? HTML Dom    
//? CORE DOM
//? React DOM 
//? XML DOM 

//! What is Node ? 
//* Node is an basic building block in js .

//? Types of node 

//* document node 
//* elemet node 
//* attribute node 
//* comment node
//* leaf node 
//* text node  


//! what is node ? 
//* the document is a globle object provided by browser 

//? document properties : (direct access properties)
//* Syntax : document.propertyName

//? document.titl
console.log(document.title);
document.title = "Update My Document";

//? document.body
console.log(document.body);

//? document.head
console.log(document.head);

//? document.url
console.log(document.url);

//? document.all
console.log(document.all); // HTML collections 

console.log("DOM Method in js");

//! DOM Direct Access Properties : 

//? 1 document.images
console.log(document.images);

//? 2 document.forms
console.log(document.forms);

//? 3 document.links
console.log(document.links);

//? 4 document.stylsheet
console.log(document.styleSheets);

//? 5 document.script
console.log(document.scripts);

console.log("DOM methods ");

//? 1 document.getElementById
//* The document.getElementById() methods is used to access the html element by their specific id.
//! Syntax : document.getElementById("id");
//! Return Type : HTML element or null
let heading = document.getElementById("head");
console.log(heading);

//! style attribute : 
heading.style.color = 'red';
heading.style.backgroundColor = 'yellow';

//? 2. document.getElementByClassName():
//* The Document .getElementByClassName() Method is used to access the multiple HTML element by their by their specific class name .
//! Syntax : document.getElementByClassName("class-name");
//! Return Type: HTMLCollection

//! HTML Collection
//* The HTML Collection or group of HTML element only is called is called as HTML Collection.
//* It will look like an array but it is not an actual or true array

let paras = document.getElementsByClassName("para")
console.log(paras);

//! converting to html Collection into the array : 
//! 1. array.form():

let convertedHTMLCollection = Array.from(paras)
console.log(convertedHTMLCollection);
console.log(Array.isArray(convertedHTMLCollection)); //true
convertedHTMLCollection.forEach((para,index)=>{
    // if(index == 1){
    //     para.style.border = "2px solid blue"
    // }
    para.style.border = "2px solid blue";
});

//! By Using Spread Operator ...varName
let htmlToArrayBySpread = [...paras];
console.log(htmlToArrayBySpread);

htmlToArrayBySpread.forEach((paras)=>{
   paras.style.color = 'teal';
});

//? 3. document.getElementByTagName() : 
//* The documen .getElementByTagName() methods is used to access multiple html element by their name specific tag name 
//? Syntax : document.getElementByTagName('tagame');
//* Return Type:HTMLCollection 
let allpara = document.getElementsByTagName('p');
console.log(allpara);

document.getElementsByName

//? 4.document.getElementsByName
//* The Document.getElementsByName() methods is used to access the all matching element by their specific css selectors.
//! Syntax : document.getElementsByName("name-value")
//! Return Type : NodeList[]

//! What is NodeList ? 
//* The NodeList is a Collection different Types of node such as text node , element node , attribute node ,comment node , getElementByClassName
//* By Document NodeList support the forEach() methods but does'nt support the map() method.

let genders = document.getElementsByName('gender')
console.log(genders);
console.log(Array.isArray(genders)); //False

genders.forEach((gender,index)=>{
    if (index == 0){
        gender.checked = true;
    }
});

// genders.map(() = > {
// })

//? 5. document.querySelector ():
//* The  document.querySelector () method is used to access the first matching element by their by their specific css selectors
//! Syntax : document.querySelector("css-selectors")
//! Return Type : First matching css -element

let classPara = document.querySelector(".para");
console.log(classPara);

//? 6 document.querySelectorAll():
//* The document.querySelectorAll () Method is used to accesss the all matching element by their specific css selectors.
//! Syntax : document.querySelectorAll('css-selector')
//! Return Type : NodeList[]

let allParaEle = document.querySelectorAll(".para");
console.log(allParaEle);

//* Final Summary : 
//? 1. HTML Collection -> getElementByClassName() & getElementByTagName()
//? 2. Node List - > getElementsByName() & querySelectorAll()







