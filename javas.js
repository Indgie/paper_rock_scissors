


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

function playRound(playerSelection, computerSelection) {
    let won = "You won!";
    let loose = "You loose!";
    let tie = "It's a tie!";

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
  // SAVE computer choice in new variable and print it
  const computerSelection = getComputerChoice();
  console.log ("Computer chose " + computerSelection);

  // PROMPT user for input and print it//
    const playerSelection = prompt("Please choose rock, paper or scissors").toLowerCase();
    console.log ("You chose " + playerSelection);


  // SAVE round result in new variable and print it //
  const roundResult = playRound(playerSelection, computerSelection);
  console.log(roundResult);
