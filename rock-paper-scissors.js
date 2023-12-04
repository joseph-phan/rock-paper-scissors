function getComputerChoice() {
    const computerMove = ['rock', 'paper', 'scissors'];
    const random = Math.floor(Math.random() * computerMove.length);
    return (random, computerMove[random]);
}