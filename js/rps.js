function getComputerChoice() {
    const num = Math.floor(Math.random() * 3);
    switch(num) {
        case 0:
            computerChoice = "Rock";
            break;
        case 1:
            computerChoice = "Paper";
            break;
        case 2:
            computerChoice = "Scissors";
            break;
    }

    return computerChoice;
}

function playRPS(playerSelection, computerSelection) {
    if(isPlayerSelectionValid(playerSelection)) {
        playerSelection = isPlayerSelectionValid(playerSelection);
    } else {
        throw "player selection not valid";
    }
    switch(playerSelection) {
        case "Rock":
            if(computerSelection == "Scissors") {return "You Win! Rock beats Scissors"};
            if(computerSelection == "Paper") {return "You Lose! Paper beats Rock"};
            if(computerSelection == "Rock") {return "Tie!"};
            break;
        case "Paper":
            if(computerSelection == "Rock") {return "You Win! Paper beats Rock"};
            if(computerSelection == "Scissors") {return "You Lose! Scissors beats Paper"};
            if(computerSelection == "Paper") {return "Tie!"};
            break;
        case "Scissors":
            if(computerSelection == "Paper") {return "You Win! Scissors beats Paper"};
            if(computerSelection == "Rock") {return "You Lose! Rock beats Scissors"};
            if(computerSelection == "Scissors") {return "Tie!"};
            break;
        default:
            throw "Something went wrong in playRPS function";
    }
}

function isPlayerSelectionValid(playerSelection) {
    fixedWord = playerSelection.charAt(0).toUpperCase() + playerSelection.toLowerCase().slice(1);
    switch(fixedWord) {
        case "Rock":
        case "Paper":
        case "Scissors":
            return fixedWord;
        default:
            return false;
    }
}

function playRound(e) {
    //console.log("enter playRound");
    input = e.target.textContent;
    //console.log(input);
    computerChoice = getComputerChoice();
    roundResult = playRPS(input, computerChoice);

    playerHand = document.getElementById("player-hand");
    playerHand.textContent = input;
    computerHand = document.getElementById("computer-hand");
    computerHand.textContent = computerChoice;

    if(roundResult.slice(0,8) == "You Win!") {
        playerScore++;
        document.getElementById("player-score").textContent = playerScore;
    }
    if(roundResult.slice(0,9) == "You Lose!") {
        computerScore++;
        document.getElementById("computer-score").textContent = computerScore;
    }

    if(playerScore === 5) {
        alert("player wins");
        playerScore = 0;
        computerScore = 0;
    }
    if(computerScore === 5) {
        alert("computer wins");
        playerScore = 0;
        computerScore = 0;
    }
}

playerScore = 0;
computerScore = 0;

const buttons = Array.from(document.querySelectorAll('button'));

buttons.forEach(button => button.addEventListener('click', playRound));
