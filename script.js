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