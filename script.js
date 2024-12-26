
let humanScore = 0
let computerScore = 0

function getComputerChoice(){
    const games = ['rock','paper','scissor']
    let index = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
    return games[index]
      }
    

function getHumanChoice(){
    let sign = prompt("What's your choice? rock, paper, scissor?");
    return sign;
}

const humanSelection = getHumanChoice()
const computerSelection = getComputerChoice()
      
function playRound(humanChoice, computerChoice){
    console.log(humanChoice, computerChoice)
}


playRound(humanSelection, computerSelection)