function getComputerChoice(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  if (randomIndex === 0) {
    return "rock";
  }
  if (randomIndex === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

const choice = ["rock", "paper", "scissors"];
const result = getComputerChoice(choice);

console.log(getComputerChoice(choice));
