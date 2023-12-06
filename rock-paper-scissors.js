let userScore = parseInt(0);
let computerScore = parseInt(0);

function getComputerChoice() {
    const computerMove = ['rock', 'paper', 'scissors'];
    const random = Math.floor(Math.random() * computerMove.length);
    return (computerMove[random]);
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return result = 'It is a tie! Try again!';
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        userScore++;
        return result = `Congrats! You win! You chose ${playerSelection} and the computer chose ${computerSelection}`;
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        userScore++;
        return result = `Congrats! You win! You chose ${playerSelection} and the computer chose ${computerSelection}`;
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        userScore++;
        return result = `Congrats! You win! You chose ${playerSelection} and the computer chose ${computerSelection}`;
    } else {
        computerScore++;
        return result = `You lose! You chose ${playerSelection} and the computer chose ${computerSelection}`;
    }
}

function game() {
    for (i = 0; i < 5; i++) {
        console.log(playRound(prompt('Rock, Paper, or Scissors?:').toLowerCase(), getComputerChoice()));
        if (userScore = 1++) {
            console.log('You got a point!');
        } else {
            console.log('The computer got a point!');
        }
    }
}


console.log(game());