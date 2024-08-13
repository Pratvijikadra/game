/* What is DOM?

when a web page is loaded, the browser creates a DOCUMENT OBJECT MODEL (DOM) of the page.

                       window
                         |
                     Document
                         |
                       html
                       |
        |                                       |
      head                                     body
       |                                         |
|     |     |      |                          |         |
meta  meta  title  link                     div        script
                                             |
                                |      |       |       |
                               img     h1      p       di          */
                               
 /* inspect-> write Window->enter-> document = available all html code
 
 or print window.document 
 
show method&property  console.dir(window.document) =used to print object 
  
HTML can access in js using window -> document

HTML ko js ke under acess karne ka tarika he DOM  */                              

// see the web.js file to dom demo

/*  DOM Manipulation

1.  selecting with id    (acess using #)
document.getElementById("Myid")

2. selecting with class     (acess using .(dot))
documnet.getElementByClassName("my class")

3. selecting with tag   
document.getElementByTagName("p")

*/

/* DOM Manipulation 

    Query selector

    document.querySelector("myid / myclass / tag") 
    return first element

    document.querySelectorAll("myid / myclass / tag")
    return a NodeList    */


    /* PROPERTIES 

    ->  tagName : return tag for element nodes
    ->  innertext : return the text content of the element and aa its children
    ->  innerHTML : return the plain text or HTML conetnt in the element
    ->  textConent : return textual content even for hidden elements 

    */

  