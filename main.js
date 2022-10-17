function getComputerChoice(choice) {
  const randomIndex = Math.floor(Math.random() * 3);
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

let playerPoints = 0;
let computerPoints = 0;
let subStringWin = "win";
let subStringLose = "lose";
function playRound(playerSelection, computerSelection) {
  if (playerSelection == "rock" && computerSelection == "rock") {
    return "no points. Go Again!";
  }
  if (playerSelection == "rock" && computerSelection == "paper") {
    return "you lose. paper beats rock!";
  }

  if (playerSelection == "rock" && computerSelection == "scissors") {
    return "you win! rock beats scissors!";
  }
  if (playerSelection == "paper" && computerSelection == "rock") {
    return "you win! paper beats rock!";
  }
  if (playerSelection == "paper" && computerSelection == "paper") {
    return "no points. go again!";
  }
  if (playerSelection == "paper" && computerSelection == "scissors") {
    return "you lose. scissors beats paper!";
  }
  if (playerSelection == "scissors" && computerSelection == "rock") {
    return "you lose. scissors beats rock!";
  }
  if (playerSelection == "scissors" && computerSelection == "paper") {
    return "you win! scissors beats paper!";
  }
  if (playerSelection == "scissors" && computerSelection == "scissors") {
    return "no points. go again!";
  } else {
    return "oh noes!";
  }
}
const playerSelection = "rock";
const computerSelection = getComputerChoice();

const roundResult = playRound(playerSelection, computerSelection);

function tally(roundResult) {
  if (roundResult.includes(subStringWin)) {
    playerPoints++;
  }
  if (roundResult.includes(subStringLose)) {
    computerPoints++;
  }
}

console.log(playRound(playerSelection, computerSelection));
console.log(roundResult);
console.log(playerPoints);
console.log(computerPoints);
console.log(tally(roundResult));
