// Game options
 let gameOptions = ["rock", "paper", "scissors"];


// Computer
function computerPlay() {
    return gameOptions[~~(Math.random() * gameOptions.length)];
}

function playRound(computerSelection, playerSelection) {
    if (computerSelection === playerSelection) {
        return "Oh, that's tie!";
    } 
    else if(
               (playerSelection === 'rock' && computerSelection === "scissors") ||
               (playerSelection === "scissors" && computerSelection === "paper") ||
               (playerSelection === "paper" && computerSelection === 'rock')
            ) {
        return "You win!";
    } else {
        return "You lose";
    }
} 

const playerSelection = 'papEr'.toLowerCase();
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));