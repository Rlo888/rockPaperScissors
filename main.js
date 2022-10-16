function getComputerChoice(choices) {
  // no need to reassign the passed in array
  const randomIndex = Math.floor(Math.random() * choices.length);
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

const choices = ["rock", "paper", "scissors"];
const compChoice = getComputerChoice(choices);

console.log({ compChoice });

//console.log(getComputerChoice(choice));
let playerPoints = 0;
let computerPoints = 0;
let subStringWin = "you win";
let subStringLose = "you lose";
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
    return "Oh noes!";
  }
}
function tally(roundResult) {
  if (roundResult.includes(subStringWin)) {
    playerPoints++;
  }
}
console.log({ computerPoints }, "before");

const playerSelection = "rock";

const roundResult = playRound(playerSelection, compChoice);
tally(roundResult);
console.log({ roundResult });
console.log({ computerPoints }, "after");

// console.log(computerSelection);

// function game() {
//   for (let i = 0; i < 5; i++) {
//     function playRound(i) {}
//   }
//   if(function playRound())

//   // const computerScore=0;
//   // const playerScore=0;
// }
