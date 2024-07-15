function getComputerChoice(){

    let max = 3;
    let randomValue = Math.floor(Math.random() * max);
    
    switch(randomValue){
        case 0: 
            return "rock";
        case 1: 
            return "paper";
        case 2:
            return "scissors";
        default:
            return "Invalid choice";
    }
}

alert("Please choose either rock, paper, or scissor");

document.getElementById('rock').addEventListener('click', () => playRound('rock'));
document.getElementById('paper').addEventListener('click', () => playRound('paper'));
document.getElementById('scissor').addEventListener('click', () => playRound('scissors'));

function playRound(playerSelection) {

    let computerChoice = getComputerChoice();
    let resultMessage = "";

    if (playerSelection === computerChoice) {
        resultMessage = `It's a tie! Both chose ${playerSelection}!`;
    } else if (
        (playerSelection === "rock" && computerChoice === "scissors") ||
        (playerSelection === "paper" && computerChoice === "rock") ||
        (playerSelection === "scissors" && computerChoice === "paper")
    ) {
        resultMessage = `You win! ${playerSelection} beats ${computerChoice}.`;
        humanScore++;
    } else if (
        (computerChoice === "rock" && playerSelection === "scissors") ||
        (computerChoice === "paper" && playerSelection === "rock") ||
        (computerChoice === "scissors" && playerSelection === "paper")
    ) {
        resultMessage = `You lose! ${computerChoice} beats ${playerSelection}.`;
        computerScore++;
    } else {
        resultMessage = `Invalid choice: ${playerSelection}. Please choose rock, paper, or scissors.`;
    }

    displayResults(resultMessage);

    if (humanScore === 5) {
        displayResults("Congratulations! You won the game!");
        resetGame();
    } else if (computerScore === 5) {
        displayResults("The computer won the game! Better luck next time!");
        resetGame();
    }

}

function displayResults(message) {
    let resultsDiv = document.getElementById('results');

    if (!resultsDiv) {
        resultsDiv = document.createElement('div');
        resultsDiv.setAttribute('id', 'results');
        document.body.appendChild(resultsDiv);
    }

    resultsDiv.innerHTML = `
        <p>${message}</p>
        <p>Scores - Human: ${humanScore}, Computer: ${computerScore}</p>
    `;
}




function playGame() {

    let = humanScore = 0;
    let = computerScore = 0;
    displayResults("Game reset. Please choose either rock, paper, or scissor.");

}

function resetGame() {


    humanScore = 0;
    computerScore = 0;
}


playGame();

