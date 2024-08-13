//DOM PART-2     
    /*  DOM Manipulation

    => attribute
    - getAttribute(attr)  
    - setAttribute(attr,value) 

    =>Style
    -node.style   */

    
  let div=document.querySelector("div");
  console.log(div);  
// get
  let id=div.getAttribute("id");
  console.log(id);

  //set

  let para=document.querySelector("p");
  console.log(para.setAttribute("class","NewClass"));

  //style
  let div1=document.querySelector("div");
   console.log(div1.style);

   div.style.backgroundColor="pink";
   div.style.fontSize="25px";
  // div.innerText="Hello"; 

   /* =>insert element =let el=document.createElemtn("div")

   -> node.append(el)    adds at the end of node(inside)
   -> node.prepend(el)    adds at the start of node(inside)
   ->node.before(el)      adds before the node(outside)
   -> node.after(el)       adds after the node(outside)

   => delete Element

   -> node.remove() */

   let newbtn=document.createElement("button");
   newbtn.innerText="Click me";
   console.log(newbtn);

   let div2=document.querySelector("div");
   div2.append(newbtn);
   div2.prepend(newbtn);
   div2.before(newbtn);
   div2.after(newbtn);

let newheading=document.createElement("h1");
newheading.innerHTML = "<i>hii, i am new</i>";

document.querySelector("body").prepend(newheading);

let p=document.querySelector("p");
p.remove();

