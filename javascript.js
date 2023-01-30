let playerScore = 0, computerScore = 0;

const rockbutton = document.querySelector('.rock');
const paperbutton = document.querySelector('.paper');
const scissorsbutton = document.querySelector('.scissors');
const playerScoreText = document.querySelector('.player-score');
const computerScoreText = document.querySelector('.computer-score');
const resultText = document.querySelector('.result-text');
const winnerText = document.querySelector('.winner-text');
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
        result = "You won! " + playerSelection + " beats " + computerSelection;
        playerScore++;
        if(playerScore >= 5){
            winnerText.innerHTML = "This winner is: player";
        }
    }
    else{
        result = "You lost! " + computerSelection + " beats " + playerSelection;
        computerScore++;
        if(computerScore >= 5){
            winnerText.innerHTML = "The winner is: computer";
        }
    }

    resultText.innerHTML = result;
    playerScoreText.innerHTML = "Player score: " + playerScore;
    computerScoreText.innerHTML = "Computer score: " + computerScore;
    
    return result;
}
function game(){
    rockbutton.addEventListener('click', () =>{
        const computerChoice = getComputerChoice();
        const userChoice = 'rock';
        playRound(userChoice, computerChoice);
    });
    paperbutton.addEventListener('click', () =>{
        const computerChoice = getComputerChoice();
        const userChoice = 'paper';
        playRound(userChoice, computerChoice);
    });
    scissorsbutton.addEventListener('click', () => {
        const computerChoice = getComputerChoice();
        const userChoice = 'scissors';
        playRound(userChoice, computerChoice);
    });

}
game();
