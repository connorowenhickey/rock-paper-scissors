//Function to create computer choice
//Math.random to randomise number
//math.floor and then *3 for 3 unique integer value
//Assign the various numbers to each possible option

function getComputerChoice(){
    x = Math.floor(Math.random()*3);
    if (x===0){
        return 'rock'
    } else if (x===1) {
        return 'paper'
    } else if (x===2) {
        return 'scissors'
    } 
}

//while loop to force user to give valid input
//choice variable is assigned in this loop
//input to give interactive popup to type in choice
function getHumanChoice() {
    let keepGoing = true
    while (keepGoing) {
        let choice = prompt('Rock, Paper or Scissors').toLowerCase()
        if (['rock', 'paper', 'scissors'].includes(choice)) {
            return choice
            keepGoing = false
        }    
    }
}


//if elseif else loop for when there is draw, win or loss for human
//with updated scores and a log update 
function playRound(computerChoice, humanChoice){
    if (computerChoice === humanChoice) {
        console.log(`Draw! - Scores remain: computer - ${computerScore} and human - ${humanScore}`)
    } else if ((computerChoice === 'rock' && humanChoice === 'scissors') ||
    (computerChoice === 'paper' && humanChoice === 'rock') ||
    (computerChoice === 'scissors' && humanChoice === 'paper')) {
        computerScore += 1
        console.log(`Computer wins! The score is now: Computer - ${computerScore} and Human - ${humanScore}`)
    } else {
        humanScore += 1
        console.log(`Human wins! The score is now: Computer - ${computerScore} and Human - ${humanScore}`)
    }
}

//multiple rounds, have to define human and computer choice
//have to play game with chosen values
//reset gam each time
//finish game after number of rounds played
function playGame(rounds) {
    for (let i = 0; i < rounds; i++) {
        let humanChoice = getHumanChoice()
        console.log(humanChoice)
        let computerChoice = getComputerChoice()
        console.log(computerChoice)
        playRound(computerChoice, humanChoice)
    }
    if (humanScore > computerScore) {
        console.log(`Congrats! You won the game ${humanScore}-${computerScore}`)

    } else if (computerScore > humanScore) {
        console.log(`Unlucky loser! You lost ${computerScore} - ${humanScore}`)
    } else {
        console.log(`It's a draw! Rock, Paper, Scissors is the real winner!`)
    }
}

//initalise variable for human score
let humanScore = 0

//intialise variable for computer score
let computerScore = 0

let rounds = prompt('How many rounds do you want to play?')

playGame(rounds)