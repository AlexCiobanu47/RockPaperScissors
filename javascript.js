function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3);
    if(choice === 0){
        return "rock";
    }
    else if(choice === 1){
        return "paper";
    }
    else{
        return "scissors";
    }
}
function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    let result = "";
    if(playerSelection === computerSelection){
        result = "Tie!" + " Both players selected " + computerSelection;
    }
    else if((playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")){
        result = "You won!" + playerSelection + " beats " + computerSelection;
    }
    else{
        result = "You lost!" + computerSelection + " beats " + playerSelection;
    }
    return result;
}
function game(){
    let playerScore = 0, computerScore = 0;
    for(let i = 0; i < 5; i++){
        let playerChoice = prompt("Select:");
        const computerChoice = getComputerChoice();
        let result = playRound(playerChoice, computerChoice);
        console.log(result);
        if(result.charAt(4) === 'w'){
            playerScore++;
        }
        if (result.charAt(4) == 'l'){
            computerScore++;
        }
    }
    console.log("Player score: " + playerScore);
    console.log("Computer score: " + computerScore);
}
game();
