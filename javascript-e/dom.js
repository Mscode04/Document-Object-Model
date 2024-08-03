//  What is e 
// function(e)
// e is not a keyword  just a name 
// we can use another namd insted of e 
// the paramenter give all details of that event
// it is an object
 const head=document.querySelector("#head")
head.addEventListener("click",function(e){
    console.log(e);
    e.target.innerHTML = "hello shaheen"
}) 

const int=document.querySelector("#int");
int.addEventListener("keyup",myfun)
function myfun(e){
    console.log(e);
    console.log(e.target.value);
}