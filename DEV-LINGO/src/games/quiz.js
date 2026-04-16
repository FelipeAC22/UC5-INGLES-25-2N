import * as  ask from 'readline-sync'
import { addScore } from "../gameState.js";
import { loseLife } from "../gameState.js";
import { getScore  } from "../gameState.js";
import { getLives } from "../gameState.js";
import { resetGame } from "../gameState.js";

export function quiz() {

    const questions = [
        {
            question: "She ____ my friend.",
            options: ["1) am", "2) is", "3) are"],
            answer: "2"
        },
        {
            question: "They ____ students.",
            options: ["1) is", "2) are", "3) am"],
            answer: "2"
        },
        {
            question: "He ___ smart",
            options: ["1) is", "2) are", "3) am"],
            answer: "1"
        },
        {
            question: "we ___ the champions",
            options: ["1) is", "2) am", "3) are"],
            answer: "3"
        }
    ]

    questions.forEach(q => {

        console.log("\n" + q.question);
        q.options.forEach(opt => console.log(opt))

        let answer = ask.question("Answer: ")

        if (answer === q.answer) {
            console.log("Correct!")
           addScore(10)
        } else {
            console.log("Wrong!")
            loseLife()
        }

    })

    ask.question("\nPress ENTER to continue...")
}
