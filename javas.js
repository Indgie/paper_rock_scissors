
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

  //DOM manipulation, play 5 rounds
  let userScore = 0;
  let computerScore = 0;
  let round = 1;
  
  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) =>
      button.addEventListener("click", () => {
          if (userScore < 5 && computerScore < 5) {
              const playerSelection = getUserChoice(button.id);
              const userChoice = document.querySelector(".user-choice");
              userChoice.textContent = "You chose " + playerSelection;
              const computerSelection = getComputerChoice();
              const computerChoice = document.querySelector(".computer-choice");
              computerChoice.textContent = "Computer chose " + computerSelection;
              const roundResult = playRound(playerSelection, computerSelection);
              const finalRoundResult = document.querySelector(".round-result");
              finalRoundResult.textContent = roundResult;
              //console.log(roundResult);
  
              if (roundResult === won) {
                  userScore++;
              } else if (roundResult === loose) {
                  computerScore++;
              }
              const userResult = document.querySelector(".user-score");
              userResult.textContent = "Your score is " + userScore;
              const computerRes = document.querySelector(".computer-score");
              computerRes.textContent = "Computer score is " + computerScore;
          }
  
          if (userScore === 5) {
                const finalRoundResult = document.querySelector(".round-result");
                finalRoundResult.replaceChildren(); //remove round result input
                const announceResult = document.querySelector(".final-result")
                announceResult.textContent = "Congratulations! You won against the computer!";
          } else if (computerScore === 5) {
                const finalRoundResult = document.querySelector(".round-result");
                finalRoundResult.replaceChildren(); //remove round result input
                const announceResult = document.querySelector(".final-result")
                announceResult.textContent = "Computer won, try again!";
          }
      })
  );

// refresh page
  document.addEventListener('keyup', event => {
    if (event.code === 'Space') {
        location.reload();
    }
  });




