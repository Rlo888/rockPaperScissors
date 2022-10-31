let playerPoints = 0;
let computerPoints = 0;
const subStringWin = "win";
const subStringLose = "lose";
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

function playRound(pSelection, cSelection) {
  if (pSelection == "rock" && cSelection == "rock") {
    return "no points. Go Again!";
  }
  if (pSelection == "rock" && cSelection == "paper") {
    return "you lose. paper beats rock!";
  }

  if (pSelection == "rock" && cSelection == "scissors") {
    return "you win! rock beats scissors!";
  }
  if (pSelection == "paper" && cSelection == "rock") {
    return "you win! paper beats rock!";
  }
  if (pSelection == "paper" && cSelection == "paper") {
    return "no points. go again!";
  }
  if (pSelection == "paper" && cSelection == "scissors") {
    return "you lose. scissors beats paper!";
  }
  if (pSelection == "scissors" && cSelection == "rock") {
    return "you lose. scissors beats rock!";
  }
  if (pSelection == "scissors" && cSelection == "paper") {
    return "you win! scissors beats paper!";
  }
  if (pSelection == "scissors" && cSelection == "scissors") {
    return "no points. go again!";
  } else {
    return "oh noes!";
  }
}

function playAndTally(playerSelection) {
  //for (let i = 0; i < 5; i++) {}
  console.log({ playerPoints, computerPoints });

  let computerSelection = getComputerChoice();
  let roundResult = playRound(playerSelection, computerSelection);
  tally(roundResult);
  console.log({ playerPoints, computerPoints });
}

function decideWinner(pPoints, cPoints) {
  if (cPoints == pPoints) {
    return "its a tie";
  } else if (pPoints > cPoints) {
    return "you win";
  }
  return "you lose";
}
//decideWinner();

//alert(decideWinner(playerPoints, computerPoints));

//rockButton
const rockButton = document.createElement("button");
rockButton.innerText = "rock";
rockButton.classList.add("btn");
document.body.append(rockButton);
rockButton.addEventListener("click", function () {
  playAndTally("rock");
});
//paperButton
const paperButton = document.createElement("button");
paperButton.innerText = "paper";
paperButton.classList.add("btn");
document.body.append(paperButton);
paperButton.addEventListener("click", function () {
  playAndTally("paper");
});
//scissorsButton
const scissorsButton = document.createElement("button");
scissorsButton.innerText = "scissors";
scissorsButton.classList.add("btn");
document.body.append(scissorsButton);
scissorsButton.addEventListener("click", function () {
  playAndTally("scissors");
});
