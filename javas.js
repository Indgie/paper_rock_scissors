// user is asked to enter his choice "rock, paper or scissors"
// user enters his choice
// then computer makes move
// IF users choice is "rock" and computers is "paper"
//      announce that computer wins
// IF users choice is "rock" and computers is "scissors"
//      announce that user wins
// IF users choice is "rock" and computers is "rock"
//      announce that its a tie
// IF user "paper" and computer ""


function getComputerChoice() {
    let randomNumber = Math.random();
    console.log (randomNumber);
    let rock = "Rock";
    let paper = "Paper";
    let scissors = "Scissors";
    if (randomNumber < 0.33) {
        return rock;
    }
    else if (randomNumber >= 0.33 && randomNumber <= 0.66) {
        return paper;
    }
    else {
        return scissors;
    }
}

function playRound(playerSelection, computerSelection) {
    let won = "You won!";
    let loose = "You loose!";
    let tie = "It's a tie!";
    if (playerSelection == "rock" && computerSelection == "Rock") {
        return tie;
    }
    else if (playerSelection == "rock" && computerSelection == "Paper") {
        return loose;
    }
    else {
        return won;
    }
  }
   
  const playerSelection = "rock";
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));