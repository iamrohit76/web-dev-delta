let todo =[];
let req=prompt("Please enter your request");
while(true){
    if(req=="quit"){
    console.log("quiting app");
    break;
    }

    if(req=="list"){
        console.log("---------------");
        for(task of todo){
            console.log(task);
        }
        console.log("---------------");
     }
    else if(req=="add"){
           let task = prompt("Please enter your task you want to add");
           todo.push(task);
           console.log("task added");
        }

    req = prompt("please enter your request");
    
}
