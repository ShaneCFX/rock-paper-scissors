function getComputerChoice() {
    // below is Math.floor which rounds down and returns largest integer
    //less than or equal to a given number.
    //Math.random returns number greater than or equalto 0 and less than 1.
let humanScore = 0;
let computerScore = 0; 
    
    
    const options = Math.floor(Math.random() * 3);
    // if 0 will return rock
    if (options === 0) {
        return "rock";
    // if 1 will return paper
    } else if (options === 1) {
        return "paper";
    // if 2 will return scissors
    } else if (options === 2) {
        return "scissors";
    }
}

function getHumanChoice() {
    const humanChoice = prompt("rock, paper or scissors? ").toLowerCase();
    return humanChoice;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice){
        return "It\'s a tie!";
    } else if (humanChoice === "rock" && computerChoice === 'scissors') {
        return 'player wins!';
    } else if (humanChoice === "scissors" && computerChoice === 'rock') {
        return 'computer wins!';
    } else if (humanChoice === "paper" && computerChoice === 'scissors') {
        return 'computer wins!';
    } else if (humanChoice === "scissors" && computerChoice === 'paper') {
        return 'player wins!';
    } else if (humanChoice === "rock" && computerChoice === 'scissors') {
        return 'player wins!';
    } else if (humanChoice === "paper" && computerChoice === 'rock') {
        return 'player wins!';
    } else if (humanChoice === "rock" && computerChoice === 'paper') {
        return 'computer wins!';
    }
    
    
}

function game() {
    let computerScore = 0;
    let humanScore = 0;
    //round incrument
    for (let i = 1; i <= 5; i++){
        console.log('round ' + i)// current round number
        let humanChoice = getHumanChoice(); // calls human prompt
        let computerChoice = getComputerChoice(); // calls computer choice
        console.log("computer chose " + `${computerChoice}`); //computer choice revealed
        
        const result = playRound(humanChoice, computerChoice); // determine the outcome of each choice
        console.log(result); // result

        //score update
        if (result === "player wins!") {
            humanScore++; // human score plus 1 

        } else if (result === "computer wins!"){
            computerScore++; // computer score plus 1
        }
    }

    console.log(`Final score; Player ${humanScore} - Computer ${computerScore}`);

}

 

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

game()