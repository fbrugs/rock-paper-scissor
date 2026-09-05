/* Rock paper scissor */

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let randint = Math.random()

    if (randint <= 0.33) {
        return "rock";
    } else if (randint > 0.33 && randint < 0.66) {
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

}

console.log(getComputerChoice());
console.log(getHumanChoice());