function getComputerChoice() {
    
    const options = Math.floor(Math.random() * 3);

    if (options === 0) {
        return "rock";
    } else if (options === 1) {
        return "paper";
    } else if (options === 2) {
        return "scissors";
    }
    
}
console.log(getComputerChoice());
