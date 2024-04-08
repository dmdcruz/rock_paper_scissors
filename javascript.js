//Computer Choice
//Computer selects a random number between 0 and 0.9 and selects rock, paper or scissors depending on the randomized number


function getComputerChoice(computerChoice) {
    
    //if (computerChoice < 0.3) {
    //    return computerChoice = "rock"
   // }
    //else if (computerChoice <= 0.6) {
      //  return computerChoice = "paper"
    //}
    //else {
      //  return computerChoice = "scissors"
    //}
    
    const choices = ["rock", "paper", "scissors"]
    return  computerChoice =choices[Math.floor(Math.random()*choices.length)]
}



//Determines the Winner

function determineWinner(playerSelection,computerSelection) {
    if (computerSelection === playerSelection.toLowerCase()) {
        return "The game was a tie"
    }
    if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            return "Computer wins!"
        }
        else {
            return "The Player wins!"
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
            return "Computer wins!"
        } else {
            return "The Player wins!"
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            return "Computer wins!"
        } else {
           return "The Player wins!"
        }
    }
}

//Play Game
//alert (determineWinner(playerSelection, computerSelection))

for (let index = 0; index < 5; index++) {
    let playerSelection = prompt("Rock, Paper or Scissors? What do you choose?");
    let computerSelection = getComputerChoice()
    alert (determineWinner(playerSelection, computerSelection))
}
