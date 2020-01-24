let userScore = 0
let computerScore = 0
const userScoreSpan = document.getElementById("player-score")
const computerScoreSpan = document.getElementById("computer-score")
const scoreboard_div = document.querySelector(".scoreboard")
const result_p = document.querySelector(".result > p")
const rock_div = document.getElementById("r")
const paper_div = document.getElementById("p")
const scissors_div = document.getElementById("s")

function getComputerChoice(){
    const choices = ['r', 'p', 's']
    const randomNumber = Math.floor(Math.random()*3)
    return choices[randomNumber]
}

function convertToWord(letter){
    if (letter === "r") return "Rock"
    if (letter === "p") return "Paper"
    return "Scissors"
}

function win(userChoice, computerChoice){
    userScore++
    userScoreSpan.innerHTML = userScore
    computerScoreSpan.innerHTML = computerScore
    result_p.innerHTML = convertToWord(userChoice) + " Beats " + convertToWord(computerChoice) + ", You Won!"
}

function lose(userChoice, computerChoice){
    computerScore++
    userScoreSpan.innerHTML = userScore
    computerScoreSpan.innerHTML = computerScore
    result_p.innerHTML = convertToWord(userChoice) + " Lost to " + convertToWord(computerChoice) + ", You Lost!"
}

function draw(userChoice, computerChoice){
    result_p.innerHTML = convertToWord(userChoice) + " equals " + convertToWord(computerChoice) + ", Itsa Tie!"
}

function game(userChoice){
    const computerChoice = getComputerChoice()
    switch(userChoice + computerChoice){
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice)
            break
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice)
            break
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice)
            break
    }
}

function main(){
    rock_div.addEventListener("click", () => game("r"))
    paper_div.addEventListener("click", () => game("p"))
    scissors_div.addEventListener("click", () => game("s"))
}
main()