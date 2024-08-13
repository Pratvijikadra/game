//  arithmetic operator
let a=10;
let b=20;
let c=a+b;
let d=a-b;
let e=a*b;
let f=a/b;

console.log("a+b=",c);
console.log("a-b=",d);
console.log("a*b=",e);
console.log("a/b=",f);

// modulus (%)
let p=5;
let r=16;
let x=p%r;
console.log("p%r=",x);
//exponentiation 
let j=5;
let k=2;
let t=j**k;
console.log("j**k=",t);

//unary operator  -- or ++

let g=5;
let h=2;

console.log("g=",g,"h=",h);
g++;//++g
console.log("g=",g);
h--;//--h
console.log("h=",h);

// assignment operatoe  =   += -= *= %= **=

a += 4; //a=a+4
console.log(a);


//comparison operator  == !=  ===(equal to &type)  !== > ,>=,<, <=

console.log(a==b);
console.log(a!=b);
console.log(a!==b);
console.log(a<b);
console.log(a>b);

//logical operator  &&  ||  !

let cond1 = a<b;
let cond2 = a == 11;
console.log(cond1);
console.log(cond2);
console.log(cond1 && cond2)
console.log(!(a>b));

//conditional statement       if  , if..else ,  else-if

// if
let age=25;
if(age>18){
    console.log("you can vote");
}
// if-else
let age1=5;
if(age1>18){
    console.log("you can vote");
}
else

{
    console.log("you can't vote");
}

//else-if

let n=-5;
if(n>0)
{
    console.log("positive");
}
else if(n<0){
    console.log("nagetive");

}
else{
    console.log("zero");
}

// ternary operator     condition?true output:false output

let num=15;
let result=num>=18?"adult":"not adult";

console.log(result);

//you can switch also

const color=3;
switch(color){
case 1:
    console.log("blue");
    break;
    case 2:
        console.log("pink");
        break;
        case 3:
            console.log("yellow");
            break;
            default:
                console.log("not valid");
                break;
}


/* practice 1
 get user to input a number using prompt("Enter a number:"). check number is a multiple of 5 or not */
  
 alert("hello");  //used for pop up mesage

let u=prompt("hello"); //same as alert but you can input form user also
 console.log(u);

 let number = prompt("Enter a number:");
 
 if(number%5===0){
    console.log(number,"is multiple of 5");}
    else {
console.log(number,"is not a multiple of 5");
    }
 

    /* practice 2  
    write a code which can give grades to student according to their scores:
    80-100,A
    70-89,B
    60-69,C
    50-59,D
    0-49,F  */

    let score =prompt("Enter your score(0-100):");
    let grade;
    
    
    if( score>=80&&score<=100){
        grade="A";

    }
    else if(score >=70 &&score<=89){
        grade="B";
    }
    else if(score>=60 &&score>=69){
        grade="C";
    }
    else if(score<=50&&score>=59){
        grade="D";
    }
    else{
        grade="f";
    }
    console.log(grade);