
const choices = (`rock`, `paper`, `scissors`);
const humanDisplay = document.getElementById(`humanDisplay`);
const computerDisplay = document.getElementById(`computerDisplay`);
const outcomeDisplay = document.getElementById(`outcomeDisplay`);
const humanscoreDisplay = document.getElementById(`humanscoreDisplay`);
const computerscoreDisplay = document.getElementById(`computerscoreDisplay`);

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

function playRound (humanInput, computerInput) {
   if (humanInput === computerInput) {
    return `Tie`;
   }
   else if (humanInput === `rock` && computerInput === `scissors` ||
            humanInput === `paper` && computerInput === `rock` ||
            humanInput === `scissors` && computerInput === `paper`) {
        return `win`;
    }
    else {
        return `loss`;
    }
}

function playGame() {
    let humanInput = getHumanChoice();
    let computerInput = getComputerChoice();
    let outcome = playRound();
    let humanScore = 0;
    let computerScore = 0;
    humanDisplay.textContent = `Human: ${humanInput}`;
    computerDisplay.textContent = `Computer: ${computerInput}`;
    outcomeDisplay.textContent = outcome;

    outcomeDisplay.classList.remove(`greenText`,`redText`);
    switch (outcome) {
        case `win`: 
            outcomeDisplay.classList.add(`greenText`);
            humanScore++;
            humanscoreDisplay.textContent = humanScore;
            break;
        case `lose`:
            outcomeDisplay.classList.add(`redText`);
            computerScore++;
            computerscoreDisplay.textContent = computerScore;
            break;
    }
    
}
function resetGame() {
    humanScore = 0;
    computerScore = 0;
    humanscoreDisplay.textContent = humanScore;
    computerscoreDisplay.textContent = computerScore;
    humanDisplay.textContent = `Human:`;
    computerDisplay.textContent = `Computer:`;
    outcomeDisplay.textContent = ``;
    outcomeDisplay.classList.remove(`greenText`, `redText`);3
}

playGame();