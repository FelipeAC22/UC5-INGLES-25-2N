import * as ask from 'readline-sync';
import { addScore } from "../gameState.js";
import { loseLife } from "../gameState.js";

export function memoryChallenge() {

    const words = ["code", "debug", "function", "variable"]

    console.log("\nMemorize these words:")
    console.log(words.join(", "))

    ask.question("\nPress ENTER when ready...")

    console.clear()

    let answer = ask.question("Type the words separated by comma: ")

    if (answer === words.join(", ")) {
        console.log("Perfect memory!")
        addScore(20)
    } else {
        console.log("Not quite!")
        loseLife()
    }

    ask.question("\nPress ENTER to continue...")
}