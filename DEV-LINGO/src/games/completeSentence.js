import * as ask from 'readline-sync'
import { addScore } from "../gameState.js";
import { loseLife } from "../gameState.js";
import { getScore } from "../gameState.js";
import { getLives } from "../gameState.js";
import { resetGame } from "../gameState.js";

export function completeSentence() {

    const sentences = [
        { text: "I ____ a developer.", answer: "am" },
        { text: "She ____ coding now.", answer: "is" }
    ]

    sentences.forEach(s => {

        console.log("\nComplete:")
        console.log(s.text)

        let answer = ask.question("Word: ").toLowerCase()

        if (answer === s.answer) {
            console.log("Correct!")
            addScore(10)
        } else {
            console.log("Wrong! Correct answer:", s.answer)
            loseLife()
        }

    })

    ask.question("\nPress ENTER to continue...")
}


