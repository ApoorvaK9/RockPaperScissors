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
    let userInput = prompt(`Welcome to Rock,Paper,Scissors game! \nPlease write your choice below`);
    let userInputLowerCase = userInput.toLowerCase();
    if (userInputLowerCase === "rock" )
        return "Rock";
    else if (userInputLowerCase === "paper" )
        return "Paper";
    else if (userInputLowerCase === "scissors" || userInputLowerCase === "scissor")
        return "Scissors";
    else
        return "Invalid choice";
}

let humanScore = 0;
let computerScore = 0;

// const humanSelection = getUserChoice();
// const computerSelection = getComputerChoice();
// console.log(playRound(humanSelection, computerSelection));


// function to play enrire game of 5 rounds
function playGame() {
    for( i = 1 ; i < 6 ; i++ ) {
        let humanSelection = getUserChoice();
        let computerSelection = getComputerChoice();
        console.log(playRound(humanSelection, computerSelection));

        // console.log(playRound(getUserChoice(),getComputerChoice()));
        if (humanSelection === "Invalid choice"){
            --i;
        }
    }
    console.log("User Score : " + humanScore + " Computer Score : " + computerScore );
    winner(humanScore,computerScore);

    // function to play single rounds
    function playRound(humanChoice,computerChoice) {
        // If user chooses rock
        if (humanChoice === "Rock"){
            if (computerChoice === "Scissors"){
                ++humanScore;
                console.log("User choice : " + humanChoice + "    Computer choice : " + computerChoice);
                return "You win! Rock beats Scissors";
            }
            else if (computerChoice === "Paper"){
                ++computerScore;
                console.log("User choice : " + humanChoice + "    Computer choice : " + computerChoice);
                return "You lose! Paper beats Rock";
            }
            else {
                console.log("User choice : " + humanChoice + "    Computer choice : " + computerChoice);
                return "Its a tie! Play again";
            }
        }
        // If user chooses paper
        else if (humanChoice === "Paper"){
            if (computerChoice === "Scissors"){
                ++computerScore;
                console.log("User choice : " + humanChoice + "    Computer choice : " + computerChoice);
                return "You lose! Scissors beat Paper";
            }
            else if (computerChoice === "Rock"){
                ++humanScore;
                console.log("User choice : " + humanChoice + "    Computer choice : " + computerChoice);
                return "You win! Paper beats Rock";
            }
            else {
                console.log("User choice : " + humanChoice + "    Computer choice : " + computerChoice);
                return "Its a tie! Play again";
            }
        }
        // If user chooses scissors
        else if (humanChoice === "Scissors"){
            if (computerChoice === "Paper"){
                ++humanScore;
                console.log("User choice : " + humanChoice + "    Computer choice : " + computerChoice);
                return "You win! Scissors beat Paper";
            }
            else if (computerChoice === "Rock"){
                ++computerScore;
                console.log("User choice : " + humanChoice + "    Computer choice : " + computerChoice);
                return "You lose! Rock beats Scissors";
            }
            else {
                console.log("User choice : " + humanChoice + "    Computer choice : " + computerChoice);
                return "Its a tie! Play again";
            }
        }
        else {
            console.log("User choice : " + humanChoice + "    Computer choice : " + computerChoice);
            return "Please enter a valid choice!";
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