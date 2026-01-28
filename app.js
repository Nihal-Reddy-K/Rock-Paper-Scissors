getComputerChoice = function(){
    const cc = Math.floor(Math.random() * 3) + 1;
    if(cc==1){
        return "rock";
    }else if(cc==2){
        return "paper";
    }else{
        return "scissors";
    }
}

getHumanChoice = function(){
    return prompt("Enter rock,paper or scissors!");
}

function playGame(){
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();
    if(humanChoice === computerChoice){
        console.log("Tie!");
        return;
    }
    if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      humanScore++;
      console.log(`You won!:) You chose ${humanChoice} and Computer chose ${computerChoice}`);
    } else {
      computerScore++;
      console.log(`You lost! You chose ${humanChoice} and Computer chose ${computerChoice}`);
    }
  }
  for(let i = 0; i < 5; i++){
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection,computerSelection);
  }
   console.log(`Your Score: ${humanScore}, Computer Score: ${computerScore}`);
   if (humanScore > computerScore) {
    console.log("You Won! :D");
   } else if (computerScore > humanScore) {
    console.log("You lost! D:");
   } else {
    console.log("Tie!");
   }
}

playGame();

