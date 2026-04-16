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
