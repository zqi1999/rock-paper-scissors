console.log("Hello");

let moves = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
  let option = Math.floor(Math.random() * 3);
  console.log(`Computer selects ${moves[option]}`);
  return option;
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.substring(1);
}

function playRound(
  playerSelection = capitalize(prompt("Choose a move: ", "rock").toLowerCase()),
  computerSelection = getComputerChoice()
) {
  console.log(
    `Player: ${playerSelection}     Computer: ${moves[computerSelection]}`
  );
  let playerIndex = moves.indexOf(playerSelection);
  if (playerIndex == moves.length - 1 && computerSelection == 0) {
    return `You Lose! ${moves[computerSelection]} beats  ${playerSelection}`;
  } else if (computerSelection == moves.length - 1 && playerIndex == 0) {
    return `You Won! ${playerSelection} beats ${moves[computerSelection]}`;
  } else if (computerSelection == playerIndex) {
    return playRound();
  }
  return playerIndex > computerSelection
    ? `You Won! ${playerSelection} beats ${moves[computerSelection]}`
    : `You Lose! ${moves[computerSelection]} beats  ${playerSelection}`;
}

function game() {
    for (let i = 0; i < 5; i++) {
        console.log(playRound());
    }
}