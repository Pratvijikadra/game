//Events in js

/* the change in the stste of an object is known as an event
Events are fired to notify code of "interesting changes" that may affect code execution.

-> mouse event
->keyboard event
-> form event
->print event & many more  */

/* Event Handling in js

node.event=()=>{

}  */

let btn = document.querySelector("#btn");

btn.onclick = () => {
    console.log("btn was clicked");
    alert("button clicked");
    let a=25; 
    a++;
    console.log(a);
};

let div = document.querySelector("div");
div.onmouseover = () => {
    console.log("you are inside div");

};

/* event object 
it is an special object that has details about the event.
all event handlers have access to the event object's properties and methods.

node.event=(e)=>{

} */
let btn1=document.querySelector("#btn1");
btn1.onclick=(e) => {
    console.log(e);
    console.log(e.type);
    console.log(e.target);
console.log(e.clientX,e.clientY);
}

/* Event Listners
node.addEventListner(event,callback)
node.removeEventListener(event,callback)
*note:the callback reference should be same to remove  */

let btn2=document.querySelector("#btn2");

btn2.addEventListener("click", (evt)=>{
    console.log("btn2 was clicked-1");
   // console.log(evt);
    //console.log(evt.type);
});

const b2=() => {
btn2.addEventListener("click", ()=>{
    console.log("btn2 was clicked-2");

})};

btn2.addEventListener("click", ()=>{
    console.log("btn2 was clicked-3");
    
});

btn2.removeEventListener("click",b2);


//practice 
/* 1. create a toggle button that changes the screen to dark mode when clicked & light mode when clicked again */

let modebtn=document.querySelector("#b");
let body=document.querySelector("body");
let currmode="light";
modebtn.addEventListener("click",()=>{
//console.log("you are trying to change Mode.");
if(currmode==="light"){
    currmode="dark";
   /* document.querySelector("body").style.backgroundColor="black";*/ 
   body.classList.add("dark");
   body.classList.remove("light");

}
else
{
    currmode="light";
    /*document.querySelector("body").style.backgroundColor="white";*/
    body.classList.add("light");
    body.classList.remove("dark");

}

console.log(currmode);
});



