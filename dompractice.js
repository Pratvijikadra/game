/* practice 1.
create a H2 heading element with text - "hello javascript". 
Append "from Apna college students" to this text using js.
*/

let h2=document.querySelector("h2");
console.dir(h2.innerText);

h2.innerText=h2.innerText+" from apna college";

/* practice 2.
create 3 divs with common class name -"box".
Access them & add some unique text to each of them. */

/*   let div=document.querySelectorAll(".Box");

console.log(div[0].innerText="new uniuqe value 1");
console.log(div[1].innerText="new uniuqe value 2");
console.log(div[2].innerText="new uniuqe value 3");  */

//or

let divs=document.querySelectorAll(".Box");

let idx=1;
for(div of divs){
    div.innerText=`new unique value  ${idx}`;
    idx++;
}



