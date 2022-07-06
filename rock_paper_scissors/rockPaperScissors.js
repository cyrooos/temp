
function computerPlay(){
  computerChoice = parseInt(Math.random() * (4-1) + 1);
  if(computerChoice === 1) return 'rock';
  if(computerChoice === 2) return 'paper';
  if(computerChoice === 3) return 'scissors';
}

function playRound(playerSelection, computerSelection){
  if(playerSelection.toLowerCase() === computerSelection){
    console.log(`It's a tie.`)
    return 0;
  }else if(playerSelection.toLowerCase() === 'rock' && computerSelection === 'paper' ||
      playerSelection.toLowerCase() === 'scissors' && computerSelection === 'rock' ||
      playerSelection.toLowerCase() === 'paper' && computerSelection === 'scissors'){
      console.log(`You lost with ${playerSelection}. Computer had ${computerSelection}.`);
      return 1;
    }else{
      console.log(`You won with ${playerSelection}. Computer had ${computerSelection}.`);
      return 2;
    }
  
}

function game(){
  let count;
  let scoreComputer = 0;
  let scorePlayer = 0;
  for(let i = 0; i < 5; i++){
    const playerSelection = prompt('Rock, paper, or scissors?');
    const computerSelection = computerPlay();
    let game = playRound(playerSelection, computerSelection);
    if(game === 0){
      i--;
    }else if(game === 1){
      scoreComputer++;
    }else
      scorePlayer++;
    
  }
  if(scoreComputer > scorePlayer){
    console.log("Computer won. Computer Score: " + scoreComputer + " Player Score: " + scorePlayer);
  }else
    console.log("You won. Player Score: " + scorePlayer + " Computer Score: " + scoreComputer);
    
}
game();
