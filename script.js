const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");
const results = document.querySelector("#result");
const scores = document.querySelector("#score");

rockButton.addEventListener("click", () => {
  playRound("rock", getComputerChoice());
});

paperButton.addEventListener("click", () => {
  playRound("paper", getComputerChoice());
});

scissorsButton.addEventListener("click", () => {
  playRound("scissors", getComputerChoice());
});


let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const computerChoice = Math.floor(Math.random() * choices.length);
  return choices[computerChoice];
}

function getHumanChoice() {
  const input = window.prompt("Make your choice");
  return input;
}

function playRound(humanChoice, computerChoice) {
  if(humanScore === 5 || computerScore === 5){
    return;
  }
  
  humanChoice = humanChoice.toLowerCase();
  computerChoice = computerChoice.toLowerCase();

  if (humanChoice === "rock" && computerChoice === "scissors") {
    results.textContent = "You win! Rock beats Scissors";
    humanScore++;
  } else if (computerChoice === "rock" && humanChoice === "scissors") {
    results.textContent = "You lose! Rock beats Scissors.";
    computerScore++;
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    results.textContent = "You win! Scissors beats Paper";
    humanScore++;
  } else if (computerChoice === "scissors" && humanChoice === "paper") {
    results.textContent = "You lose! Scissors beats Paper.";
    computerScore++;
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    results.textContent = "You win! Paper beats Rock.";
    humanScore++;
  } else if (computerChoice === "paper" && humanChoice === "rock") {
    results.textContent = "You lose! Paper beats Rock.";
    computerScore++;
  } else {
    results.textContent = "Tie!";
  }
  scores.textContent = `You: ${humanScore} | Computer: ${computerScore}`

  if(humanScore === 5){
    results.textContent = "YOU WIN THE GAME!";
  }
  else if(computerScore === 5){
    results.textContent = "COMPUTER WINS THE GAME!";
  }

}

/*  function playGame() {
  for (let i = 0; i < 5; i++) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();

    playRound(humanChoice, computerChoice);
  }

  if (humanScore > computerScore) {
    console.log("Human Wins!");
  } else if (computerScore > humanScore) {
    console.log("Computer Wins!");
  } else {
    console.log("Tie!");
  }
}

playGame(); */
