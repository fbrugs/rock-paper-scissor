/* Rock paper scissor */

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

function playRound(humanChoice, computerChoice) {
    switch (humanChoice) {
        case "rock":
            if (computerChoice === "rock") {
                draw += 1;
            } else if (computerChoice === "scissors") {
                humanScore += 1;
            } else {
                computerScore += 1;
            }
            break;
        case "paper":
            if (computerChoice === "paper") {
                draw += 1;
            } else if (computerChoice === "rock") {
                humanScore += 1;
            } else {
                computerScore += 1;
            }
            break;
        case "scissors":
            if (computerChoice === "scissors") {
                draw += 1;
            } else if (computerChoice === "paper") {
                humanScore += 1;
            } else {
                computerScore += 1;
            }
            break;
    }
}

let humanScore = 0;
let computerScore = 0;
let draw = 0;
let round = 0;

const buttons = document.querySelectorAll(".play-button");

buttons.forEach((item) => {
    item.addEventListener("click", (e) => {
        const result = document.querySelector(".result");
        const winner = document.querySelector(".winner");

        winner.textContent = "";
        round += 1;
        playRound(item.id, getComputerChoice())

        result.textContent = `Human: ${humanScore} Computer: ${computerScore} Draws: ${draw}`
        console.log(round)

        if (round === 5) {
            if (humanScore > computerScore) {
                winner.textContent = `You won!`
            } else if (computerScore > humanScore) {
                winner.textContent = `You lost!`
            } else if (humanScore === computerScore) {
                winner.textContent = `It's a draw!`
            }
            round = draw = humanScore = computerScore = 0;
            result.textContent = `Human: ${humanScore} Computer: ${computerScore} Draws: ${draw}`
        }

    })
})

/* Draw is counted but not used in this version */