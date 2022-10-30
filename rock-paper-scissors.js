/*
PROGRAM PLAYING A ROCK-PAPER-SCISSORS GAME
THE GAME WILL CREATE A COMPUTERGUESS THROUGH A FUNCTION 
THE GAME WILL ASK THE USER FOR AN INPUT
BASED ON THE INPUT OF THE PLAYER AND THE COMPUTER A WINNER WILL BE DETERMINED
WINNER WILL GAIN 1 POINT
*/

let count = 0
let playerScore = 0
let computerScore = 0

let GetPlayerGuess = () => {
    let guess = prompt('Please enter your guess: ');
    return guess.toUpperCase();
}

let GetComputerGuess = () => {
    let guess = Math.floor(Math.random() * 3);

    switch (guess) {
        case 0:
            return 'ROCK';
        case 1:
            return 'PAPER';
        case 2:
            return 'SCISSORS'   
    } 
}

let playRound = (playerSelection, computerSelection) => {
    if ((playerSelection === 'ROCK' && computerSelection === 'SCISSORS') || 
    (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') ||
    (playerSelection === 'PAPER' && computerSelection === 'ROCK')) {
        playerScore++;
        return `You Win! ${playerSelection} beats ${computerSelection}`
    } else if ((computerSelection === 'ROCK' && playerSelection === 'SCISSORS' )||
            (computerSelection === 'SCISSORS' && playerSelection === 'PAPER' )||
            (computerSelection === 'PAPER' && playerSelection === 'ROCK')) {
        computerScore++;
        return `You Lose! ${computerSelection} beats ${playerSelection}`
    } else {
        return 'Tie!';
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        let playerGuess = GetPlayerGuess();
        let computerGuess = GetComputerGuess();

        let result = playRound(playerGuess, computerGuess);
        console.log(result)
    }

    if (playerScore > computerScore) {
        console.log(`You Win! ${playerScore}:${computerScore}`)
    } else if (playerScore === computerScore) {
        console.log("It's a tie!");
    } else {
        console.log(`You Lose! ${playerScore}:${computerScore}`)
   }
};

game();