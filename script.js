let round = 0;
let humanScore = 0;
let computerScore = 0;
let ties = 0;

const rock = "rock";
const paper = "paper";
const scissors = "scissors";

const humanScoreText = document.querySelector("#humanScore");
const computerScoreText = document.querySelector("#computerScore");
const tiesText = document.querySelector("#ties");
const gameOverText = document.querySelector("#gameOver");

function playRound() {
    let humanInput = getHumanInput();
    let computerInput = getComputerInput();
    console.log("Your choice: " + humanInput);
    console.log("Computer chose: " + computerInput);
    getWinner(humanInput, computerInput);
    console.log(`Current score: You: ${humanScore}, Computer: ${computerScore} (${ties} ties)`)
    console.log("=====");
}

function getHumanInput() {
    let choice = prompt("rock, paper, or scissors?").toLowerCase();
    switch (choice) {
        case rock:
        case paper:
        case scissors:
            return choice;
        default:
            alert("Invalid choice! Try again...");
            return getHumanInput();
    }
}

function getComputerInput() {
    const num = Math.floor(Math.random() * 3) + 1;
    if (num === 1) {
        return rock;
    } else if (num === 2) {
        return paper;
    } else {
        return scissors;
    }
}

function getWinner(humanInput, computerInput) {
    if (humanInput === computerInput) {
        updateTie();
    } else {
        switch (humanInput) {
            case rock:
                if (computerInput === paper) {
                    updateComputerScore();
                } else {
                    updateHumanScore();
                }
                break;
            case paper:
                if (computerInput === scissors) {
                    updateComputerScore();
                } else {
                    updateHumanScore();
                }
                break;
            default: // scissors
                if (computerInput === rock) {
                    updateComputerScore();
                } else {
                    updateHumanScore();
                }
        }
    }

    round++;
}

function updateHumanScore() {
    humanScore++;
    humanScoreText.textContent = "Human score: " + humanScore;
}

function updateComputerScore() {
    computerScore++;
    computerScoreText.textContent = "Computer score: " + computerScore;
}

function updateTie() {
    ties++;
    tiesText.textContent = "Ties: " + ties;
}

function playGame() {
    while (round < 5) {
        playRound();
    }

    gameOverText.textContent = "Game over!";
    console.log("Game over!");
}

playGame();