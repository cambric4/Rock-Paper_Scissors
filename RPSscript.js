// Write a function that randomly returns "rock", "paper", or "scissors"
// New function getComputerChoice will randomly return on of the string values
// Math.random returns a random number that is >==0 and < 1, Use this to your advantage
// Test function returns with console.log()

const choices = ("Rock", "Paper", "Scissors");

function getComputerChoice() {
    let computerSelection = Math.floor(Math.random()*3);
    if (computerSelection === 0) {
        return "rock";
    } else if (computerSelection === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

// Game to be played by human player. Write a function that takes user choice and returns it

function getHumanChoice() {
    const humanSelection = prompt('Choose Rock, Paper or Scissors:').toLowerCase();
    if ( humanSelection === 'rock'||
         humanSelection === 'paper'||
         humanSelection === 'scissors'
    ) {
        return humanSelection.charAt(0).toUpperCase() + humanSelection.slice(1);
    } else {
        alert('Sorry, Invalid Choice! Please try again!');
        return getHumanChoice();
    }
}

//Game will keep track of players score with humanScore and computerScore

let humanScore= 0
let computerScore= 0

//Game is played round by round, shown with play Round
//playGame function to make it all work

function playRound() {
    const humanInput=getHumanChoice();
    const computerInput=getComputerChoice();
    if (humanInput === 'rock') {
        if (computerInput === 'paper') {
            computerScore++;
            alert('Computer wins! Paper beats Rock')
        }
        else if (computerInput == 'scissor') {
            humanScore++;
            alert('You win! Rock beats Scissors')           
        }
        else {
            alert('Draw')
        }
    }
    if (humanInput === 'paper') {
        if (computerInput === 'scissor') {
            computerScore++;
            alert('Computer wins! Scissors beats paper')
        }
        else if (computerInput === 'rock') {
            humanScore++;
            alert('You win! Paper beats rock')
        }
        else {
            alert('Draw')
        }
    }
    if (humanInput === 'scissor') {
        if (computerInput === 'rock') {
            computerScore++;
            alert('Computer wins! Rock beats scissor')
        }
        else if (computerInput === 'paper') {
            humanScore++;
            alert ('You win! Scissor beats paper')
        }
        else {
            alert ('Draw')
        }
    }
}

const humanInput= getHumanChoice();
const computerInput = getComputerChoice();

playRound (humanInput, computerInput);

function playGame() {
    while (humanScore < 5 && computerScore <5) {
        const humanInput= getHumanChoice();
        const computerInput = getComputerChoice();
        const winner = playRound(humanInput, computerInput);
        alert( 'You Chose: ${humanInput)}\nComputer chose: ${computerInput}\nWinner: ${winner}\nYour Score: ${humanScore}\nComputer score: ${computerScore}');
    }
}

playGame();