// function creates a random number between 1,2,3
function randomNumber() {
    return (Math.floor( 1 + ( Math.random() * 3 )));
}

// function sets computer choice between rock, paper and scissors
function getComputerChoice() {
    let randomNum = randomNumber();
    if (randomNum === 1)
        return "Rock";
    else if (randomNum === 2)
        return "Paper";
    else if (randomNum === 3)
        return "Scissors";
}

// function to get user input
function getUserChoice(){
    let userInput = prompt("Please choose one of Rock,Paper or Scissors");
    let userInputLowerCase = userInput.toLowerCase();
    if (userInputLowerCase === "rock" )
        return "Rock";
    else if (userInputLowerCase === "paper" )
        return "Paper";
    else if (userInputLowerCase === "scissors" || userInputLowerCase === "scissor")
        return "Scissors";
    else
        return "Please enter a valid choice";
}

console.log(getUserChoice());