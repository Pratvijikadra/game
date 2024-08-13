/*ASYNC-AWAIT 

async function always return a promise.

async function myFunc(){..}

await pauses the execution of its surrounding async function until the promise is settled.   */

async function hello(){
    console.log("HELLO");
}

console.log(hello());

// use await with always async

function api() {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("weather data");
            resolve(200);
        },2000);
    });
}

async function getWeatherData(){
    await api(); //1st
    await api(); //2nd
}

console.log(getWeatherData());


//next ex

function getData(dataId,getNextData) {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("data", dataId);
            resolve("success!")
            
        },4000);
        
        });
    }
    
    //async-await

    async function getAllData() {
        await getData(1);
        await getData(2);
        await getData(3);
        
    }
   
    console.log(getAllData());

    /*  IIFE : immediately invoked function expresson

    IIFE is a function that is called immediately a soon as it is define.  

    (function () {
        ....
    }) ();

    (()=>{
        ...
    })();

    (async ()=>{
        ....
    })();   */

    (async function(){
        console.log("getting data1....");
        await getData(1);
        console.log("getting data2....");
        await getData(2);
        console.log("getting data3....");
        await getData(3);
    })();

    // we connot need call fuction ,it automaticaaly invoked 

    

