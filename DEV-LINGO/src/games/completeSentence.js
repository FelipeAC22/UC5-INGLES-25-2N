import * as ask from 'readline-sync';
import { addScore } from "../gameState.js";
import { loseLife } from "../gameState.js";

export function completeSentence() {

    const sentences = [
        { text: "I ____ a developer.", answer: "am" },
        { text: "She ____ coding now.", answer: "is" },
        { text: "They ____ playing football.", answer: "are" },
        { text: "He ____ to the gym every day.", answer: "goes" },
        { text: "We ____ like coffee.", answer: "don't" },
        { text: "The cat ____ sleeping on the sofa.", answer: "is" },
        { text: "____ you speak English?", answer: "Do" },
        { text: "It ____ a very sunny day.", answer: "is" },
        { text: "I ____ my homework yesterday.", answer: "did" },
        { text: "You ____ my best friend.", answer: "are" }
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


