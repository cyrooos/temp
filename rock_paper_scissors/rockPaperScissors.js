
function computerPlay(){
  computerChoice = parseInt(Math.random() * (4-1) + 1);
  if(computerChoice === 1) return 'rock';
  if(computerChoice === 2) return 'paper';
  if(computerChoice === 3) return 'scissors';
}

function playRound(playerSelection, computerSelection){
  if(playerSelection.toLowerCase() === computerSelection){
    results.textContent = 'It\'s a tie';
    return 0;
  }else if(playerSelection.toLowerCase() === 'rock' && computerSelection === 'paper' ||
      playerSelection.toLowerCase() === 'scissors' && computerSelection === 'rock' ||
      playerSelection.toLowerCase() === 'paper' && computerSelection === 'scissors'){
      results.textContent = `You lost with ${playerSelection}. Computer had ${computerSelection}.`;
      lblComputerScore.textContent = `Computer Score: ${++scoreComputer}`;
      return 1;
    }else{
      results.textContent= `You won with ${playerSelection}. Computer had ${computerSelection}.`;
      lblPlayerScore.textContent = `Player Score: ${++scorePlayer}`;
      return 2;
    }
  
}

let scorePlayer = 0;
let scoreComputer = 0;

const container = document.querySelector('#container');

const btn1 = document.createElement('button');
btn1.classList.add('button');
btn1.textContent = 'Rock';
container.appendChild(btn1);
const btn2 = document.createElement('button');
btn2.classList.add('button');
btn2.textContent = 'Paper';
container.appendChild(btn2);
const btn3 = document.createElement('button');
btn3.classList.add('button');
btn3.textContent = 'Scissors';
container.appendChild(btn3);
const results = document.createElement('div');
results.classList.add('results');
container.appendChild(results);
const lblPlayerScore = document.createElement('div');
lblPlayerScore.classList.add('score');
lblPlayerScore.textContent = `Player Score: ${scorePlayer}`;
container.appendChild(lblPlayerScore);
const lblComputerScore = document.createElement('div');
lblComputerScore.classList.add('score');
lblComputerScore.textContent = `Computer Score: ${scoreComputer}`;
container.appendChild(lblComputerScore);
const lblWinner = document.createElement('div');
lblWinner.classList.add('lblWinner');
container.appendChild(lblWinner);

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    let scoreCountComputer = 0;
    let scoreCountPlayer = 0;
    let game = playRound(button.textContent, computerPlay());
    if(game === 0){
      scoreCountComputer += 0;
    }else if(game === 1){
      scoreCountComputer++;
    }else
      scoreCountPlayer++;

    if(scoreComputer >= 5 && scoreCountPlayer < scoreCountComputer){
      lblWinner.textContent = 'Computer Wins!';
    }else if(scorePlayer >= 5 && scoreComputer < scoreCountPlayer){
      lblWinner.textContent = 'Player Wins!';
    }else
      lblWinner.textContent = '';

  });
});