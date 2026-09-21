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

function getHumanChoice() {
    const choice = prompt("Rock, Paper or Scissors?")
    return choice.toLowerCase();
}

function playGame(hmnchoice) {
    let humanScore = 0;
    let computerScore = 0;
    let draw = 0;

    function playRound(humanChoice, computerChoice) {
        /* console.log(`human: ${humanChoice} computer: ${computerChoice}`);   << ------ USED FOR DEBUGGING EARLY STAGES */
        switch (humanChoice) {
            case "rock":
                if (computerChoice === "rock") {
                    console.log("Draw!");
                    draw += 1;
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
                    draw += 1;
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
                    draw += 1;
                } else if (computerChoice === "paper") {
                    console.log("You won, scissors beats paper!");
                    humanScore += 1;
                } else {
                    console.log(`You lost, ${computerChoice} beats scissors!`);
                    computerScore += 1; 
                }
                break;
            
            default:
                console.log(`${humanChoice} is not an option!`)
                break;
        }

    }

    playRound(hmnchoice.toLowerCase(), getComputerChoice());

}

const buttons = document.querySelectorAll("button");
buttons.forEach((item) => {
    item.addEventListener("click", (e) => {
        const humanChoice = item.textContent.toLowerCase();
        playGame(item.id)
    })
})