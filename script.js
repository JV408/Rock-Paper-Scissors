//Starting Values and selection prompts//

//let playerSelection = prompt('Choose Rock, Paper, or Scissors!');
//playerSelection = playerSelection.toLowerCase();
let selection = ['rock', 'paper', 'scissors'];

//shortcut for computer to pick random//

function getComputerChoice(selection) {
    let computerSelection = selection[Math.floor(Math.random() * selection.length)];
    return computerSelection;
}

//compare player and computer selection//

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
            return result = 'tie'
            
  } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper') 
  ) {   
            return result = 'win';
  } else if (
        (playerSelection === 'rock' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'rock')
  ) {
            return result = 'lose';
  } else {
        console.log('Invalid selection. Choose again.')
  }
}

//to keep score//

let playerScore = 0;
let computerScore = 0;
let tieScore = 0;

function playGame() {
    let playerSelection = prompt('Choose Rock, Paper, or Scissors!');
    playerSelection = playerSelection.toLowerCase();
    let computerSelection = getComputerChoice(selection);
    let result = playRound(playerSelection, computerSelection);
    if (result === 'tie') {
        tieScore++;
        console.log(`Tie Score: ${tieScore}`)
        console.log('Tie!');
  } else if (result === 'win') {
        playerScore++;
        console.log(`Player Score: ${playerScore}`)
        console.log(`You win! ${playerSelection} beats ${computerSelection}`);
  } else if (result === 'lose') {
        computerScore++;
        console.log(`Computer Score: ${computerScore}`)
        console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
  }
}

playGame();
playGame();
playGame();
playGame();
playGame();
