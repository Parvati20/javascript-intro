// variable in js

// let variable=18;
// console.log(variable);

// let variable;  // declearing a variable 
// variable = 10; // assinging a value to a variable 
// variable = 20; // reassinging  a value  to a variable 
// console.log(variable); // printing the value of a variable( out put will be 20)


//  var variable;  // declearing a variable 
// variable = 10; // assinging a value to a variable 
// variable = 20; // reassinging  a value  to a variable 
// console.log(variable); // printing the value of a variable


// const variable =5 ;  // declearing a variable 
// console.log(variable); // printing the value of a variable




// datatypes in js
// primitive 
// let number = 10.5; // number

//  let string = "hello"; 
//   console.log(string);// string 
// // Boolean=  true and false 


//  let a;
//  console.log(a); // undefined 

//  let b = null;
//  console.log (b);  // null

// we canot be modified  a  primtive data type

// let stringType = "shivansh"
// stringType[1] ="h"
// console.log(stringType);


// non primitive 
// object => (key "value")

    // let john = {
    // name:"john",
    // age :25,
    // class : 10,
    // };
    // let parvati= {
    //     name:"parvati",
    //     age :30,
    //     class : 12,
    // };
    // let supriya= {
    //         name:"supriya",
    //         age :20,
    //         class : 10,
    // };
    // console.log(parvati.name);
    // console.log(john. age);
    // console.log(supriya.class);
    


// array
// let array=[1,2,3,4,5,"6",7,8,9,];
// console.log(array);

// function
// function addition(){

// }
// console.log(addition);

//  when calling to the function

// let num = 40;
// let num2 = 20;
// function addition(){
// return num + num2;
// }
// console.log(addition()) 


//  we can modify in non primitive datatypes
// let array = [1,2,3,4,5,6,7,8,9,10];
// array[1] = "h"
// console.log(array);


// opretors  in js
//  AO => +,-,/,*,%,++,--,**;

// let a=10;
// let b=2;
// console.log(a**b);

// let a = 1;
// let b ="1";
// console.log(a+b);

// let a = "1";
// let b ="1";
// console.log(a-b);

// let a = "1";
// let b ="1";
// console.log(a+(+b));


// function anyfunc(){
//     console.log("I am callback function");
// }
// function higherOrderFunction(anyfunc){
//     console.log("I am higher order function");
//     anyfunc();
// }
// higherOrderFunction(anyfunc);



//    function callback(result){
//     return result;
// }
// function higherOrder(a,b , callback){
//     let result = a+b;
//     return callback(result);
// }
// higherOrder(1,2,callback);

// console.log(typeof NaN);
// console.log(isNaN(123));

// Array method



// shift method
// let arr=[2,3,4,5,6,7,8,9];
// arr.shift();
// console.log(arr);

// unshift method
// let arr=[1,2,3,4,5,6];
// arr.unshift(14,5);
// console.log(arr);

// pop method
// let arr=[1,2,3,4,5,7,8.89];
// arr.pop(6);
// console.log(arr);

// push method
// let arr=[1,2,3,4,5,6,7,8,9];
// arr.push("new element");
// console.log(arr);

// length proparty
// let arr=[1,2,3,4,5,6,7,8];
// console.log(arr.length);

//  delete  opretor 

// let arr=[1,2,3,4,5,6,7,8];
// delete arr[7];
// console.log(arr);

// toString method
// let arr=[1,2,3,4,5,7];
// console.log( arr.toString());

// array.at method
// let arr=[1,2,3,4,5];
// console.log(arr.at(4));

// concat method
// let arr=[1,2,3,4];
// let arr2=[1,2,3,4];
// console.log(arr.concat(arr2,[5,6,7,8,]));

// flat method
// let arr=[1,2,3,4];  // one dimensional
// let arr2=[1,4,[5,6,7,8,[1,2]]];  //multi dimensional array
// console.log(arr2.flat());

// let arr=[1,2,3,4];  // one dimensional
// let arr2=[1,4,[5,6,7,8,[1,2]]];  //multi dimensional array
// console.log(arr2.flat(2));

// Array.isArray  //it is checking the given object is array or not

// let arr2=[1, 4, [5,6,7,8,[1,2]], {},"parul"];
// console.log(Array.isArray(arr2[5]));


// let arr2=[1, 4, [5,6,7,8,[1,2]], {},"parul"];
// for(let i=0; i<arr2.length; i++){
//   console.log(Array.isArray(arr2[i]));
// }


// Array.slice()method
// let arr=[1,2,3,4];
// console.log(arr.slice(1,4));

// array splice method
// let arr=[1,2,3,4,5];  (deleting)
// arr.splice(2,1);
// console.log(arr);

// let arr=[1,2,3,4,5];
// arr.splice(2,1,"value","value2","value3");
// console.log(arr);

// join method

// let arr=["parvati","chakuli","satyashri","parul"]
// console.log(arr.join("  "));






// copywith the array

// let arr = [1,2,3,4,5,6,7,8,9];
// console.log(arr.copyWithin(1,6,8));

// //  find method


// let arr = [1,2,3,4,5,6,7,8,9];
// function callback(value){
//     return value>4;
// }
// let result = arr.find(callback);
// console.log(result);

//  inclue method


// let arr = [1,2,3,4,5,6,7,8,9];
// function callback(value){
//     return value>4;
// }
// let result = arr.includes(3);
// console.log(result);

// let arr=[1,2,3,4,5]
// console.log(arr.join("-"))

// console.log(1+true);









