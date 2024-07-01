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


function getHumanChoice(){

    let choice = prompt("Please enter either rock, paper, or scissors.", "");

   /* if (choice == "rock"){
        console.log("You chose rock");

    }
    else if (choice == "paper"){
        console.log("You chose paper");

    }
    else if (choice == "scissors")
    {
        console.log("You chose scissors")

    } */

    return choice;

}
 
console.log(getHumanChoice());

