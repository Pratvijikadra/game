console.log("Hello");

alert("My Website");

console.dir(document.body);
console.log(document.body);

document.body.style.background="red";
// used dynamically changes -> DOM

// selecting with id

let heading=document.getElementById("heading");
console.dir(heading);
console.log(heading);

// selecting with class

let c=document.getElementsByClassName("head");
console.dir(c);
console.log(c);

// selecting with tag

let paras=document.getElementsByTagName("p");
console.dir(paras);
console.log(paras);

//query selector

let  elements=document.querySelector("p"); //first element
console.dir(elements);
console.log(elements);

let allElements=document.querySelectorAll("p"); // all element
console.dir(allElements);
console.log(allElements);


let ele=document.querySelector(".head");
console.dir(ele);
console.log(ele);

let elem=document.querySelector("#heading");
console.dir(elem);
console.log(elem);

// tagName

let button=document.querySelector("#btn");
console.dir(button);

console.log(button.tagName);

console.log(elements.tagName);

// innerText

console.log(document.querySelector("div").children);

let div=document.querySelector("div");
console.dir(div.innerText);

//innerHTML

console.dir(div.innerHTML);  //get

console.log(div.innerText="hii");  // set 

console.dir(div.innerHTML="<div> inner div</div>");

let h=document.querySelector("h5");

console.log(h);

console.dir(h.innerText="about fruitsnames");
console.dir(h.innerHTML="<i>about fruits </i>");

//text conent

let he=document.querySelector("h7");
console.log(he);

console.dir(he.textContent);











