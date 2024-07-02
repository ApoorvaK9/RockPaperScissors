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

console.log(getComputerChoice());