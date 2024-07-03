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

let humanScore = 0;
let computerScore = 0;

// const humanSelection = getUserChoice();
// const computerSelection = getComputerChoice();
// console.log(playRound(humanSelection, computerSelection));


// function to play enrire game of 5 rounds
function playGame() {
    for( i = 1 ; i < 6 ; i++ )
        console.log(playRound(getUserChoice(),getComputerChoice()));;

    console.log("User Score : " + humanScore + " Computer Score : " + computerScore );
    winner(humanScore,computerScore);

    // function to play single rounds
    function playRound(humanChoice,computerChoice) {
        // If user chooses rock
        if (humanChoice === "Rock"){
            if (computerChoice === "Scissors"){
                ++humanScore;
                return "You win! Rock beats Scissors";
            }
            else if (computerChoice === "Paper"){
                ++computerScore;
                return "You lose! Paper beats Rock";
            }
            else
                return "Its a tie! Play again";
        }
        // If user chooses paper
        else if (humanChoice === "Paper"){
            if (computerChoice === "Scissors"){
                ++computerScore;
                return "You lose! Scissors beat Paper";
            }
            else if (computerChoice === "Rock"){
                ++humanScore;
                return "You win! Paper beats Rock";
            }
            else
                return "Its a tie! Play again";
        }
        // If user chooses scissors
        else if (humanChoice === "Scissors"){
            if (computerChoice === "Paper"){
                ++humanScore;
                return "You win! Scissors beat Paper";
            }
            else if (computerChoice === "Rock"){
                ++computerScore;
                return "You lose! Rock beats Scissors";
            }
            else
                return "Its a tie! Play again";
        }
    }
}

// function to display the winner of 5 rounds
function winner(userPoints,computerPoints) {
    if (userPoints > computerPoints)
        console.log(`Congrats! You win! Celebrate!`);

    else if (userPoints < computerPoints)
        console.log(`You lose!\nBetter luck next time`);
    else
        console.log("Its a tie!");
}

playGame();