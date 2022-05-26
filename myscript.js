const CHOICES = ["rock", "paper", "scissors"];
const resultDiv = document.querySelector("#results");
const gameDone = document.querySelector("#game-done");
const finalResult = document.querySelector("#final-result");
const playAgainButton = document.querySelector("#play-again");
const main = document.querySelector("#main");
let computerSelection;
let playerSelection;
let computerScore = 0;
let playerScore = 0;


function computerPlay(){
    return CHOICES[Math.floor(Math.random()*(2+1))];
}

function displayResult(output){
    resultDiv.animate([{opacity: 0}, {opacity: 1}],
        {duration: 300,
        fill: "forwards",
        iterations: 1,
        delay: 0,
        easing: "ease-out"});
    resultDiv.textContent = output;
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    
    if(computerSelection == playerSelection){
        displayResult("Draw!");
    }
    else if((computerSelection == "rock" && playerSelection == "scissors") || 
            (computerSelection == "scissors" && playerSelection == "paper") ||
            (computerSelection == "paper" && playerSelection == "rock")
           ){
            computerScore++;
            animateAndKeepScore();
            displayResult("You Lose!");
    }
    else{
        playerScore++;
        animateAndKeepScore();
        displayResult("You Win!");
    }
}

const buttons = document.querySelectorAll('.button');
buttons.forEach((button) => {
    button.addEventListener('click', () =>{
        const selectedImage = button.querySelector("img");
        playRound(selectedImage.alt, computerPlay());

        if(computerScore === 5 || playerScore === 5){
            gameEnd();
        }
    });
});

function animateAndKeepScore(){
    let playerSelector = document.querySelector("#player-score");
    let computerSelector = document.querySelector("#computer-score");

    if(computerSelector.textContent != computerScore){
        computerSelector.animate([
            {opacity: 0}, {opacity: 1},
             {duration: 300, fill: "forwards", iterations: 1, delay: 0,
              easing: "ease-out"}]);
        computerSelector.textContent = computerScore;
    }
    if(playerSelector.textContent != playerScore){
        playerSelector.animate([
            {opacity: 0}, {opacity: 1},
             {duration: 300, fill: "forwards", iterations: 1, delay: 0,
              easing: "ease-out"}]);
        playerSelector.textContent = playerScore;
    }
}

function reset(){
    resultDiv.textContent = "";
    playerScore = 0;
    computerScore = 0;
    animateAndKeepScore();
}

function gameEnd(){
    animations();
    if(playerScore > computerScore){
        finalResult.textContent = "You Win!";
        playAgainButton.textContent = "Play Again";
    }
    else{
        finalResult.textContent = "You Lose!";
        playAgainButton.textContent = "Try Again?";
    }
}

function animations(){
    finalResult.classList.remove("disappear");
    main.classList.add("disappear");
    gameDone.classList.remove("disappear");
    playAgainButton.classList.remove("disappear");
    playAgainButton.addEventListener("click", () => {
        main.classList.remove("disappear");
        gameDone.classList.add("disappear");
        playAgainButton.classList.add("disappear");
        finalResult.classList.add("disappear");
        reset();
    });
}