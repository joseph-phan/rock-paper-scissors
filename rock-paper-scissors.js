function getComputerChoice() {
    const computerMove = ['rock', 'paper', 'scissors'];
    const random = Math.floor(Math.random() * computerMove.length);
    return (computerMove[random]);
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'rock' && computerSelection == 'scissors') {
        return result = 'You win!';
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
        return result = 'You lose!';
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        return result = 'You lose!';
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        return result = 'You win!';
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        return result = 'You win!';
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        return result = 'You lose!';
    } else {
        return result = 'It\'s a tie!';
    }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
console.log(getComputerChoice());