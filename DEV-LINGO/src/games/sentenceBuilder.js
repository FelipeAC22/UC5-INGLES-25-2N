import * as ask from 'readline-sync';
import { addScore } from "../gameState.js";
import { loseLife } from "../gameState.js";

export function sentenceBuilder() {

    let challenge = [
        { words: ["developer", "is", "He", "a"], correct: "He is a developer" },
        { words: ["is", "perfect", "She"], correct: "She is perfect" },
        { words: ["love", "I", "coding"], correct: "I love coding" },
        { words: ["is", "blue", "The", "sky"], correct: "The sky is blue" },
        { words: ["tea", "drink", "They", "hot"], correct: "They drink hot tea" },
        { words: ["fast", "car", "runs", "The"], correct: "The car runs fast" },
        { words: ["English", "learning", "We", "are"], correct: "We are learning English" },
        { words: ["book", "read", "a", "Please"], correct: "Please read a book" },
        { words: ["pizza", "like", "not", "do", "I"], correct: "I do not like pizza" },
        { words: ["beautiful", "is", "city", "The"], correct: "The city is beautiful" }
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