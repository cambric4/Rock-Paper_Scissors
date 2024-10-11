// Write a function that randomly returns "rock", "paper", or "scissors"
// New function getComputerChoice will randomly return on of the string values
// Math.random returns a random number that is >==0 and < 1, Use this to your advantage
// Test function returns with console.log()

const choices = (`rock`, `paper`, `scissors`);

function getComputerChoice() {
    let random = Math.random();
    if (random < 0.34) {
        return `rock`;
    } else if (random <= 0.67) {
        return `paper`;
    } else {
        return `scissors`;
    }
}

// Game to be played by human player. Write a function that takes user choice and returns it

function getHumanChoice() {
    const humanChoice = prompt(`Choose Rock, Paper or Scissors:`).toLowerCase();   
    if ( humanChoice === `rock`||
         humanChoice === `paper`||
         humanChoice === `scissors`
    ) {
    return humanChoice
    } else {
    alert(`Sorry, Invalid Choice! Please try again!`);
    return getHumanChoice();
    }
}

//Game is played round by round, shown with play Round

function playRound (humanInput, computerInput) {
   if (humanInput === computerInput) {
    alert(`You tied \n ${humanInput} = ${computerInput}.`);
    return `Tie`;
   }
   else if (humanInput === `rock` && computerInput === `scissors` ||
            humanInput === `paper` && computerInput === `rock` ||
            humanInput === `scissors` && computerInput === `paper`) {
        alert (`You win! \n${humanInput} beats \n${computerInput}.`);
        return `win`;
    }
    else {
        alert(`You lose! \n${humanInput} loses to ${computerInput}.`);
        return `loss`;
    }
}

// playGame function to make it all work, with only 5 rounds

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let humanInput = getHumanChoice();
        let computerInput = getComputerChoice();
        let outcome = playRound(humanInput, computerInput);
        if (outcome === `win`) {
            humanScore++;
        }
        else if (outcome === `loss`) {
            computerScore++;
        }
    }
    if (humanScore === computerScore) {
        alert(`The game was a tie!\nScore: ${humanScore} - ${computerScore}`);
    }
    else if (humanScore > computerScore) {
        alert (`Congratulations you won!\nScore: ${humanScore} - ${computerScore}`);
    }
    else {
        alert (`Sorry you lose!\nScore: ${humanScore} - ${computerScore}`);
    }
}

playGame();