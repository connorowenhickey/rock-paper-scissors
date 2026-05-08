//Function to create computer choice
//Math.random to randomise number
//math.floor and then *3 for 3 unique integer value
//Assign the various numbers to each possible option

function getComputerChoice(){
    let x = Math.floor(Math.random()*3);
    if (x===0){
        return 'rock'
    } else if (x===1) {
        return 'paper'
    } else if (x===2) {
        return 'scissors'
    } 
}



//if elseif else loop for when there is draw, win or loss for human
//with updated scores and a log update 
function playRound(computerChoice, humanChoice){
    const p = document.createElement('p')
    const para_end = document.createElement('p')
    if (computerChoice === humanChoice) {
        p.textContent = `Draw! - Scores remain: Computer - ${computerScore} and Human - ${humanScore}`
    } else if ((computerChoice === 'rock' && humanChoice === 'scissors') ||
    (computerChoice === 'paper' && humanChoice === 'rock') ||
    (computerChoice === 'scissors' && humanChoice === 'paper')) {
        computerScore += 1
        p.textContent = `Computer wins! The score is now: Computer - ${computerScore} and Human - ${humanScore}`
    } else {
        humanScore += 1
        p.textContent = `Human wins! The score is now: Computer - ${computerScore} and Human - ${humanScore}`
    }

    roundResult.appendChild(p) 

    if (humanScore === 5) {
        para_end.textContent = `Human wins! The game is over! Reload Window to restart.`
        rock.disabled = true
        paper.disabled = true
        scissors.disabled = true
        results.appendChild(para_end)
    } else if (computerScore === 5) {
        para_end.textContent = `Computer wins. The game is over! Reload Window to restart.`
        rock.disabled = true
        paper.disabled = true
        scissors.disabled = true
        results.appendChild(para_end)
    }
}


//initilize human score
let humanScore = 0
//initialise computer score
let computerScore = 0

let computerChoice = getComputerChoice()

const results = document.querySelector('.results')
const roundResult = document.querySelector('.round-result')

const rock = document.querySelector('#rock-btn')
const paper = document.querySelector('#paper-btn')
const scissors = document.querySelector('#scissors-btn')

rock.addEventListener('click', () => {
    playRound(getComputerChoice(), 'rock')
})

paper.addEventListener('click', () => {
    playRound(getComputerChoice(), 'paper')
})

scissors.addEventListener('click', () => {
    playRound(getComputerChoice(), 'scissors')
})

