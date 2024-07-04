let userScore = 0;
let computerScore = 0;
let winner = (userPoints,computerPoints) => {
    (userPoints > computerPoints) ? console.log(`Congrats! You win! Celebrate!`)
    :(userPoints < computerPoints) ? console.log(`You lose!\nBetter luck next time`)
    :console.log("Its a tie!")};
    
playGame();


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

// function to play entire game of 5 rounds
function playGame() {
    for( i = 1 ; i < 6 ; i++ ) {
        let userSelection = getUserChoice();
        let computerSelection = getComputerChoice();
        console.log(playRound(userSelection, computerSelection));

        // console.log(playRound(getUserChoice(),getComputerChoice()));
        if (userSelection === "Invalid choice"){
            --i;
        }
    }
    console.log("User Score : " + userScore + " Computer Score : " + computerScore );

    winner(userScore,computerScore);

    // function to play single rounds
    function playRound(userChoice,computerChoice) {
        // If user chooses rock
        if (userChoice === "Rock"){
            if (computerChoice === "Scissors"){
                ++userScore;
                displayPlayersChoice(userChoice,computerChoice);
                return "You win! Rock beats Scissors";
            }
            else if (computerChoice === "Paper"){
                ++computerScore;
                displayPlayersChoice(userChoice,computerChoice);
                return "You lose! Paper beats Rock";
            }
            else {
                displayPlayersChoice(userChoice,computerChoice);
                return "Its a tie! Play again";
            }
        }
        // If user chooses paper
        else if (userChoice === "Paper"){
            if (computerChoice === "Scissors"){
                ++computerScore;
                displayPlayersChoice(userChoice,computerChoice);
                return "You lose! Scissors beat Paper";
            }
            else if (computerChoice === "Rock"){
                ++userScore;
                displayPlayersChoice(userChoice,computerChoice);
                return "You win! Paper beats Rock";
            }
            else {
                displayPlayersChoice(userChoice,computerChoice);
                return "Its a tie! Play again";
            }
        }
        // If user chooses scissors
        else if (userChoice === "Scissors"){
            if (computerChoice === "Paper"){
                ++userScore;
                displayPlayersChoice(userChoice,computerChoice);
                return "You win! Scissors beat Paper";
            }
            else if (computerChoice === "Rock"){
                ++computerScore;
                displayPlayersChoice(userChoice,computerChoice);
                return "You lose! Rock beats Scissors";
            }
            else {
                displayPlayersChoice(userChoice,computerChoice);
                return "Its a tie! Play again";
            }
        }
        else {
            displayPlayersChoice(userChoice,computerChoice);
            return "Please enter a valid choice!";
        }
    }
}

function displayPlayersChoice(userChoice,computerChoice) {
    console.log("User choice : " + userChoice + "    Computer choice : " + computerChoice);
}