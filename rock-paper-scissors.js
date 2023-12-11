let userScore = 0;
let cpuScore = 0;

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
        return result = `Nice job! You chose ${playerSelection} and the computer chose ${computerSelection}.`;
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        userScore++;
        return result = `Nice job! You chose ${playerSelection} and the computer chose ${computerSelection}.`;
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        userScore++;
        return result = `Nice job! You chose ${playerSelection} and the computer chose ${computerSelection}.`;
    } else {
        cpuScore++;
        return result = `Sorry! You chose ${playerSelection} and the computer chose ${computerSelection}.`;
    }
}

function game() {
    for (i = 0; i < 5; i++) {
        let roundResult = (playRound(prompt('Rock, Paper, or Scissors?:').toLowerCase(), getComputerChoice()));
        console.log(roundResult);
        while(roundResult.includes('Try again!')) {
            roundResult = (playRound(prompt('Rock, Paper, or Scissors?:').toLowerCase(), getComputerChoice()))
            console.log(roundResult);
        }
        console.log(point = `You: ${userScore} CPU: ${cpuScore}`);
    }

    if (userScore > cpuScore) {
        console.log('Congrats! You are a winner!'); 
    } else {
        console.log('You lost! Better luck next time!');
    }
}


console.log(game());