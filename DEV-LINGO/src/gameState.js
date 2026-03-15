import * as ask from "readline-sync"

let score = 0
let lives = 3

export function addScore(points) {
    score += points
}

export function loseLife() {
    lives--
}

export function getScore() {
    return score
}

export function getLives() {
    return lives
}

export function resetGame() {
    score = 0
    lives = 3
}

export function drawNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

export function pauseGame(){
    ask.question("\nPress ENTER to continue...")
}