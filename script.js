let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const randomNum = Math.random();
    if (randomNum < 0.333) {
        return "Rock";
    } else if (randomNum < 0.666) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function getPlayerChoice() {
    return prompt("Enter Rock, Paper, or Scissors:");
}

function playRound(playerSelection, computerSelection) {
    // Normalize input
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        return "It's a tie!";
    }

    if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        humanScore++;
        return `You win! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection}.`;
    } else {
        computerScore++;
        return `You lose! ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beats ${playerSelection}.`;
    }
}

// Example of playing a single round:
const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
console.log(`Human: ${humanScore} | Computer: ${computerScore}`); 

function playGame() {
    humanScore = 0;
    computerScore = 0;

    for (let round = 1; round <= 5; round++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(`Round ${round}:`);
        console.log(playRound(playerSelection, computerSelection));
        console.log(`Score => Human: ${humanScore} | Computer: ${computerScore}`);
    }

    if (humanScore > computerScore) {
        console.log("You win the game!");
    } else if (computerScore > humanScore) {
        console.log("Computer wins the game!");
    } else {
        console.log("The game is a tie!");
    }
}