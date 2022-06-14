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
    } else if(    
               (computerSelection === "rock" && playerSelection === "scissors") ||
               (computerSelection === "scissors" && playerSelection === "paper") ||
               (computerSelection === "paper" && playerSelection === "rock")
            ) {
        return "You lose!";
    }
} 

const playerSelection = prompt("Rock, paper, scissors?").toLowerCase();
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));


// Play Game
function game() {
    let playerScore = 0;
    let computerScore = 0;

    // 5 rounds of game
    for (let i = 0; i < 5; i++) { 
        let result = playRound(playerSelection, computerSelection);

        if (result === "You win!") {
            console.log(playerScore++)
        } else if (result === "You lose") {
            console.log(computerScore++)
        } else {
            console.log(result);
        }
    }
    console.log(`Player: ${playerScore} Computer: ${computerScore}`);
}
game();