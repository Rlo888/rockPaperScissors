function getComputerChoice(arr) {
  arr = choice;
  const randomIndex = Math.floor(Math.random() * arr.length);
  let result = "";
  if (randomIndex === 0) {
    result = "rock";
  }
  if (randomIndex === 1) {
    result = "paper";
  } else {
    result = "scissors";
  }
  return result;
}

const choice = ["rock", "paper", "scissors"];
const result = getComputerChoice(choice);

//console.log(getComputerChoice(choice));

function playRound(playerSelection, computerSelection) {
  if (playerSelection == "rock" && computerSelection == "rock") {
    return "Go Again!";
  }
  if (playerSelection == "rock" && computerSelection == "paper") {
    return "Paper Beats Rock!";
  }

  if (playerSelection == "rock" && computerSelection == "scissors") {
    return "Rock Beats Scissors!";
  }
  if (playerSelection == "paper" && computerSelection == "rock") {
    return "Paper Beats Rock!";
  }
  if (playerSelection == "paper" && computerSelection == "paper") {
    return "Go Again!";
  }
  if (playerSelection == "paper" && computerSelection == "scissors") {
    return "Scissors Beats Paper!";
  }
  if (playerSelection == "scissors" && computerSelection == "rock") {
    return "Scissors Beats Rock!";
  }
  if (playerSelection == "scissors" && computerSelection == "paper") {
    return "Scissors Beats Paper!";
  }
  if (playerSelection == "scissors" && computerSelection == "scissors") {
    return "Go Again!";
  } else {
    return "Oh noes!";
  }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
// console.log(computerSelection);
