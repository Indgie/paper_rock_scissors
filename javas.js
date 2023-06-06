


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
  }

  //ko man reikia!!! Funkcijos, kuri, 5 kartus paleistu zaidima ir issaugotu rezultata, funkcijos, kuri paskelbtu galutini laimetoja


  let userScore = 0;
  let computerScore = 0;
  function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Please choose rock, paper or scissors").toLowerCase();
        console.log("You chose " + playerSelection);
        const computerSelection = getComputerChoice();
        console.log("Computer chose " + computerSelection);
        const roundResult = playRound(playerSelection, computerSelection);
        console.log(roundResult);
        if (roundResult == won) {
            userScore = userScore + 1;
            computerScore = computerScore + 0;
            console.log("Your score is " + userScore + "\nComputer score is " + computerScore);
            console.log(" ");
            
        }
        else if (roundResult == loose) {
            userScore = userScore + 0;
            computerScore = computerScore + 1;
            console.log("Your score is " + userScore + "\nComputer score is " + computerScore);
            console.log(" ");
            
        }
        else if (roundResult == tie) {
            userScore = userScore + 0;
            computerScore = computerScore + 0;
            console.log("Your score is " + userScore + "\nComputer score is " + computerScore);
            console.log(" ");
        }
    }
  }

  game();

