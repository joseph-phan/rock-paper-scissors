let userScore = 0;
let cpuScore = 0;
let tie;

function getComputerChoice() {
    const computerMove = ['rock', 'paper', 'scissors'];
    const random = Math.floor(Math.random() * computerMove.length);
    return (computerMove[random]);
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        tie = 0;
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
        cpuScore++;
        return result = `You lose! You chose ${playerSelection} and the computer chose ${computerSelection}`;
    }
}

function game() {
    for (i = 0; i < 5; i++) {
        console.log(playRound(prompt('Rock, Paper, or Scissors?:').toLowerCase(), getComputerChoice()));
        if (tie = 0) {
            console.log(point = 'No points given!');
        } else if (userScore) {
            console.log(point = `Score is ${userScore} to ${cpuScore}`);
        } else {
            console.log(point = `Score is ${userScore} to ${cpuScore}`)
        }
    }
    if (userScore > cpuScore) {
        console.log('Congrats! You are a winner!'); 
    } else {
        console.log('You lost! Better luck next time!');
    }
}


console.log(game());