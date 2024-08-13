/* prototypes in js

A javacsript object is an entity having state and behaviour(property,method)
js object have a special property called prototype.
we can set prototype using__proto__
*if object & prototype have same method,object's method will be used.  */

const student={
    name:"drashti jikadra",
    marks:98.99,
    printMarks:function() {
        console.log("marks=",this.marks);  //student.marks

    },

};

console.log(student.printMarks(),student.name);

console.log(student.tostring);

const emp={
    calcTax1(){
        console.log("tax rate is 10%");
    },

    calcTax2:function(){
        console.log("tax rate is 10%");
    }
};
console.log(emp.calcTax1(),emp.calcTax2());
//in emp both are right way to define function


const chintan={
    salary:1000000,
    calcTax1() {
        console.log("tax rate is 30%");
    },
};

chintan.__proto__=emp; //use prototype -make one function and use any object
console.log(chintan.calcTax1());

/* classes in js

class is a program code template for creating objects.
those object will have some state(variable)& some behaviour(finction) inside it.
*/

class tataCar{

    constructor() {
        console.log("creating new object"); //if you not create it automatically 
    }
start() {
    console.log("start");
}
stop() {
console.log("stop");
}

setBrand(brand) {
    this.brandName=brand;
}
}

console.log(tataCar);

let BMW=new tataCar();

BMW.setBrand("bmw");

console.log(BMW.start());

/* constructor() method is:
-> automatically invoked by new
->initialize object  */


/* inheritance = is passing down propert& method from parent class to child class.

if child & parent have same method,
child metho's will be used.[method overriding]  */


class parent{
    hello(){
        console.log("hello");
    }
}

class child extends parent{}

let obj=new child();

console.log(obj);
console.log(obj.hello());

class person{
    constructor(){
        this.species="homo sapiens";
    }
    eat(){
        console.log("eat");
    }
    sleep(){
console.logl("sleep");
    }
    work(){
        console.log("do nothing");
    }
    
}

class engineer extends person{
    work(){
        console.log("solve problem , build something.");
    }
}

let pratviobj=new engineer();

console.log(pratviobj.eat(),pratviobj.work());

/*super keyword is used to call the constructor of its parent classs to access the paren's property and method.
*/

class person1{
    constructor(name){
        console.log("enter parent  constructor");
        this.species="homo sapiens";
        this.name=name;
    }
    eat1(){
        console.log("eat");
    }
    sleep1(){
console.logl("sleep");
    }
    work1(){
        console.log("do nothing");
    }
    
}

class engineers extends person1{
    constructor(name,branch){
        console.log("enter child constructor");
        super(name);  // to invoke parent class constructor
this.branch=branch;
console.log("exit child constructor");
    }
    work1(){
        console.log("solve problem , build something.");
    }
}

let pratviObj=new engineers("pratvi","chemical engineers");

console.log(pratviObj);

/* practice -1. 
you are creating a website for your colllege. create a class user with 2 property , name,email.
it also has a method called viewData() that allow user to view website data.

2. create  a new class called Admin which inherits from user.
Add a new method called editData to admin taht allow it to edit website data.  */

// 1.

let data="secrete information";

class user{
    constructor(name,email){
this.name=name;
this.email=email;
    }
    viewData(){
        console.log("website data=",data);
    }
}

let student1=new user("pratvi","p123@gamil.com");
let student2=new user("drashti","d456@gmail.com");

console.log(student1,student2);

console.log(student1.viewData);

let teacher=new user("janvi","jan45@gamil.com");
console.log(teacher.viewData);

// 2.

class Admin extends user{
    constructor(name,email){
        super(name,email);
    }
editData(){
    data="some new value";
}
}

let admin1=new Admin("chintan","chintan111@gmail.com");

console.log(admin1);

console.log(admin1.editData());
console.log(data);


// error handling = not related to class or object but another topic

let a=5;
let b=10;
let c=a+b;
console.log("a=",a);
console.log("b=",b);
console.log("a+b=",c);
console.log("a+b=",c);
try{
    console.log("a+b=",d); 
}catch(err) {
console.log(err);
}
//console.log("a+b=",d);  //error = d variable is not exist
console.log("a+b=",c);
console.log("a+b=",c);

/* if you feel inside any line or code error will br arive 
you simply write your code into the try block
and catch the err using the catch block ->it display error definition  */






