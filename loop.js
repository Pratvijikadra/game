// loop

/* for loop */

for (let i=1;  i<=5; i++)
{
    console.log(" for loop demo");
}
console.log("loop has ended");

// to calculate sum of first n numbers

let sum=0;
for(let i=1; i<=5; i++){
    sum=sum+i;
}
console.log("sum=",sum);
console.log("loop has ended");

for (let n=1;  n<=5; n++)
{
    console.log("n=",n);
}
console.log("loop has ended");

// infinite loop

//while loop
 
let j=1;
while(j<=10)
{
    console.log("j=",j);
    console.log("hello");
    j++;
}

// do while loop

let a=1;
do{
    console.log("loop");
    a++;
}while(a<=5);

// for-of loop , for-in
let str="pratvi";
let size=0;
for(let i of str){   //iterator -> character
    console.log("i=",i);
    size++;
}

console.log("string size=",size);

//for-in

let student={
    name:"pratvi",
    age:18,
    cgpa:7.5,
    isPass:true
};

for(let key in student){
    console.log("key=",key,"value=",student[key]);
}

// practice=  print all even number from 0 to 30.
for (let num=0; num<=10; num++){
    if(num%2==0){
        console.log("num=",num);
    }
}

// practice2= create a game where you start with any random game number. ask the user to keep guessing the game number untile the user enters correct value.
/*  let gameNum=25;
let userName=prompt("guess the game number=");
console.log(userName);
while(userName !=gameNum){
userName=prompt("you entered wrong number.guess again:");
}
console.log("congratulation, you entered the right number");     */


// string

let string="javascript";
let string2='hello';

console.log(string);
console.log(string2.length);
console.log(string[0]);
console.log(string2[1]);

//tempalte literals= a way to have embedded expression in strings  ex.  ` this is `
let specialString=`this is a template`;
console.log(specialString);

let obj={
    item:"pen",
    price:10,
};
let output=`the cost of ${obj.item} is ${obj.price} rupees`;
console.log(output);

//string interpolation    `string text ${expression}string text`

let s=`${1+2+3+4+5}`;
console.log(s);

//    /n for new line

console.log("My name is \n pratvi");
console.log("hello \t \t pratvi");

//string method

let r="ganesha";
console.log(r.toUpperCase());

let p="ganesha";
console.log(p.toLowerCase());

let q="krishna";
let d=q.toUpperCase();
console.log(d);

let trim="              hiiiiiiii         ";
console.log(trim.trim());

let s1="0123456789";
console.log(s1.slice(2,5));

let str1="jay";
let str2="ganesha";
let result="my friend is "+str1.concat(str2);
console.log(result);

console.log(str1.replace('y','i'));
console.log(str2.charAt(3));

/*practice =  prompt the user to enter their full name . generate a username for them based on the input.
start username with @, followed by their full name and ending with the full name length */

let fullName=prompt("enter your fullname without space");
let userName ="@" +fullName+fullName.length;
console.log(userName);