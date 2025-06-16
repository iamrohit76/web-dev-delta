// Takes one or multiple functions as arguments

// function multiGreet(func, count){
//     for(let i=0; i<=count; i++){
//          func();
//     }
// }
// let greet = function (){
//     console.log("Hello");
// }

// multiGreet(greet, 3);

// return a function

function oddAndEven(request){
   if(request == "odd"){
    let odd = function (n){
        console.log(!(n%2==0));
    }
    return odd;
   }

   else if(request == "even"){
    let even = function(n){
        console.log(n%2==0);
    }
    return even;
   }
   
   else {
    console.log("Wrong Request");
   }
}

let num = oddAndEven("even");
console.log(num(78));
