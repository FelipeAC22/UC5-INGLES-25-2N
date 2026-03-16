import * as ask from 'readline-sync';
import { addScore, loseLife, drawNumber, pauseGame } from "../gameState.js";

function drawSentence(array) {
    return drawNumber(0, array.length)
}

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
        { words: ["beautiful", "is", "city", "The"], correct: "The city is beautiful" },
        { words: ["happy", "are", "They"], correct: "They are happy" },
        { words: ["coffee", "drink", "I", "every", "morning"], correct: "I drink coffee every morning" },
        { words: ["playing", "are", "kids", "The"], correct: "The kids are playing" },
        { words: ["music", "love", "We"], correct: "We love music" },
        { words: ["is", "very", "This", "easy"], correct: "This is very easy" },
        { words: ["football", "play", "They"], correct: "They play football" },
        { words: ["writes", "She", "stories"], correct: "She writes stories" },
        { words: ["computer", "my", "is", "new"], correct: "My computer is new" },
        { words: ["today", "busy", "am", "I"], correct: "I am busy today" },
        { words: ["watch", "movies", "We", "night", "at"], correct: "We watch movies at night" },
        { words: ["dog", "The", "loudly", "barks"], correct: "The dog barks loudly" },
        { words: ["friends", "are", "They", "good"], correct: "They are good friends" },
        { words: ["learn", "new", "things", "I"], correct: "I learn new things" },
        { words: ["clean", "room", "your", "Please"], correct: "Please clean your room" },
        { words: ["teacher", "Our", "kind", "is"], correct: "Our teacher is kind" }
    ]

    while (challenge.length > 0) {

        let sentenceToBuild = drawSentence(challenge)

        console.log("\nReorder the words to form a sentence:")
        console.log(challenge[sentenceToBuild].words)

        let answer = ask.question("Sentence: ")

        if (answer === challenge[sentenceToBuild].correct) {
            console.log("Correct!")
            challenge.splice(sentenceToBuild, 1)
            addScore(15)
        } else {
            console.log("Wrong! Correct sentence:", challenge[sentenceToBuild].correct)
            loseLife()

        }
        pauseGame()
        console.clear()
    }
}