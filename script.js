function getComputerChoice(){
    const games = ['rock','paper','scissor']
    let index = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
    return games[index]
      }
    
// console.log(getComputerChoice())

function getHumanChoice(){
    let sign = prompt("What's your choice? rock, paper, scissor?");
    console.log(sign)
}
      
getHumanChoice()
