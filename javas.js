


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
  // SAVE computer choice in new variable
  const computerSelection = getComputerChoice();

  // PRINT computer choice for user //
  console.log ("Computer chose " + computerSelection);

  // FUNCTION
  const playerSelection = prompt("Please choose rock, paper or scissors").toLowerCase();
  function game () {
    console.log ("You chose " + playerSelection);
  }

  game ();
  // PROMPT user for input //
  //const playerSelection = prompt("Please choose rock, paper or scissors").toLowerCase();



  // PRINT results //
  console.log(playRound(playerSelection, computerSelection));
