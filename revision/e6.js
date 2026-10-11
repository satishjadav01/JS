console.log("ES6 Concepts : ");

//! ES6 concepts : 
//* ES stand for ECMA SCRIPT which was released in the year 2015
//* ES6 was majar update in javascript history
//* They have introduce some important features such as :

//? 1.let and const variable 
//? 2. Arrow Function (Fat-Arrow Function)
//? 3. Symbol()-> Primitive Datatype
//? 4. Function with Deafult Parameter
//? 5. Destructuring 
//? 6. Spread Operator & Rest Parameter
//? 7. Modual
//? 8. Promise
//? 9. asnyc and await
//? 10. class
//? 11. String Template Literal (backticks)

//! 4.Function With Deafult Parameter:
//* The Parameter Which is passed inside the function defination with Deafult values is called a function with Deafult Parameter.

function greet(name ="Guest") {
    console.log(`Hello ${name},How Are You ? `);
}
// greet("Dhruv") // Hello Dhruv,How Are You ? 
greet() // Hello Guest,How Are You ?

//! 5. Destructuring 
//* Destructuring means divide or breaking down big-structure into small values (variable) for easy use or access. we can perform Destructuring for Array and object

//? 1.Array Destructuring
let mixArray = [10,
    "john",
    true,
    null,
    undefined,
    function(){
        console.log("This is funtion");
    },
    [30,40,50],
];
//! Traditional way to access the array element:
console.log(mixArray[0]);

//! Destructuring of an array:
let [a,b,c,d,e,f,g] = mixArray;
console.log(a);
console.log(b);
console.log(g);

//! Again we are Destructuring : 
let [x,y,z] = g;
console.log(x);

// console.log(f);
// console.log(e); // {name:'unknown',age:'immoratal'}
// console.log(e.name);
// console.log(e.age);

//? 2.Object Destructuring :

//* important note : when you are Destructuring the object ,you must use the same keyname of an object inside the Destructuring.

let employee = {
    eName : "Dhruv Patel",
    eAge : 23,
    ePakage:"3LPA",
    eGender : "Male",
    eSkill : ["SQL","WebTech","Python","Skill"],
    eAddress:{
        eCity : 'Ahm',
        ePincode:380009,
        eState:"Gujarat",
        eCountry : "India",
    },
    eCompanyDetails :{
        eDesg : "Data Migration Engineer",
        eShift : "2 to 11",
    },
    eManagerDetils:{
        eName : "Mr.X",
    },
};

//! Destructuring the employee

Object
let {
    eName,
    eAge,
    ePakage,
    eAddress,
    eSkill,
    eGender,
    eCompanyDetails,
    eManagerDetils,
} = employee;
console.log(eName);
console.log(ePakage);
console.log(eSkill);
let [p,q,r,s] = eSkill; cfs
console.log(r);
console.log(eCompanyDetails);

//! Again We are Destructuring:
let {eDesg,eShift}=eCompanyDetails;
console.log(eDesg);
console.log(eShift);

//! Alias the Key Which is Already present in the object :
let {eName:eManagerName}=eManagerDetils
console.log(eManagerName);

//! 6.Spread Operator:
//* It is used to Spread or unpack the values .
//? syntax : ...varName
let arr11 = [10,20,30,40];
let arr22 = [50,60];
let newArray = [...arr1,...arr2];
console.log(newArray);

//! Rest Parameter
//* Rest Parameter is used to collect remaining values 
//? syntax: ...varName
//* LHS Side or Inside the function defination

//! Spread Operator With Array :
let arr1 = [10,20,30];
let arr2 = [40,50];

let newArray1 = [...arr1,...arr2];
console.log(newArray1);

//! object
let obj1 = {name:"Dhruv"};
let obj2 = {...obj1,age:23};
console.log(obj2);

//! Spread Operator with function:
function getNumber(...nums) { 
    console.log(...nums);
    
}
let numbers = [10,20,30,40,50];
getNumber(...numbers);

//! Rest Parameter with Array:
let marvalHero = ["Iron Man","Hulk","Thor","Black Window","Black Parameter"];
console.log(marvalHero);

let [im,h,t, ...bacheHue]=marvalHero;
console.log(im);
console.log(h);
console.log(t);
console.log(bacheHue); 


