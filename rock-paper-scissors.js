function getComputerChoice() {
    const computerMove = ['rock', 'paper', 'scissors'];
    const random = Math.floor(Math.random() * computerMove.length);
    return (computerMove[random]);
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return result = 'It is a tie! Try again!';
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        return result = 'Congrats! You win!';
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        return result = 'Congrats! You win!';
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        return result = 'Congrats! You win!';
    } else {
        return result = 'You lose!';
    }
}

function game() {
    for (i = 0; i <= 5; i++);
    playRound();
    let playerInput = (prompt('Enter your option:', ''));
    let point = 1;
    if (result = 'Congrats! You win!' + point) {
        return console.log('Point goes to you!');
    } else {
        return console.log('Point goes to CPU!');
    }
}

console.log(game());