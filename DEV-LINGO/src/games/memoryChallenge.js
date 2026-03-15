import * as ask from 'readline-sync';
import { addScore, loseLife } from "../gameState.js";

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

    let wordsDrawn = []

    while (wordsDrawn.length < 5) {
        let draw = Math.floor(Math.random() * words.length)

        if (!wordsDrawn.includes(words[draw])) {
            wordsDrawn.push(words[draw])
        }
    }

    console.log("\nMemorize these words:")
    console.log(wordsDrawn.join(" | "))

    ask.question("\nPress ENTER when ready...")

    console.clear()

    let userWords = []
    for (let word of ask.question("Type the words separated by comma: ").split(",")) {
        userWords.push(word.trim().toLowerCase())
    }

    let isCorrect = false

    if (userWords.length <= wordsDrawn.length) {
        isCorrect = true

        for (let i = 0; i < userWords.length; i++) {
            if (!wordsDrawn.includes(userWords[i])) {
                isCorrect = false
                break;
            }
        }
    }

    if (isCorrect) {
        console.log("Perfect memory!")
        addScore(20)
    } else {
        console.log("Not quite!")
        loseLife()
    }

    ask.question("\nPress ENTER to continue...")
}