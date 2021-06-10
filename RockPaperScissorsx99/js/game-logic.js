// All code should be written in this file.

let playerOneMoveOneType
let playerOneMoveTwoType
let playerOneMoveThreeType
let playerOneMoveOneValue
let playerOneMoveTwoValue
let playerOneMoveThreeValue
let playerTwoMoveOneType
let playerTwoMoveTwoType
let playerTwoMoveThreeType
let playerTwoMoveOneValue
let playerTwoMoveTwoValue
let playerTwoMoveThreeValue


function setPlayerMoves(player, moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue) {
    arr = [moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue]
    types = ["rock", "paper", "scissors"]
    let totalValue = 0
    let valid = true
    for (let i=0; i<arr.length; i++) {
        if (arr[i] === undefined) {
            valid = false
        }
        if (i%2 === 0) {
            if (!types.includes(arr[i])) {
                valid = false;
                //console.log("fail")
            }
        }
        if (i%2 === 1) {
            if (arr[i] < 1 || arr[i] > 99) {
                valid = false;
            }
            totalValue += arr[i]
        }
    }
    if (totalValue > 99) {
        valid = false
    }
    if (valid === false) {
        return
    }
    if (player === "Player One") {
        playerOneMoveOneType = moveOneType
        playerOneMoveTwoType = moveTwoType
        playerOneMoveThreeType = moveThreeType
        playerOneMoveOneValue = moveOneValue
        playerOneMoveTwoValue = moveTwoValue
        playerOneMoveThreeValue = moveThreeValue
        return
    }
    if (player === "Player Two") {
        playerTwoMoveOneType = moveOneType
        playerTwoMoveTwoType = moveTwoType
        playerTwoMoveThreeType = moveThreeType
        playerTwoMoveOneValue = moveOneValue
        playerTwoMoveTwoValue = moveTwoValue
        playerTwoMoveThreeValue = moveThreeValue
        return
    }
    return
}

function getWinner(moveOne, moveTwo) {
    if (moveOne === moveTwo) {
        return "Tie"
    }
    if ((moveOne === "rock" && moveTwo === "scissors") || (moveOne === "scissors" && moveTwo === "rock")) {
        return "rock"
    }
    if ((moveOne === "paper" && moveTwo === "scissors") || (moveOne === "scissors" && moveTwo === "paper")) {
        return "scissors"
    }
    if ((moveOne === "rock" && moveTwo === "paper") || (moveOne === "paper" && moveTwo === "rock")) {
        return "paper"
    }
    else
        return null
}

function getRoundWinner(number) {
    if (number < 1 || number > 3) return null
    if (number === 1) {
        let result = getWinner(playerOneMoveOneType, playerTwoMoveOneType)
        if (result == null) {
            return null
        }
        if (result === "Tie") {
            if (playerOneMoveOneValue === playerTwoMoveOneValue) {
                return  "Tie"
            }
            if (playerOneMoveOneValue >= playerTwoMoveOneValue) {
                return 'Player One'
            }
            return "Player Two"
        }
        if (result === playerOneMoveOneType) {
            return 'Player One'
        }
        if (result === playerTwoMoveOneType) {
            return 'Player Two'
        }
    }
    if (number === 2) {
        let result = getWinner(playerOneMoveTwoType, playerTwoMoveTwoType)
        if (result == null) {
            return null
        }
        if (result === "Tie") {
            if (playerOneMoveTwoValue === playerTwoMoveTwoValue) {
                return  "Tie"
            }
            if (playerOneMoveTwoValue >= playerTwoMoveTwoValue) {
                return 'Player One'
            }
            return "Player Two"
        }
        if (result === playerOneMoveTwoType) {
            return 'Player One'
        }
        if (result === playerTwoMoveTwoType) {
            return 'Player Two'
        }
    }
    if (number === 3) {
        let result = getWinner(playerOneMoveThreeType, playerTwoMoveThreeType)
        if (result == null) {
            return null
        }
        if (result === "Tie") {
            if (playerOneMoveThreeValue === playerTwoMoveThreeValue) {
                return  "Tie"
            }
            if (playerOneMoveThreeValue >= playerTwoMoveThreeValue) {
                return 'Player One'
            }
            return "Player Two"
        }
        if (result === playerOneMoveThreeType) {
            return 'Player One'
        }
        if (result === playerTwoMoveThreeType) {
            return 'Player Two'
        }
    }
}

function getGameWinner() {
    round1 = getRoundWinner(1)
    round2 = getRoundWinner(2)
    round3 = getRoundWinner(3)
    winners = [round1, round2, round3]
    win1 = winners.filter(x => x === "Player One").length;
    win2 = winners.filter(x => x === "Player Two").length;
    if (win1 > win2) {
        return 'Player One'
    } else if (win2 > win1) {
        return 'Player Two'
    }
    return "Tie"
}

function setComputerMoves() {
    playerTwoMoveOneType = "rock"
    playerTwoMoveTwoType = "scissors"
    playerTwoMoveThreeType = "paper"
    playerTwoMoveOneValue = 30
    playerTwoMoveTwoValue = 60
    playerTwoMoveThreeValue = 9
}