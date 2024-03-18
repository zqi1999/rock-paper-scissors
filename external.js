let moves = ["Rock", "Paper", "Scissors"];
const choices = document.querySelector("#choices");

var player = 0;
var computer = 0;

function getComputerChoice() {
  let option = Math.floor(Math.random() * 3);
  console.log(`Computer selects ${moves[option]}`);
  return option;
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.substring(1);
}

function validateInput() {
  let playerInput = capitalize(
    prompt("Choose a move (Rock, Paper, Scissors): ").toLowerCase()
  );
  while (!moves.includes(playerInput)) {
    playerInput = capitalize(
      prompt(
        "Invalid move! Choose a move (Rock, Paper, Scissors): "
      ).toLowerCase()
    );
  }
  return playerInput;
}

function playRound(playerSelection, computerSelection = getComputerChoice()) {
  console.log(
    `Player: ${playerSelection}     Computer: ${moves[computerSelection]}`
  );
  choices.textContent = `You chose: ${playerSelection}                  Computer chose: ${moves[computerSelection]}`;
  let playerIndex = moves.indexOf(playerSelection);
  if (playerIndex == moves.length - 1 && computerSelection == 0) {
    computer = computer + 1;
    return `You Lose! ${moves[computerSelection]} beats ${playerSelection}`;
  } else if (computerSelection == moves.length - 1 && playerIndex == 0) {
    player++;
    return `You Won! ${playerSelection} beats ${moves[computerSelection]}`;
  } else if (computerSelection == playerIndex) {
    return `Tie Game! ${playerSelection} and ${moves[computerSelection]}`;
  }
  if (playerIndex > computerSelection) {
    player++;
    return `You Won! ${playerSelection} beats ${moves[computerSelection]}`;
  } else {
    computer++;
    return `You Lose! ${moves[computerSelection]} beats ${playerSelection}`;
  }
}


  const buttons = document.querySelectorAll("button");

  document.querySelector(
    "#points"
  ).textContent = `Player points: ${player}         Computer points: ${computer}`;
  buttons.forEach((button) => {
    // and for each one we add a 'click' listener
    button.addEventListener("click", () => {
      document.getElementById("result").textContent = playRound(
        capitalize(button.id)
      );
      document.querySelector(
        "#points"
      ).textContent = `Player points: ${player}         Computer points: ${computer}`;

      if (computer == 5) {
        alert("You LOST")
        player = 0;
        computer = 0;
      }
      
      if (player == 5) {
        alert("You WON")
        player = 0;
        computer = 0;
      }
    });
  });

