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


function getHumanChoice(){

    let choice = prompt("Please enter either rock, paper, or scissors.");

    return choice;

}

let = humanScore = 0;
let = computerScore = 0;

function playRound() {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();

    if (humanChoice === computerChoice) {
        console.log(`It's a tie! Both chose ${humanChoice}!`);
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
        humanScore++;
    } else if (
        (computerChoice === "rock" && humanChoice === "scissors") ||
        (computerChoice === "paper" && humanChoice === "rock") ||
        (computerChoice === "scissors" && humanChoice === "paper")
    ) {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
        computerScore++;
    } else {
        console.log(`Invalid choice: ${humanChoice}. Please choose rock, paper, or scissors.`);
    }
}

playRound();

console.log(`Your score is now ${humanScore}`);
console.log(`The computer score is ${computerScore}`)