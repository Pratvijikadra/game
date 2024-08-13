// function = block of code that perform a specific task, can be invoked whenever needed.
function myfunction() {
    console.log("hello function in js");
    console.log("welcome to javascript function");
}
myfunction();

function myFunction(msg) {   //parameter ->input
  console.log(msg);
}

myFunction("I love js");  //argument

//function ->2 number , sum

function sum(a,b) {
    console.log(a+b);
}
sum(1,15);

//return
function sum1(x,y) {  //local variable -> block scope
    s=x+y;
    return s;
}
let val=sum1(3,4);
console.log(val);

//Arrow function= compact way of writing a function  =>

const arrowSum=(a,b)=>{
    console.log(a+b);
};
arrowSum(10,41);

const printHello = () => {

};

console.log("printHello");

// practice = create a function using the "function" keyword that takes a string as an argument & return the number of volwels(a,e,i,o,u) in the string.

function count(str) {

    let c=0;
    for(const char of str){
        console.log(char);
        if(char === "a" || char === "i" || char ==="o" ||char==="u" ||char==="e" ){
            c++;
        }
    }
    console.log(c);
    return c;
    
}
count("Hello");
count("my name is pratvi");

//practice = create an arrow function toperform above task

const count1=(str) => {
    let c=0;
    for(const char of str){
        console.log(char);
        if(char === "a" || char === "i" || char ==="o" ||char==="u" ||char==="e" ){
            c++;
        }
    }
    console.log(c);
    return c;
    
} 
count1("hiii");
count1("pratvi");

/* forEach loop in arrays
arr.forEach(callBackFunction)
callbackfunction : here, it is a function to execute for each element in the array
*A callback is a function passed as an argument to another function */

let arr=[1,2,3,4,5];
arr.forEach(function printVal(val) {  // value at each idx 

    console.log(val);
})

//arrow
let arr1=["abc","xyz","pqr"];
arr1.forEach((val)=> {
    console.log(val.toUpperCase());
})

let arr2=[123,334,567,678];
arr2.forEach((val,idx,arr)=> {
    console.log(val,idx,arr);
})

//HOF,HOM=higher order function/method  
// that either take another function as a parameter inside them or they return another function as their output

/* practice = for a given array of number ,print the square of each vale using the forEach loop */

let array=[1,2,3];
array.forEach((val)=> {
console.log(val*val);
});

/* some more array methods
map = creates a new array with the result of some operation.
the value its callback return are used to from new array
arr.map(callbackFnx(value,index,array))  */

let nums=[10,20,30];


nums.map((val) =>{
console.log(val);
});

let n=[100,200,300];
let newArr=n.map((val) =>{
    return val;
});
console.log(newArr);

// filter = create a new array fo element that gine true for a condition/filter.

let ar=[1,2,3,4,5,6,7,8,9];
let evenar=ar.filter((val) =>{
return val%2==0;
});
console.log(evenar);

//reduce = perform some operation & reduce the array to a single value.it return that single value.

let p=[1,2,3];
const output=p.reduce((res,curr) =>{
return res+curr;
});
console.log(output);

const op=p.reduce((prev,curr)=>{
return prev>curr ? prev:curr;
});
console.log(op);

/* practice 1.we are given array of marks of students.filter out of the marks of student that scored 90+. */

let stud=[99,56,78,90,93,89];
const student=stud.filter((val)=>{
return val>90;
});
console.log(student);

/* 2. take a number n as input from user. create an array of number from 1 to n.
use reduce method to calculate sum of all number in the array.
use the reduce method to calculate produce of all number in the array. */

let no=prompt("enter a number:");

let aar=[];
for(let i=1; i<=no; i++)
{
    aar[i-1]=i;

}
console.log(aar);
//sum

let t=[2,4,6];

let total=t.reduce((prev,curr)=>{
return prev+curr;
});

console.log(total);

//factorial


let fa=aar.reduce((prev,curr)=>{
return prev*curr;
});

console.log(fa);



