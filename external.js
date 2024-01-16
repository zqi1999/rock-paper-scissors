console.log("Hello");

let moves = ['rock', 'paper', 'scissors', 'rock'];
let playerSelection = prompt("Choose a move: ", "rock");

function getComputerChoice() {
    let option = Math.floor(Math.random() * 3);
    console.log(moves[option]);
    return moves[option];
}

function playRound(playerSelection, computerSelection = getComputerChoice()) {
    
  }