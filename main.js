let playerPrompt = prompt("Choose paper, rock, or scissors");
let playerPoints = 0;
let computerPoints = 0;
let subStringWin = "win";
let subStringLose = "lose";
const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

function tally(roundResult) {
  if (roundResult.includes(subStringWin)) {
    playerPoints++;
  }
  if (roundResult.includes(subStringLose)) {
    computerPoints++;
  }
}

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

function playGame() {
  for (let i = 0; i < 5; i++) {
    let playerSelection = playerPrompt;

    let computerSelection = getComputerChoice();
    let roundResult = playRound(playerSelection, computerSelection);
    tally(roundResult);
  }
}

//everything up to here works. playgame is adding playerpoint and computer points after 5 rounds.

playGame();
console.log({ playerPoints, computerPoints });
function decideWinner(playerPoints, computerPoints) {
  if (computerPoints == playerPoints) {
    return "its a tie";
  } else if (playerPoints > computerPoints) {
    return "you win";
  }
  return "you lose";
}
decideWinner();
console.log({ playerPoints, computerPoints });

console.log(decideWinner(playerPoints, computerPoints));
