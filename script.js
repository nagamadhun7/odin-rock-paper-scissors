let humanScore = 0;
let computerScore = 0;

const humanScoreDisplay = document.getElementById("human-score");
const computerScoreDisplay = document.getElementById("computer-score");
const resultDisplay = document.getElementById("result");

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  let index = Math.floor(Math.random() * choices.length);
  return choices[index];
}

function playRound(humanChoice) {
  const computerChoice = getComputerChoice();
  let roundResult = "";

  if (humanChoice === computerChoice) {
    roundResult = `It's a tie! Both chose ${humanChoice}.`;
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "rock")
  ) {
    humanScore++;
    roundResult = `You win! ${humanChoice} beats ${computerChoice}.`;
  } else {
    computerScore++;
    roundResult = `You lose! ${computerChoice} beats ${humanChoice}.`;
  }

  humanScoreDisplay.textContent = humanScore;
  computerScoreDisplay.textContent = computerScore;
  resultDisplay.textContent = roundResult;

  checkWinner();
}

function checkWinner() {
  if (humanScore === 5 || computerScore === 5) {
    const finalMessage =
      humanScore === 5
        ? "Congratulations! You won the game!"
        : "Game over! The computer wins!";
    resultDisplay.textContent = finalMessage;


    document.querySelectorAll("button").forEach((button) => {
      button.disabled = true;
    });
  }
}


document.getElementById("rock").addEventListener("click", () => playRound("rock"));
document.getElementById("paper").addEventListener("click", () => playRound("paper"));
document.getElementById("scissors").addEventListener("click", () => playRound("scissors"));
