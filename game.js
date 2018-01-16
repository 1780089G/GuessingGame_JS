// create secretNumber
var secretNumber = 4;
//as user for guess
var guess = prompt("Guess a number");
alert(guess);


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
