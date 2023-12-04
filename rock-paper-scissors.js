function getComputerChoice() {
    const computerMove = ['rock', 'paper', 'scissors'];
    const random = Math.floor(Math.random() * computerMove.length);
    return (random, computerMove[random]);
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection > computerSelection) {
        return result = 'You win!';
    } else if (playerSelection == computerSelection) {
        return result = 'It\'s a tie! Try again!';
    } else {
        return result = 'You lose!';
    }
}