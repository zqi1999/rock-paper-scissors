console.log("Hello");

let moves = ["rock", "paper", "scissors"];

function getComputerChoice() {
  let option = Math.floor(Math.random() * 3);
  console.log(`Computer selects ${moves[option]}`);
  return option;
}

function playRound(
  playerSelection = prompt("Choose a move: ", "rock"),
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
