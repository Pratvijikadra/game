console.log("welcome to javascript");
console.log("PRATVI");
console.log("I love javascript");
/* variable */
name="pratvi jikdra";
age=18;
x=null;
y=undefined;
console.log(name,age);
console.log(null);
console.log(y);
/*boolean*/
isFollow=false;
console.log(isFollow);

/* let,const & var  keyword
 let=declare the variable(cannot be redclare but can be pdate. block scope) (used)
 var=declare the variable (can be re declared and update. global scope)
 const=cannot be redeclare or update.block scope(used)

 block means code in {     }
 
 ES6=ecma script(javascript new standard)*/

let name1="pratvi";
console.log(name1);

var age=18;
console.log(age);

const age1=24;
console.log(age1);

const a=10;
console.log(a);

let b;
console.log(b);

{
    let c=5;
    console.log(c);
}

{
    let c=10;
    console.log(a);
}

/* data types in js

primitive(7)       nonprimitive(objects)

primitive=number,string,boolean,undefined,null,bigInt,symbols
non=object(Array,function)
*/
/* object*/
const student={
name:"chintan",
age:11,
mark:599,
isPass:true
};

student["age"] = student["age"] + 1;
student["name"]="drashti";
/* check in console

student

typeof

student.name
student["name"] */

console.log(student.mark);
console.log(student["mark"]);














