function main(){
    console.log("hello")
}

// event lisners
const button=document.querySelector("#Submit")
const List=document.querySelector("#List")
const items=List.children;
// button.addEventListener("click",function(){
//     head.innerHTML="hello";
// })

button.addEventListener("click",function(){
    const new1=document.createElement("li")
    new1.classList.add("item")
    new1.innerHTML="item3"
    List.appendChild(new1);
})
 