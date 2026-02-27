import * as ask from 'readline-sync'
import { addScore } from "../gameState.js";
import { loseLife } from "../gameState.js";
import { getScore } from "../gameState.js";
import { getLives } from "../gameState.js";
import { resetGame } from "../gameState.js";

export function sentenceBuilder() {

    let challenge = [
        {
            words: ["developer", "is", "He", "a"],
            correct: "He is a developer"
        },
        {
            words:["is", "perfect", "She"],
            correct: "She is perfect"
        }
    ]

    challenge.forEach(c => {

        console.log("\nReorder the words to form a sentence:")
        console.log(c.words.join(" | "))

        let answer = ask.question("Sentence: ")

        if (answer === c.correct) {
            console.log("Correct!")
            addScore(15)
        } else {
            console.log("Wrong! Correct sentence:", c.correct)
            loseLife()
        }
    })

    ask.question("\nPress ENTER to continue...")
}