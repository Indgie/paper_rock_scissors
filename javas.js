
// FUNCTION that makes random computer choice //

function getComputerChoice() {
    let randomNumber = Math.random();
    let rock = "rock";
    let paper = "paper";
    let scissors = "scissors";

    if (randomNumber < 0.33) {
        return rock;
    }
    else if (randomNumber >= 0.33 && randomNumber <= 0.66) {
        return paper;
    }
    else if (randomNumber > 0.66) {
        return scissors;
    }   
    }
// FUNCTION that gets user choice 
function getUserChoice(userChoice) {
    return userChoice;

}
// FUNCTION that plays one round user against computer //
let won = "You won!";
let loose = "You loose!";
let tie = "It's a tie!";

function playRound(playerSelection, computerSelection) {


    if (playerSelection === computerSelection) {
        return tie;
        
    }
    else if ((playerSelection === "rock" && computerSelection === "paper") ||
            (playerSelection === "paper" && computerSelection === "scissors") ||
            (playerSelection === "scissors" && computerSelection === "rock")) {
        return loose;
    }
    else {
        return won;
    }
  };

  //DOM manipulation
  let userScore = 0;
  let computerScore = 0;
  let round = 1;
  
  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) =>
      button.addEventListener("click", () => {
          if (userScore < 5 && computerScore < 5) {
              const playerSelection = getUserChoice(button.id);
              console.log("You chose " + playerSelection);
              const computerSelection = getComputerChoice();
              console.log("Computer chose " + computerSelection);
              const roundResult = playRound(playerSelection, computerSelection);
              console.log(roundResult);
  
              if (roundResult === won) {
                  userScore++;
              } else if (roundResult === loose) {
                  computerScore++;
              }
  
              console.log("Your score is " + userScore);
              console.log("Computer score is " + computerScore);
              console.log(" ");
          }
  
          if (userScore === 5) {
              console.log("Congratulations! You won against the computer!");
          } else if (computerScore === 5) {
              console.log("Computer won, try again!");
          }
      })
  );




