
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

function validateInput() {
    let playerInput = capitalize(prompt("Choose a move (Rock, Paper, Scissors): ").toLowerCase());
    while (!moves.includes(playerInput)) {
        playerInput = capitalize(prompt("Invalid move! Choose a move (Rock, Paper, Scissors): ").toLowerCase());
    }
    return playerInput;
}

function playRound(
  playerSelection = validateInput(),
  computerSelection = getComputerChoice()
) {
  console.log(
    `Player: ${playerSelection}     Computer: ${moves[computerSelection]}`
  );
  let playerIndex = moves.indexOf(playerSelection);
  if (playerIndex == moves.length - 1 && computerSelection == 0) {
    return `You Lose! ${moves[computerSelection]} beats ${playerSelection}`;
  } else if (computerSelection == moves.length - 1 && playerIndex == 0) {
    return `You Won! ${playerSelection} beats ${moves[computerSelection]}`;
  } else if (computerSelection == playerIndex) {
    console.log(`Tie Game! ${playerSelection} and ${moves[computerSelection]}`)
    return playRound();
  }
  return playerIndex > computerSelection
    ? `You Won! ${playerSelection} beats ${moves[computerSelection]}`
    : `You Lose! ${moves[computerSelection]} beats ${playerSelection}`;
}

function game() {
//   for (let i = 0; i < 5; i++) {
//     document.getElementById("result").textContent = playRound();
//   }
  document.getElementById("result").textContent = playRound();
}

export default game();