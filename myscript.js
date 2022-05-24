const CHOICES = ["rock", "paper", "scissors"];
const resultDiv = document.querySelector("#resultsDiv");
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
        displayResult("You Lose!");
    }
    else{
        displayResult("You Win!");
    }

    /*switch(playerSelection){
        case "rock":
            switch(computerSelection){
                case "rock":
                    displayResult("Draw");
                case "paper":
                    displayResult("You Lose! Paper beats Rock");
                case "scissors":
                    displayResult("You Win! Rock beats Scissors");
            }
        case "paper":
            switch(computerSelection){
                case "rock":
                    displayResult("You Win! Rock beats Scissors");
                case "paper":
                    displayResult("Draw!");
                case "scissors":
                    displayResult("You Lose! Paper beats Rock");
            }
        case "scissors":
            switch(computerSelection){
                case "rock":
                    displayResult("You Lose! Paper beats Rock");
                case "paper":
                    displayResult("You Win! Rock beats Scissors");
                case "scissors":
                    displayResult("Draw!");
            }
    }*/
}

const buttons = document.querySelectorAll('.button');
buttons.forEach((button) => {
    button.addEventListener('click', () =>{
        const selectedImage = button.querySelector("img");
        playRound(selectedImage.alt, computerPlay());
    });
});

function game(){
    /*for(let i=0; i<5; i++){
        playerSelection = prompt("Enter your choice");
        while(!/^[a-zA-Z]+$/.test(playerSelection)){
            playerSelection = prompt("Please enter either rock, paper or scissors");
        }
        console.log(playRound(playerSelection, computerPlay()));
    }*/
}