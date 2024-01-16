console.log("Hello");

let moves = ['rock', 'paper', 'scissors'];
let playerPromptSelection = prompt("Choose a move: ", "rock");

function getComputerChoice() {
    let option = Math.floor(Math.random() * 3);
    console.log(`Computer selects ${moves[option]}`);
    return option;
}

function playRound(playerSelection = playerPromptSelection, computerSelection = getComputerChoice()) {
    console.log(`Player: ${playerSelection}     Computer: ${moves[computerSelection]}`)
    let playerIndex = moves.indexOf(playerSelection);
    if (playerIndex == moves.length - 1 && computerSelection == 0) {
        
    }
    if (computerSelection == moves.length - 1 && playerIndex == 0) {

    }
}