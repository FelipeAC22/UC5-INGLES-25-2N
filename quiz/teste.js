//imports //
import * as  ask from 'readline-sync';
import { addScore } from "./status.js";
import { loseLife } from "./status.js";
import { getScore } from './status.js';
import { getLives } from './status.js';

// função principal //
export function quiz() {

    //  array com as perguntas //
    const questions = [
        {
            question: "What is the correct sentence?",
            options: [
                "1) She are my sister.",
                "2) She is my sister.",
                "3) She am my sister.",
                "4) She be my sister."
            ],
            answer: "2",
            explanation: "We use 'is' with 'She'. The correct sentence is: 'She is my sister.'"
        },
        {
            question: "What is the correct sentence?",
            options: [
                "1) They is playing soccer.",
                "2) They am playing soccer.",
                "3) They are playing soccer.",
                "4) They be playing soccer."
            ],
            answer: "3",
            explanation: "We use 'are' with 'They'. The correct sentence is: 'They are playing soccer.'"
        },
        {
            question: "What is the correct sentence?",
            options: [
                "1) I are happy today.",
                "2) I is happy today.",
                "3) I am happy today.",
                "4) I be happy today."
            ],
            answer: "3",
            explanation: "We use 'am' with 'I'. The correct sentence is: 'I am happy today.'"
        },
        {
            question: "What is the correct sentence?",
            options: [
                "1) He are a good student.",
                "2) He am a good student.",
                "3) He is a good student.",
                "4) He be a good student."
            ],
            answer: "3",
            explanation: "We use 'is' with 'He'. The correct sentence is: 'He is a good student.'"
        },
        {
            question: "What is the correct sentence?",
            options: [
                "1) We are friends.",
                "2) We is friends.",
                "3) We am friends.",
                "4) We be friends."
            ],
            answer: "1",
            explanation: "We use 'are' with 'We'. The correct sentence is: 'We are friends.'"
        },
        {
            question: "What is the correct sentence?",
            options: [
                "1) The dog are sleeping.",
                "2) The dog is sleeping.",
                "3) The dog am sleeping.",
                "4) The dog be sleeping."
            ],
            answer: "2",
            explanation: "We use 'is' with singular nouns like 'The dog'."
        },
        {
            question: "What is the correct sentence?",
            options: [
                "1) You is very smart.",
                "2) You am very smart.",
                "3) You are very smart.",
                "4) You be very smart."
            ],
            answer: "3",
            explanation: "We use 'are' with 'You'."
        },
        {
            question: "What is the correct sentence?",
            options: [
                "1) My parents is at home.",
                "2) My parents are at home.",
                "3) My parents am at home.",
                "4) My parents be at home."
            ],
            answer: "2",
            explanation: "We use 'are' with plural nouns like 'parents'."
        },
        {
            question: "What is the correct sentence?",
            options: [
                "1) It are cold today.",
                "2) It am cold today.",
                "3) It be cold today.",
                "4) It is cold today."
            ],
            answer: "4",
            explanation: "We use 'is' with 'It'."
        },
        {
            question: "What is the correct sentence?",
            options: [
                "1) The students are in the classroom.",
                "2) The students is in the classroom.",
                "3) The students am in the classroom.",
                "4) The students be in the classroom."
            ],
            answer: "1",
            explanation: "We use 'are' with plural nouns like 'students'."
        }
    ]

    while (true) {

        console.clear()
        console.log(`
            lives: ${getLives}
            Score: ${getScore}
            `)

        let drawnNumber = Math.floor(Math.random() * questions.length)

        console.log("\n" + quiz[drawnNumber].question)
        quiz[drawnNumber].options.forEach(opt => console.log(opt))

        let answer

        while (true) {

            answer = ask.question("\nAnswer (1-4): ")

            if (["1", "2", "3", "4"].includes(answer)) {
                break;
            }

            console.log("\nInvalid option! Please type a number between 1 and 4.")
        }

        console.clear()

        if (answer === quiz[drawnNumber].answer) {

            console.log("\nCorrect!")
            quiz.splice([drawnNumber], 1)
            addScore(10)

        } else {

            console.log("\nWrong!")
            console.log(`Correct answer: ${quiz[drawnNumber].answer}`)
            loseLife()
        }

        console.log("\nExplanation:")
        console.log(quiz[drawnNumber].explanation)

        ask.question("\nPress ENTER to continue...")
    }
}

