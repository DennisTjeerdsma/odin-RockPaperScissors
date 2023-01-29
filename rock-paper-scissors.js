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
};

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
};

let playRound = (event) => {
    let computerSelection = GetComputerGuess();
    let playerSelection = event.target.id.toUpperCase();

    if ((playerSelection === 'ROCK' && computerSelection === 'SCISSORS') || 
    (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') ||
    (playerSelection === 'PAPER' && computerSelection === 'ROCK')) {
        playerScore++;
        displayResult(`You Win! ${playerSelection} beats ${computerSelection}`, 1);
    } else if ((computerSelection === 'ROCK' && playerSelection === 'SCISSORS' )||
            (computerSelection === 'SCISSORS' && playerSelection === 'PAPER' )||
            (computerSelection === 'PAPER' && playerSelection === 'ROCK')) {
        computerScore++;
        displayResult(`You Lose! ${computerSelection} beats ${playerSelection}`, 2);
    } else {
        displayResult('Tie!', 0);
    };
};

let displayResult = (text, colorCode) => {
    const temp = document.createElement('p');
    const resultsElement = document.getElementById('results');
    temp.textContent = text;

    if (colorCode === 1) {
        temp.style.color = 'green';
        document.getElementById('playerScore').textContent = playerScore;
    } else if (colorCode === 2) {
        temp.style.color = 'red';
        document.getElementById('computerScore').textContent = computerScore;;
    }
    else {temp.style.color = 'orange'};
    resultsElement.appendChild(temp);

    if (playerScore === 5) {
        const temp2 = document.createElement('p');
        temp2.textContent = 'You win the game!';
        temp2.style.color = 'green';
        temp2.style.fontSize =20;
        resultsElement.appendChild(temp2);
    } else if (computerScore === 5) {
        const temp2 = document.createElement('p');
        temp2.textContent = 'You lose the game!';
        temp2.style.color = 'red';
        temp2.style.fontSize =20;
        resultsElement.appendChild(temp2);
    }; 
}

function resetGame() {
    count = 0;
    playerScore = 0;
    computerScore = 0;
    document.getElementById('playerScore').textContent = playerScore;
    document.getElementById('computerScore').textContent = computerScore;;

}

function game() {


    const buttonElements = document.querySelectorAll('.btn');
    let playing = true;
    
    buttonElements.forEach(btn => {
        btn.addEventListener('click', playRound);
    });

    const resetButton = document.querySelector('#reset');
    resetButton.addEventListener('click', resetGame);
};

game();