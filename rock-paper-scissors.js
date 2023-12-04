function getComputerChoice() {
    const computerMove = ['rock', 'paper', 'scissors'];
    const random = Math.floor(Math.random() * computerMove.length);
    return (computerMove[random]);
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection > computerSelection) {
        return result = 'You win!';
    } else if (playerSelection < computerSelection) {
        return result = 'You lose!';
    } else {
        return result = 'It\'s a tie!';
    }
}

function game() {
    for (i = 0; i <= 5; i++) {
        playRound()
    }
}