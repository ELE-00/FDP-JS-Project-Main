
//Computer player
//Randomly generate rock, paper or scissors for the computer
function computerPlay(){
    let computerSelection;
    
    let randomValue = Math.floor(Math.random() * 3);

    if(randomValue == 0){
        computerSelection = "rock" 
    } else if(randomValue == 1){
        computerSelection = "scissors" 
    } else {
        computerSelection = "paper" 
    }

    return computerSelection;

};


// Human Player
function getPlayerSelection() {
    const validChoices = ["rock", "paper", "scissors"];
    let playerInput;
    let message = "Player choice:";

    do {
        playerInput = prompt(message);

        if (playerInput === null) {
            return null;
        }

        playerInput = playerInput.trim().toLowerCase();

        if (!validChoices.includes(playerInput)) {
            message = "Invalid choice! Please choose rock, paper or scissors:";
        }

    } while (!validChoices.includes(playerInput));

    return playerInput;
}
