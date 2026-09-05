/* Rock paper scissor */

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let randomnumber = Math.random()

    if (randomnumber <= 0.33) {
        return "rock";
    } else if (randomnumber > 0.33 && randomnumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    const choice = prompt("Rock, Paper or Scissors?")
    return choice.toLowerCase();
}

function playRound(humanChoice, computerChoice) {

    /* console.log(`human: ${humanChoice} computer: ${computerChoice}`);   << ------ USED FOR DEBUGGING EARLY STAGES */

    switch (humanChoice) {
        case "rock":
            if (computerChoice === "rock") {
                console.log("Draw!");
            } else if (computerChoice === "scissors") {
                console.log("You won, rock beats scissors!");
                humanScore += 1;
            } else {
                console.log(`You lost, ${computerChoice} beats rock!`);
                computerScore += 1;
            }
            break;

        case "paper":
            if (computerChoice === "paper") {
                console.log("Draw!");
            } else if (computerChoice === "rock") {
                console.log("You won, paper beats rock!");
                humanScore += 1;
            } else {
                console.log(`You lost, ${computerChoice} beats paper!`);
                computerScore += 1;
            }
            break;

        case "scissors":
            if (computerChoice === "scissors") {
                console.log("Draw!");
            } else if (computerChoice === "paper") {
                console.log("You won, scissors beats paper!");
                humanScore += 1;
            } else {
                console.log(`You lost, ${computerChoice} beats scissors!`);
                computerScore += 1; 
            }
            break;
    }

    console.log(`human:${humanScore} computer:${computerScore}`);
}

playRound(getHumanChoice(),getComputerChoice());