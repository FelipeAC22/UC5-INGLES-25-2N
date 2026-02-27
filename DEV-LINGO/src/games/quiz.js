import * as  ask from 'readline-sync';
import { addScore } from "../gameState.js";
import { loseLife } from "../gameState.js";

export function quiz() {

    const questions = [
        { question: "She ____ my friend.", options: ["1) am", "2) is", "3) are"], answer: "2" },
        { question: "They ____ students.", options: ["1) is", "2) are", "3) am"], answer: "2" },
        { question: "He ___ smart", options: ["1) is", "2) are", "3) am"], answer: "1" },
        { question: "we ___ the champions", options: ["1) is", "2) am", "3) are"], answer: "3" },
        { question: "I ____ very happy today.", options: ["1) am", "2) is", "3) are"], answer: "1" },
        { question: "The cat ____ black.", options: ["1) are", "2) am", "3) is"], answer: "3" },
        { question: "You ____ a great teacher.", options: ["1) is", "2) are", "3) am"], answer: "2" },
        { question: "It ____ a beautiful day.", options: ["1) is", "2) are", "3) am"], answer: "1" },
        { question: "Dogs ____ loyal animals.", options: ["1) is", "2) am", "3) are"], answer: "3" },
        { question: "The movie ____ very long.", options: ["1) is", "2) are", "3) am"], answer: "1" },
        { question: "My parents ____ at home.", options: ["1) am", "2) is", "3) are"], answer: "3" },
        { question: "Pizza ____ my favorite food.", options: ["1) is", "2) are", "3) am"], answer: "1" }
    ]

    questions.forEach(q => {

        console.log("\n" + q.question)
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
