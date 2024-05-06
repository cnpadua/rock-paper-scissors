console.log("hello there");

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    let choices = ["ROCK", "PAPER", "SCISSORS"];
    return choices[getRandomInt(3)];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase();
    let winMessage = `You win! ${playerSelection} beats ${computerSelection}`;
    let loseMessage = `You lose! ${computerSelection} beats ${playerSelection}`;
    
    if (playerSelection === computerSelection) {
        // return "Draw! No one wins";
        return 0;
    }

    if (playerSelection === "ROCK") {
        
        if (computerSelection === "PAPER"){
            // rock v paper = compter
            // return loseMessage;
            return 0;
        }
        else {
            // rock v scissors = player
            // return winMessage;
            return 1;
        }
        
    }
    
    if (playerSelection === "PAPER") {

        if (computerSelection === "ROCK"){
            // paper v rock = player
            // return winMessage;
            return 1;
        }
        else {
            // paper v scissors = computer
            // return loseMessage;
            return 0;
        }
        
    }
    
    if (playerSelection === "SCISSORS") {
        if (computerSelection === "ROCK"){
            // scissors v rock = computer
            // return loseMessage;
            return 0;
        }
        else {
            // scissors v paper = player
            // return winMessage;
            return 1;
        }
    }
}


function playGame() {
    let score = 0;

    // for (let i=0; i<5; i++){
    //     let computerSelection = getComputerChoice();
    //     let playerSelection = prompt("Rock, paper, or scissors?");
    //     let round = playRound(playerSelection, computerSelection);

    //     if (round.charAt(4) === "w"){
    //         score++;
    //     }
        
    //     alert(`${round}. Score is ${score}`);
    //     console.log(round)
    //     console.log(`Score: ${score}`);
    // }

    // alert(`Your total score is ${score}/5!`);

    // let rockButton = document.createElement("button");
    // rockButton.textContent = "ROCK";

    // let paperButton = document.createElement("button");
    // paperButton.textContent = "PAPER";

    // let scissorButton = document.createElement("button"); 
    // scissorButton.textContent = "SCISSOR";


}

let score = 0;
const rock_button = document.querySelector(".rock_button");
const paper_button = document.querySelector(".paper_button");
const scissors_button = document.querySelector(".scissors_button");

game_buttons = [rock_button, paper_button, scissors_button];

for (let i=0; i<3; i++){
    game_buttons[i].addEventListener("click", () => {
        playerChoice = game_buttons[i].textContent;
        computerChoice = getComputerChoice();
        
        result = playRound(playerChoice, computerChoice);
        score += result;
        console.log(result, score);
    });
}

playGame();