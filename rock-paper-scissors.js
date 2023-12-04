function getComputerChoice() {
    const computerMove = [rock, paper, scissors];
    const random = Math.floor(Math.random() * computerMove.length);
    console.log(getComputerChoice());
}