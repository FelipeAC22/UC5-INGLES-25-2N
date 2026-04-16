import * as ask from 'readline-sync'
import { addScore } from "../gameState.js";
import { loseLife } from "../gameState.js";
import { getScore } from "../gameState.js";
import { getLives } from "../gameState.js";
import { resetGame } from "../gameState.js";

export function sentenceBuilder() {

    const challenge = {
        words: ["developer", "is", "He", "a"],
        correct: "He is a developer"
    }

    challenge.forEach(c => {

        console.log("\nReorder the words to form a sentence:")
        console.log(challenge.words.join(" | "))

        let answer = ask.question("Sentence: ")

        if (answer === challenge.correct) {
            console.log("Correct!")
            addScore(15)
        } else {
            console.log("Wrong! Correct sentence:", challenge.correct)
            loseLife()
        }
    })

    ask.question("\nPress ENTER to continue...")
}