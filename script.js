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
        return "DRAW";
    }

    if (playerSelection === "ROCK") {
        
        if (computerSelection === "PAPER"){
            // rock v paper = compter
            // return loseMessage;
            return "LOSE";
        }
        else {
            // rock v scissors = player
            // return winMessage;
            return "WIN";
        }
        
    }
    
    if (playerSelection === "PAPER") {

        if (computerSelection === "ROCK"){
            // paper v rock = player
            // return winMessage;
            return "WIN";
        }
        else {
            // paper v scissors = computer
            // return loseMessage;
            return "LOSE";
        }
        
    }
    
    if (playerSelection === "SCISSORS") {
        if (computerSelection === "ROCK"){
            // scissors v rock = computer
            // return loseMessage;
            return "LOSE";
        }
        else {
            // scissors v paper = player
            // return winMessage;
            return "WIN";
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

function getScore(message){
    if (message === "DRAW" || message === "LOSE"){
        return 0;
    } else {
        return 1;
    }
}

function increaseScoreCounter() {
    const score_counter = document.querySelector(".score_number");
    console.log("score_number:", score_counter.textContent);
    let score = Number(score_counter.textContent)+1;
    score_counter.textContent = score.toString();
}
// PREPPING COMPONENTS
let score = 0;
const rock_button = document.querySelector(".rock_button");
const paper_button = document.querySelector(".paper_button");
const scissors_button = document.querySelector(".scissors_button");

game_buttons = [rock_button, paper_button, scissors_button];

// ADDING EVENT LISTENERS
for (let i=0; i<3; i++){
    game_buttons[i].addEventListener("click", () => {
        playerChoice = game_buttons[i].textContent;
        computerChoice = getComputerChoice();
        
        round_message = playRound(playerChoice, computerChoice);
        round_score = getScore(round_message);
        console.log("round_score:", round_score);

        if(round_score == 1){
            increaseScoreCounter();
        }

        score += round_score;
        console.log("result:", round_message, score);
    });
}
