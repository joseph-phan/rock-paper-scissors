let userScore = 0;
let cpuScore = 0;
let tie = 0;

function getComputerChoice() {
    const computerMove = ['rock', 'paper', 'scissors'];
    const random = Math.floor(Math.random() * computerMove.length);
    return (computerMove[random]);
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        tie++;
        return result = 'It is a tie! Try again!';
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        userScore++;
        return result = `Nice job! You chose ${playerSelection} and the computer chose ${computerSelection}`;
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        userScore++;
        return result = `Nice job! You chose ${playerSelection} and the computer chose ${computerSelection}`;
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        userScore++;
        return result = `Nice job! You chose ${playerSelection} and the computer chose ${computerSelection}`;
    } else {
        cpuScore++;
        return result = `Sorry! You chose ${playerSelection} and the computer chose ${computerSelection}`;
    }
}

function game() {
    for (i = 0; i < 5; i++) {
        console.log(playRound(prompt('Rock, Paper, or Scissors?:').toLowerCase(), getComputerChoice()));
        if (cpuScore) {
            console.log(point = `Score is ${userScore} to ${cpuScore}`);
        } else if (userScore) {
            console.log(point = `Score is ${userScore} to ${cpuScore}`);
        } else {
            console.log('No points given!');
        }
    }
    if (userScore > cpuScore) {
        console.log('Congrats! You are a winner!'); 
    } else {
        console.log('You lost! Better luck next time!');
    }
}


console.log(game());