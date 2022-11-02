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

function addScore() {}
//decideWinner();

//button box
const buttonDiv = document.createElement("div");
document.body.append(buttonDiv);
buttonDiv.style.display = "flex";
buttonDiv.style.flex = "space-evenly";
//buttons style

//rockButton
const rockButton = document.createElement("button");
rockButton.innerText = "rock";
rockButton.classList.add("btn");
buttonDiv.append(rockButton);
rockButton.addEventListener("click", function () {
  playAndTally();
});
//paperButton
const paperButton = document.createElement("button");
paperButton.innerText = "paper";
paperButton.classList.add("btn");
buttonDiv.append(paperButton);
paperButton.addEventListener("click", function () {
  playAndTally("paper");
});
//scissorsButton
const scissorsButton = document.createElement("button");
scissorsButton.innerText = "scissors";
scissorsButton.classList.add("btn");
buttonDiv.append(scissorsButton);
scissorsButton.addEventListener("click", function () {
  playAndTally("scissors");
});

const btnStyle = document.querySelectorAll(".btn");
btnStyle.forEach((button) => {
  // @ts-ignore
  button.style.backgroundColor = "green";
});
console.log(btnStyle);
//scoreBoard to keep track of points after each round
const scoreBoard = document.createElement("div");
scoreBoard.style.display = "flex";
document.body.appendChild(scoreBoard);

const playerScore = document.createElement("div");
playerScore.setAttribute("id", "playerScore");
const header1 = document.createElement("h1");
header1.textContent = "Player Points";
playerScore.append(header1);
playerScore.style.flex = "float:left,width:50%";
scoreBoard.append(playerScore);

const computerScore = document.createElement("div");
computerScore.setAttribute("id", "computerScore");
const header2 = document.createElement("h1");
header2.textContent = "Computer Points";
computerScore.append(header2);
computerScore.style.display = "flex,float:right,width:50%";

scoreBoard.append(computerScore);
