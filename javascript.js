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

console.log(getComputerChoice());
