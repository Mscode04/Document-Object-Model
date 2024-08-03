// event bubbling 
// when we click a child then automaticly the parent aslo chiked
// to refue this issue we use a method 
//  e.stopPropagation()
const father=document.querySelector(".father");
const child=document.querySelector("#child");
child.addEventListener("click",function(e){
    console.log("click-child");
    e.stopPropagation();  //solve
});
father.addEventListener("click",function(){
    console.log("click-father");
});

