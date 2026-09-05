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
        return "scissor";
    }
}

function getHumanChoice() {
    const choice = prompt("Rock, Paper or Scissor?")
    return choice.toLowerCase();
}

function playRound(humanChoice, computerChoice) {

    console.log(`human: ${humanChoice} computer: ${computerChoice}`);

    switch (humanChoice) {
        case "rock":
            if (computerChoice === "rock") {
                console.log("Draw!");
            } else if (computerChoice === "scissor") {
                console.log("You won, rock beats scissor!");
            } else {
                console.log(`You lost, ${computerChoice} beats rock!`);
            }
            break;

        case "paper":
            if (computerChoice === "paper") {
                console.log("Draw!");
            } else if (computerChoice === "rock") {
                console.log("You won, paper beats rock!");
            } else {
                console.log(`You lost, ${computerChoice} beats paper!`);
            }
            break;

        case "scissor":
            if (computerChoice === "scissor") {
                console.log("Draw!");
            } else if (computerChoice === "paper") {
                console.log("You won, scissor beats paper!");
            } else {
                console.log(`You lost, ${computerChoice} beats scissor!`);
            }
            break;
    }

}

playRound(getHumanChoice(),getComputerChoice());