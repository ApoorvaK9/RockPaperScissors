let userScore = 0;
let computerScore = 0;

let displayUserScore = document.querySelector(".userScore");
let displayComputerScore = document.querySelector(".computerScore");
displayUserScore.textContent = userScore;
displayComputerScore.textContent = computerScore;


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

// function to play entire game of 5 rounds
function playGame(userSelection) {
    let displayUserScore = document.querySelector(".userScore");
    let displayComputerScore = document.querySelector(".computerScore");
    let paperRock = 0;
    let rockScissor = 0;
    let scissorsPaper = 0;
    let computerSelection = getComputerChoice();

    displayResult(playRound(userSelection, computerSelection));
    displayWinner();
    displayUserScore.textContent = userScore;
    displayComputerScore.textContent = computerScore;

        // function to play single rounds
    function playRound(userChoice,computerChoice) {
        // If user chooses rock
        if (userChoice === "Rock"){
                if (computerChoice === "Scissors"){
                    ++userScore;
                    displayPlayersChoice(userChoice,computerChoice);
                    rockScissor = 1;
                    return "You win! Rock beats Scissors";
                }
                else if (computerChoice === "Paper"){
                    ++computerScore;
                    displayPlayersChoice(userChoice,computerChoice);
                    paperRock = 1;
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
                    scissorsPaper = 1;
                    return "You lose! Scissors beat Paper";
                }
                else if (computerChoice === "Rock"){
                    ++userScore;
                    displayPlayersChoice(userChoice,computerChoice);
                    paperRock = 1;
                    return "You win! Paper beats Rock";
                }
                else {
                    displayPlayersChoice(userChoice,computerChoice);
                    return "Its a tie! Play again";
                }
        }
        // If user chooses scissors
        else if(userChoice === "Scissors"){
                if (computerChoice === "Paper"){
                    ++userScore;
                    displayPlayersChoice(userChoice,computerChoice);
                    scissorsPaper = 1;
                    return "You win! Scissors beat Paper";
                }
                else if (computerChoice === "Rock"){
                    ++computerScore;
                    displayPlayersChoice(userChoice,computerChoice);
                    rockScissor = 1;
                    return "You lose! Rock beats Scissors";
                }
                else {
                    displayPlayersChoice(userChoice,computerChoice);
                    return "Its a tie! Play again";
                }
            }
    }

    function displayWinner(){
        let imgPaperRock = document.getElementById("paperRock");
        let imgrockScissors = document.getElementById("rockScissors");
        let imgscissorsPaper = document.getElementById("scissorsPaper");
        imgPaperRock.style.display = "none";
        imgrockScissors.style.display = "none";
        imgscissorsPaper.style.display = "none";
        
        if(paperRock === 1)
            imgPaperRock.style.display = "block";
        else if(rockScissor === 1)
            imgrockScissors.style.display = "block";
        else if (scissorsPaper === 1)
            imgscissorsPaper.style.display = "block";
    }


    if (userScore === 5 || computerScore === 5)
        {
            const userHighScore = userScore;
            const computerHighScore = computerScore;
            userScore = 0;
            computerScore = 0;
            winner(userHighScore,computerHighScore);
        }
    
}

// function to display final winner
function winner(userHighScore,computerHighScore) {
    (userHighScore > computerHighScore) ? displayResult(`Congrats! You win! Celebrate!`)
    :displayResult(`You lose!\nPlay again!`)
}

//function displays players choice
function displayPlayersChoice(userChoice,computerChoice) {
    let userSelectedOption = document.querySelector(".userSelectedOption");
    let computerSelectedOption = document.querySelector(".computerSelectedOption");
    
    userSelectedOption.textContent = userChoice;
    computerSelectedOption.textContent = computerChoice;
    
    result.textContent = "";
}


// UI 
const choice = document.querySelector("#choice");
const result = document.querySelector("#result");
let userSelection = '';


choice.addEventListener("click",(e)=> {
        let target = e.target;
        switch (target.id) {
            case 'rock':
                userSelection = "Rock";
                playGame(userSelection);
                break;

            case 'paper':
                userSelection = "Paper";
                playGame(userSelection);
                break;

            case 'scissors':
                userSelection = "Scissors";
                playGame(userSelection);
                break;

            default:
                break;
        }
    });

//function dislays result    
function displayResult(msg){
    const paragraph = document.createElement("p");
    paragraph.textContent = msg;
    result.appendChild(paragraph);
}
