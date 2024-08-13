/* practice 

1. create a new button element. give it text "click me", background color pink & text color white.
insert the button as the first element inside the body tag. */

let btn=document.createElement("button");

btn.innerText="Click me";
btn.style.backgroundColor="pink";
btn.style.color="white";
document.querySelector("body").prepend(btn);

/* 2. create a <p> tag in html, give it a class & some styling.
now create a new class in css and try to append this class to the <p> element.

did you notice, how you overwrite the class name when you add a new one?
solve this problem using classList.  */

let  p=document.querySelector("p");
//console.log(p.getAttribute("class"));
//p.setAttribute("class","newClass");
console.log(p.classList.add("newClass"));
console.log(p.classList);