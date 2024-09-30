// Write a function that randomly returns "rock", "paper", or "scissors"
// New function getComputerChoice will randomly return on of the string values
// Math.random returns a random number that is >==0 and < 1, Use this to your advantage
// Test function returns with console.log()

const choices = ("Rock", "Paper", "Scissors");

function getComputerChoice() {
    let randomChoice = Math.floor(Math.random()*3);
    if (randomChoice === 0) {
        return "rock";
    } else if (randomChoice === 1) {
        return "paper";
    } else {
        return "scissor";
    }
}

// Game to be played by human player. Write a function that takes user choice and returns it

function getHumanChoice() {
    let humanInput;
    do {
        humanInput = prompt('Pick one: rock, paper, scissors').toLowerCase();
    } while (choices.includes(humanInput));
    return humanInput;
} 
console.log(humanInput)