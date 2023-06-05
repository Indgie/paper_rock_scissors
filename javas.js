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


function getComputerChoice () {
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

console.log (getComputerChoice())