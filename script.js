
let humanScore = 0
let computerScore = 0

function getComputerChoice(){
    const choices = ['rock', 'paper', 'scissor'];
    let index = Math.floor(Math.random() * choices.length);
    return choices[index];
      }
    

function getHumanChoice(){
    let sign = prompt("What's your choice? rock, paper, scissor?");
    return sign;
}

const humanSelection = getHumanChoice().toLowerCase()
const computerSelection = getComputerChoice().toLowerCase()
      
function playRound(humanChoice, computerChoice){
    if (humanChoice == computerChoice){
        console.log('It is a tie')
    }
    else if (
        (humanChoice === 'rock' && computerChoice === 'scissor') ||
        (humanChoice === 'scissor' && computerChoice === 'paper') ||
        (humanChoice === 'paper' && computerChoice === 'rock')
    ){
        console.log(`You win! ${humanChoice} beats ${computerChoice}`)
        humanScore = humanScore + 1
    }
    else{
        console.log(`You lose ${computerChoice} beat ${humanChoice}`)
        computerScore = computerScore + 1
    }
}


playRound(humanSelection, computerSelection)