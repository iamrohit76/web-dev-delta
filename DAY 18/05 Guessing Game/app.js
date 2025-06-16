let max = prompt("Enter the max number: ");
let random = Math.floor(Math.random() * max);

let guess = prompt("Guess the number (or type 'quit' to exit): ");

while (true) {
  if (guess === "quit") {
    console.log("You gave up. Thanks for playing!");
    break;
  }

  // Convert guess to number for comparison
  if (Number(guess) === random) {
    console.log("Congrats! You guessed it right!");
    break;
  } else {
    guess = prompt("Wrong guess, try again (or type 'quit' to exit): ");
  }
}
