/*
PROGRAM PLAYING A ROCK-PAPER-SCISSORS GAME
THE GAME WILL CREATE A COMPUTERGUESS THROUGH A FUNCTION 
THE GAME WILL ASK THE USER FOR AN INPUT
BASED ON THE INPUT OF THE PLAYER AND THE COMPUTER A WINNER WILL BE DETERMINED
WINNER WILL GAIN 1 POINT
*/

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

let GetPlayerGuess = () => {
    let guess = prompt('Please enter your guess: ');
    return guess.toUpperCase();
}

let determineWinner = (playerScore, computerScore) => {
    if (playerScore > computerScore) {
        alert(`You won the game! Player: ${playerScore}, computer: ${computerScore}`)
    } else if (playerScore < computerScore) {
        alert(`You lost the game! Player: ${playerScore}, computer: ${computerScore}`)
    } else {
        alert('It\'s a tie!');
    }
}


count = 0
playerScore = 0
computerScore = 0

while (count < 5) {
    let playerGuess = GetPlayerGuess();
    let computerGuess = GetComputerGuess();

    if (playerGuess === 'ROCK' && computerGuess === 'ROCK' || playerGuess === 'PAPER' && computerGuess === 'PAPER' || playerGuess === "SCISSORS" && computerGuess === 'SCISSORS') {
        alert('This round is a tie!')
    } else if (playerguess = 'ROCK' && computerGuess === 'PAPER' || playerGuess === 'PAPER' && computerGuess === 'SCISSORS' || playerGuess === "SCISSORS" && computerGuess === 'ROCK') {
        alert("You lost this round!")
        computerScore++;
    } else if (playerGuess === 'ROCK' && computerGuess === 'SCISSORS' || playerGuess === 'PAPER' && computerGuess === 'ROCK' || playerGuess === "SCISSORS" && computerGuess === 'PAPER') {
        alert('You won this round!')
        playerScore++;
    }

    count++;
}

determineWinner(playerScore, computerScore);

