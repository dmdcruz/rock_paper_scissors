let rounds = 0;
let computerScoreValue = 0;
let playerScoreValue = 0;


const roundResult = document.querySelector(".result");
const playerScore = document.querySelector(".playerScore");
const computerScore = document.querySelector(".computerScore");

const selectionBtn = document.querySelectorAll('button');
selectionBtn.forEach((button) => {

    button.addEventListener('click', () =>{   
        let playerSelection = button.id;
        let computerSelection = getComputerChoice();
        playRound(playerSelection,computerSelection);
        rounds ++;
        if (rounds == 5) {
            determinesWinner(playerScoreValue,computerScoreValue);
            selectionBtn.forEach(disablebtn => {
                disablebtn.setAttribute("disabled", " ");
            });
        };
    });
 });

 //Determines Full Game Winner!
function determinesWinner(userScore,computerScore) {
    let GameWinner;
    
    if (userScore > computerScore) {
        GameWinner = "Player Wins the game!"
    };
    if (userScore < computerScore) {
        GameWinner = "Computer Wins the game!"
    };
    if (userScore == computerScore) {
        GameWinner = "It's a tie!"
    };

    const divResult = document.createElement("div");
    divResult.textContent = GameWinner;
    const body = document.querySelector("body");
    body.appendChild(divResult); 
    //adicionar refresh btn and disable all the other buttons
    const btnReset = document.createElement("button");
    btnReset.textContent = 'Reset';
    body.appendChild(btnReset);
    btnReset.addEventListener('click', () =>{
        location.reload();
    });
};


//Determines the round winner!
function playRound(playerSelection,computerSelection) {
    if (computerSelection === playerSelection.toLowerCase()) {
        roundResult.textContent = roundResult.textContent + "Tie!";
    }
    if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            roundResult.textContent = "ROUND RESULT: " + "Computer wins!";
            computerScoreValue += 1;
            computerScore.textContent = "COMPUTER SCORE: " + computerScoreValue;
        }
        else {
            roundResult.textContent = "ROUND RESULT: " + "The Player wins!";
            playerScoreValue += 1;
            playerScore.textContent = "PLAYER SCORE: " + playerScoreValue;
            return "The Player wins!"
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
            roundResult.textContent = "ROUND RESULT: " + "Computer wins!";
            computerScoreValue += 1;
            computerScore.textContent = "COMPUTER SCORE: " + computerScoreValue;
        } else {
            roundResult.textContent = "ROUND RESULT: " + "The Player wins!";
            playerScoreValue += 1;
            playerScore.textContent = "PLAYER SCORE: " + playerScoreValue;
            return "The Player wins!"
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            roundResult.textContent = "ROUND RESULT: " + "Computer wins!";
            computerScoreValue += 1;
            computerScore.textContent = "COMPUTER SCORE: " + computerScoreValue;
        } else {
            roundResult.textContent = "ROUND RESULT: " + "The Player wins!";
            playerScoreValue += 1;
            playerScore.textContent = "PLAYER SCORE: " + playerScoreValue;
        }
    }
};
//Computer Choice
//Computer selects a random number between 0 and 0.9 and selects rock, paper or scissors depending on the randomized number

function getComputerChoice(computerChoice) {
    
    const choices = ["rock", "paper", "scissors"]
    return  computerChoice =choices[Math.floor(Math.random()*choices.length)]
}