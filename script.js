// console.log("hello there");

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

// ROUND AND SCORE INCREMENTERS
function increaseRoundCounter(){
    const round_counter = document.querySelector(".round_number");
    round_counter.textContent = Number(round_counter.textContent) + 1;
}

function increaseScoreCounter() {
    const score_counter = document.querySelector(".score_number");
    console.log("score_number:", score_counter.textContent);
    let score = Number(score_counter.textContent)+1;
    score_counter.textContent = score.toString();
}

function reset(){
    // DISPLAY ALERT MESSAGE
    let score_number = document.querySelector(".score_number");

    if (Number(score_number) < 4){
        alert("YOU LOSE! Try again?")
    } else {
        alert ("YOU WIN! Play again?")
    }

    // RESET COMPONENTS
    let round_number = document.querySelector(".round_number");
    round_number.textContent = 1;
    score_number.textContent = 0;

    // -- reset icons
    let player_icon = document.querySelector(".player_choice_icon");
    let computer_icon = document.querySelector(".computer_choice_icon");

    player_icon.setAttribute("src", "");
    computer_icon.setAttribute("src", "");

    // -- reset round message
    let round_message = document.querySelector(".round_message");
    round_message.textContent = "Click a button above to begin! Best of 5 wins >:)"
}

function main() {
    // PREPPING COMPONENTS
    let score = 0;
    const rock_button = document.querySelector(".rock_button");
    const paper_button = document.querySelector(".paper_button");
    const scissors_button = document.querySelector(".scissors_button");

    let game_buttons = [rock_button, paper_button, scissors_button];

    // ADDING EVENT LISTENERS
    for (let i=0; i<3; i++){
        game_buttons[i].addEventListener("click", () => {
            // GETTING CHOICES
            let playerChoice = game_buttons[i].textContent;
            let computerChoice = getComputerChoice();
            
            // GETTING RESULTS
            let round_message = playRound(playerChoice, computerChoice);
            let round_score = getScore(round_message);
            score += round_score;

            // console.log("round_score:", round_score);
            // console.log("result:", round_message, score);

            // UPDATING HTML

            // -- ADD ICONS
            const play_choice_icon = document.querySelector(".player_choice_icon");
            play_choice_icon.setAttribute("src", `./images/${playerChoice.toLowerCase()}.svg`);
            
            const computer_choice_icon = document.querySelector(".computer_choice_icon");
            computer_choice_icon.setAttribute("src", `./images/${computerChoice.toLowerCase()}.svg`);
            
            // -- UPDATE ROUND MESSAGE
            let round_message_html = document.querySelector(".round_message");
            round_message_html.textContent = `YOU ${round_message}`;

            // -- INCRASE ROUND AND SCORE COUNTER
            if(round_score == 1){
                increaseScoreCounter();
            }

            // -- CHECK ROUND COUNTER, RESET AT ROUND 5
            let round_number = Number(document.querySelector(".round_number").textContent);
            if (round_number == 5){
                reset();
            } else {
                increaseRoundCounter();
            }
            
        });
    }
}

main();