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

function game() {
    playerScore = 0;
    computerScore = 0;
    

    if(playerScore > computerScore) {
        alert("Player Wins Game!");
    } else if(playerScore < ComputerScore) {
        alert("Computer Wins Game!");
    } else {
        alert("It's a Tie!")
    }
}

function playRound() {
    input = prompt("Enter rock, paper or scissors");
    computerChoice = getComputerChoice();
    roundResult = playRPS(input, computerChoice);
    console.log(typeof(roundResult));
    console.log(roundResult.slice(0,8));
    if(roundResult.slice(8) == "You Win!") {
        return "You Win!";
    } else {
        return "You Lose!";
    }
}

game();