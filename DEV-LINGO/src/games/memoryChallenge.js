import * as ask from 'readline-sync'; // refatorado //
import { addScore, loseLife, drawNumber, pauseGame } from "../gameState.js";

function drawWords(wordsList) {

    let wordsToMemory = []

    while (wordsToMemory.length < 5) {
        let draw = drawNumber(0, wordsList.length)

        if (!wordsToMemory.includes(wordsList[draw])) {
            wordsToMemory.push(wordsList[draw])
        }
    }

    return wordsToMemory
}

function verifyMemoryAnser(arrayMemory, arrayAnswer) {

    if (arrayAnswer.length !== arrayMemory.length) {
        return false
    }

    for (let i = 0; i < arrayAnswer.length; i++) {
        if (arrayMemory[i] !== arrayAnswer[i]) {
            return false
        }
    }

    return true
}

export function memoryChallenge() {

    const words = [
        "code", "debug", "function", "variable", "loop", "array", "object", "class",
        "method", "string", "boolean", "integer", "float", "compile", "execute",
        "return", "parameter", "argument", "syntax", "algorithm", "framework",
        "library", "database", "server", "client", "frontend", "backend",
        "repository", "commit", "branch", "merge", "deploy", "script", "interface", "module",
        "pointer", "stack", "queue", "hash", "binary", "recursion", "closure", "callback",
        "promise", "thread", "process", "exception", "try", "catch", "package", "dependency",
        "version", "token", "endpoint", "middleware", "protocol", "socket", "session",
        "cache", "buffer", "bit", "byte", "unicode", "json", "xml", "yaml", "api"
    ]

    let wordsDrawn = drawWords(words)

    console.log("\nMemorize these words:")
    console.log(wordsDrawn.join(" | "))
    ask.question("\nPress ENTER when ready...")
    console.clear()

    let userWords = []
    for (let word of ask.question("Type the words separated by comma: ").split(",")) {
        userWords.push(word.trim().toLowerCase())
    }

    if (verifyMemoryAnser(wordsDrawn, userWords)) {
        console.log("Perfect memory!")
        addScore(20)
    } else {
        console.log("Not quite!")
        loseLife()
    }

    pauseGame()
}