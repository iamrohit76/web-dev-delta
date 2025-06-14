let movie = "Bahubali";
let guess = prompt("Enter the movie Name :");

while((movie != guess) && (guess !="quit")){
    console.log("Wrong");
    guess = prompt("Enter the movie Name :")
}