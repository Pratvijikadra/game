// Array 
let marks=[99,98,89,79,90,78];
console.log(marks);
console.log(marks.length);


let colors=["pink","red","blue","yellow"];
console.log(colors);

//array indices

console.log(marks[3]);

console.log(marks[1]=97);
console.log(marks);

// string = inmutable ,you cannot change
// array= mutable , you can change

//looping over array using for loop
for(let idx=0; idx<colors.length; idx++){
    console.log(colors[idx]);
}

// for of loop
for(let el of colors){
    console.log(el);
}

/* practice = for a given array with marks of students ->[85,97,44,37,76,60]
find the avrage marks of the entries class  */

let mark=[85,97,44,37,76,60];
let sum=0;
for(let val of mark){
    sum+=val;
}
let avg=sum/mark.length;
console.log(`average marks of the= ${avg}`);
    console.log(sum);

/* practice = for a given array with prices of 5 items ->[250,645,300,900,50]
all items have an offer of 10% OFF on item.change the array to store final price after applyinf offers  */

let item=[230,645,300,900,50];
for(let i=0; i<item.length; i++){
    let offer=item[i]/10;
    item[i]-=offer;
}
console.log(item);

//array method  =puch(),pop(),tosString()

let push=colors.push("black");
console.log(colors);
console.log(push);

let pop=colors.pop();
console.log(pop);
console.log("pop item ",pop);
console.log(colors);

console.log(marks.toString());

// concat(), unshift():add to start , shift():delete from start & return

let fruit=["mango","banana","gvava"];
let food=["chips","pizza"];

let concat=fruit.concat(food);

console.log(concat);


let val=fruit.shift();
console.log("deleted",val);

let val1=fruit.unshift("berry");
console.log("added",val1);
console.log(fruit);

//slice():return a piece of the array  , splice():change original array(add,remove,replace)

console.log(fruit.slice(1,3));

let n=[1,2,3,4,5,6,7,8,9,0];
console.log(n.splice(2,3,11,12));
console.log(n);

/*practice = create an to companies -> 
remove the first company from array
remove the any one companie in center and add in its place
add amazon at the end */

let companie=["bloomberg","mocrosoft","uber","google","IBM","netflix"];

let rm=companie.shift();
console.log(rm);

let rmv=companie.splice(2,1,"ola");
console.log(rmv);
console.log(companie);

let add=companie.push("Amazon");
console.log(add);
console.log(companie);