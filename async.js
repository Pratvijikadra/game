/*  New Topic 

async await >> promise chains >> callback hell

sync in js
*Syncronous = means the code runs in a particular sequence of instructions given in the program.
each instruction waits for the previous instruction to complete its execution.
*/

//ex

console.log("one");
console.log("two");
console.log("three");

/* Asynchonous = due to synchonous programming , somethimes imp instruction get blocked due to some previous instruction,
which causes a delay in the UI.

asynchonous code execution allow to execute next instruction immediately and doesn't block the flow. */

//ex
function hello(){
    console.log("hello");
}
setTimeout(hello,2000);  //timeout: 2s=2000ms
// or

console.log("one");
console.log("two");

setTimeout(() => {
console.log("pratvi");
},4000); // timeout

console.log("three");
console.log("four");

/* Callbacks =  a callback is a function passed as an argument to another function  */
//ex

function sum(a,b) {
    console.log(a+b);
}

function cal(a,b,sumCallback){
    sumCallback(a,b);
}

cal(1,2,sum);

/* Callback Hell = nested callbacks stacked below onee another forming a pyramid structure.
(pyramid of doom)
this style of programming become difficult to understand & manage.  */

function getData(dataId,getNextData) {
    // 2s
    setTimeout(() => {
        console.log("data", dataId);
        if(getNextData){
            getNextData();
        }
        
    },3000);
    
    }

    // callback hell
getData(3, () => {
    console.log("getting next data");
    getData(2,()=>{
        console.log("getting next data");
        getData(5,()=>{
            console.log("getting next data");
            getData(89);
        });
    });
});

console.log(getData(123));
console.log(getData(456));
console.log(getData(1));

/* solve to callback hell problem used PROMISES   
PROMISES = it is for "eventual"* completion of task. 
it is an object in js.
it is a solution to callback hell.

let primise= new Promise((resolve,reject) =>{...})  //function with 2 handlers

*resolve & reject are callbacks provides by js  */

let  promise=new Promise((resolve,reject)=>{
console.log("i am a promise");
resolve("success");
})
console.log(promise);

let  promise1=new Promise((resolve,reject)=>{
    console.log("i am a promise");
    reject("some error has occurred.");
    })
    console.log(promise1);
    
    //promise has three state = pending , resolving , reject

//when we fetch API it return like this
let result=getdata();
function getdata(dataid,getnextdata) {
    return new Promise((resolve,reject)=>{
        // 2s
    setTimeout(() => {
        console.log("data", dataid);
        resolve("success");
        if(getnextdata){
            getnextdata();
        }
        
    },5000);
});
    }

    console.log(getdata(333));
    console.log(result);
    
    // in generally in programming we cannot create a promise 
    //it will give me as a result and after wlii operate some operation

    /* A js promise object can be:
    -> pending: the result is undefined.
    -> resoived: the result is a value(fullfilled).      resolve(result)
    -> rejected: the result is an error object.          reject(error)

    *promise has state(pendind, fullfilled)& some result(result for resolve & error for reject).   */

    /* for how to use promises

    .then() & .catch()

    promise.then((res)=>{...})
     promise.catch((err)=>{...})  */

     const getPromise =() =>{
       return new Promise((resolve,reject)=>{
            console.log("i am a promise!!!!!");
           // resolve("success");
            reject("error");
        });
     };
    //for resolve
     let promise2=getPromise();
     promise2.then((res)=>{
        console.log("promise fullfilled!",res);
     });

// for rejected
     promise2.catch((err)=>{
        console.log("rejected",err);
     })

/* PROMISE CHAIN = means use second then in one then */

function asyncFunc1() {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("daaaataaaaa  1");
           resolve("sssuuuuccceeesss");
        },7000);
        });
}



function asyncFunc2() {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("daaaataaaaa  2");
           resolve("sssuuuuccceeesss");
        },7000);
        });
}

console.log("fetching daaaataaaa   1.......");

let p1=asyncFunc1();
p1.then((res)=>{      //use this
console.log(res);

console.log("fetching daaaataaaa   2.......");
asyncFunc2().then((res)=>{    // or this
    console.log(res);
});

})





