// localStorage    method  to store
//localStorage.setItem("name","shaheen")  // store key value pairs
//localStorage.setItem("age",21)  // store key value pairs
// when we remove the code it will not remove from sever storage


// to remove
// localStorage.clear();

// to get value
// localStorage.setItem("age",21) ;
// const names =localStorage.getItem("age");
// console.log(names) ;



//sessionStorage()
// sessionStorage.setItem("names","shaheenkp")
// sessons based 
// close the window they will delete

const x=["shaheen","code","fahim"]
localStorage.setItem("Names",JSON.stringify(x));  // to string 
const y =JSON.parse(localStorage.getItem("Names")); //to array
console.log(y)
// console.log(typeofy)  it is string all dataed stores as a string








