//variable = A container that stores a value.
// IT BEHAVES AS IF IT WAS THE VALUE CREATED

// 1. declaration    let x;
// 2. assignment x= 100;
// let x = 100;
// console.log(x); // 100 will be desplayed in the console

// // Data Types

// // 1.Numbers Integers and Floats
// let age =25;
// let price = 10.99;
// console.log(price);
// console.log(`You are ${age} years old.`);
// //2.String
// //to create strings you can use either single quotes'' 0r double"" 
// // even backticks``
// let firstname ='Fredrick';
// let email = "fred124@gmail.com"
// console.log(`you name is ${firstname}`);
// //3.Booleans
// //either true or false
// let onlue = true;
// let forsale = true;
// console.log(onlue);

// console.log(`Is this car for sale ${forsale}`)

let fullname = "Bro Code";
let age = 25;
isStudent = false;
let para1 = document.getElementById("p1").textContent = `Your name is `;
let para1child=document.getElementById("p1").appendChild(document.createElement("strong"));

let para2 =document.getElementById("p2").textContent = `your age is `;
let para2child=document.getElementById("p2").appendChild(document.createElement("strong"));

let para3 =document.getElementById("p3").textContent = `are you a student `;
let para3child=document.getElementById("p3").appendChild(document.createElement("strong"));

para1child.textContent = fullname;
para2child.textContent = age;
para3child.textContent = isStudent;



