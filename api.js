/* fetch API

the fetch API proides an interface for fetching (sending / receiving) resources.

it uses Request and Response objects.

the fetch() method is used to fetch a resource (data).

let promise=fetch(url,[options])    */

const URL = "  https://api.thecatapi.com/v1/images/search?limit=10";
const factpara=document.querySelector("#fact");
const btn=document.querySelector("#btn");




const getFacts=async ()=>{
    console.log("getting data.......");
    let response = await fetch(URL);
    console.log(response);  // JSON format 
    let data=await response.json();
    factpara.innerText=data[0].url;
};

btn.addEventListener("Click",getFacts);
console.log(getFacts());

/* understanding Terms

=> AJAX is Asynchonous JS & XML 
=> JSON is javascript object notation 
=> json() method : return a second promise that resolves with the result of parsing the response body text as JSON.
                   (input is JSON , output is JS object).  */


/* Requests & response

HTTP verbs
Response Status code

*HTTp response headers also contains details about the responses , such as content type, HTTP status code etc.  */



