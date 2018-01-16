// create secretNumber
var secretNumber = 4;
//as user for guess
var stringGuess = prompt("Guess a number");
var guess = Number(stringGuess);

//check if guess ir right 
if (guess == secretNumber) {
  alert("You got it right");
}

//otherwshie check if guess is higher

else if(Number(guess) > secretNumber) {
  alert("To high, guess again");
}
else {
  alert("To low, guess again");
}
