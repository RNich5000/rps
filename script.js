let round = 0;
let humanScore = 0;
let computerScore = 0;
let ties = 0;

const rock = "Rock";
const paper = "Paper";
const scissors = "Scissors";
const computer = "Computer";
const human = "Human";

const humanScoreText = document.querySelector("#humanScore");
const computerScoreText = document.querySelector("#computerScore");
const tiesText = document.querySelector("#ties");
const gameOverText = document.querySelector("#gameOver");
const tally = document.querySelector("#tally");

const btnRock = document.querySelector("#btnRock");
btnRock.addEventListener("click", () => playRound(rock))
const btnPaper = document.querySelector("#btnPaper");
btnPaper.addEventListener("click", () => playRound(paper))
const btnScissors = document.querySelector("#btnScissors");
btnScissors.addEventListener("click", () => playRound(scissors))

function playRound(playerChoice) {
    let humanInput = playerChoice;
    let computerInput = getComputerInput();

    getWinner(humanInput, computerInput);

    if ((humanScore >= 5) || (computerScore >= 5)) {
        setGameOver();
    }
}

function setGameOver() {
    const winner = humanScore >= 5 ? human : computer;

    btnRock.setAttribute("disabled", "disabled");
    btnPaper.setAttribute("disabled", "disabled");
    btnScissors.setAttribute("disabled", "disabled");

    gameOverText.textContent = `Game over! ${winner} wins!`

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
    let winner = "";
    if (humanInput === computerInput) {
        updateTie();
    } else {
        switch (humanInput) {
            case rock:
                if (computerInput === paper) {
                    updateComputerScore();
                    winner = computer;
                } else {
                    updateHumanScore();
                    winner = human;
                }
                break;
            case paper:
                if (computerInput === scissors) {
                    updateComputerScore();
                    winner = computer;
                } else {
                    updateHumanScore();
                    winner = human;
                }
                break;
            default: // scissors
                if (computerInput === rock) {
                    updateComputerScore();
                    winner = computer;
                } else {
                    updateHumanScore();
                    winner = human;
                }
        }
    }
    appendScoreReadout(humanInput, computerInput, winner)
    round++;
}

function appendScoreReadout(humanInput, computerInput, winner) {
    let turnText = `Human: ${humanInput} | Computer: ${computerInput}`;
    if (winner !== "") {
        turnText += ` | winner: ${winner}`;
    }

    const li = document.createElement("li");
    li.textContent = turnText;
    tally.appendChild(li);
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