const CHOICES = ["rock", "paper", "scissors"]

function computerPlay(){
    return CHOICES[Math.floor(Math.random()*(2+1))];
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    //console.log(playerSelection, computerSelection);
    
    switch(playerSelection){
        case "rock":
            switch(computerSelection){
                case "rock":
                    return "Draw!";
                case "paper":
                    return "You Lose! Paper beats Rock";
                case "scissors":
                    return "You Win! Rock beats Scissors";
            }
        case "paper":
            switch(computerSelection){
                case "rock":
                    return "You Win! Rock beats Scissors";
                case "paper":
                    return "Draw!";
                case "scissors":
                    return "You Lose! Paper beats Rock";
            }
        case "scissors":
            switch(computerSelection){
                case "rock":
                    return "You Lose! Paper beats Rock";
                case "paper":
                    return "You Win! Rock beats Scissors";
                case "scissors":
                    return "Draw!";
            }
    }
}

function logText(){
    console.log(playRound(this.textContent, computerPlay()));
}

const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', logText));
/*buttons.forEach(button => button.addEventListener('click', 
function(){
    console.log(playRound(button.textContent, computerPlay()));
}));*/

const resultsDiv = document.createElement('div');


function game(){
    /*for(let i=0; i<5; i++){
        playerSelection = prompt("Enter your choice");
        while(!/^[a-zA-Z]+$/.test(playerSelection)){
            playerSelection = prompt("Please enter either rock, paper or scissors");
        }
        console.log(playRound(playerSelection, computerPlay()));
    }*/
}







game();