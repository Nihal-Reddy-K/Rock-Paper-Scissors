let btns = document.querySelectorAll('button');
const playerImg = document.querySelector('.player-img');
const computerImg = document.querySelector('.computer-img');
const resultText = document.querySelector('#result-text');
const scoreText = document.querySelector('#score-text');
const resetBtn = document.querySelector(".reset-btn");


let humanScore = 0;
let computerScore = 0;

function disableButtons() {
  btns.forEach(button => (button.disabled = true));
}

function enableButtons() {
  btns.forEach(button => (button.disabled = false));
}

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

function playRound(humanChoice, computerChoice){
  playerImg.src = `images/${humanChoice}.png`;
  computerImg.src = `images/${computerChoice}.png`;  

    if(humanChoice === computerChoice){
        resultText.textContent = "It's a tie!";
        return;
    }
    if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      humanScore++;
      resultText.textContent=`You won!:) You chose ${humanChoice} and Computer chose ${computerChoice}`;
    } else {
      computerScore++;
      resultText.textContent=`You lost! You chose ${humanChoice} and Computer chose ${computerChoice}`;
    }
  }

scoreText.textContent = `Player: ${humanScore} | Computer: ${computerScore}`;

if(humanScore == 5){
  resultText.textContent = "You win! :D";
  disableButtons();
}else if(computerScore == 5){
  resultText.textContent = "You lose! D:";
  disableButtons();
}

function resetDaGame(){
humanScore = 0;
computerScore = 0;

resultText.textContent = "Make your move!";
scoreText.textContent = "Player: 0 and Computer: 0";

playerImg.src = "images/question.jpg";
computerImg.src = "images/question.jpg";

enableButtons();
}

btns.forEach(button => {
  button.addEventListener("click",() =>{
    const humanChoice = button.dataset.choice;
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
  });
});

resetBtn.addEventListener("click", resetDaGame);




