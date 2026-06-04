//imports //
import * as  ask from 'readline-sync';
import { addScore } from "./status.js";
import { loseLife } from "./status.js";
import { getScore } from './status.js';
import { getLives } from './status.js';

export function quiz() {

    const questions = [
        {
            options: [
                "1) She are my sister.",
                "2) She is my sister.",
                "3) She am my sister.",
                "4) She be my sister."
            ],
            answer: "2",
            explanation: "We use 'is' with 'She'.'"
        },
        {
            options: [
                "1) The children is in the park.",
                "2) The children are in the park.",
                "3) The children am in the park.",
                "4) The children be in the park."
            ],
            answer: "2",
            explanation: "'Children' is plural, so we use 'are'."
        },
        {
            options: [
                "1) My brother isn't at home.",
                "2) My brother aren't at home.",
                "3) My brother am not at home.",
                "4) My brother not is at home."
            ],
            answer: "1",
            explanation: "We use 'isn't' with singular subjects like 'My brother'."
        },
        {
            options: [
                "1) Are she your friend?",
                "2) Is she your friend?",
                "3) Am she your friend?",
                "4) She is your friend?"
            ],
            answer: "2",
            explanation: "Questions with 'she' use 'Is'."
        },
        {
            options: [
                "1) We are studying English.",
                "2) We is studying English.",
                "3) We am studying English.",
                "4) We studying English."
            ],
            answer: "1",
            explanation: "'We' uses 'are'."
        },
        {
            options: [
                "1) The book are on the table.",
                "2) The book am on the table.",
                "3) The book is on the table.",
                "4) The book be on the table."
            ],
            answer: "3",
            explanation: "'Book' is singular, so we use 'is'."
        },
        {
            options: [
                "1) You aren't late.",
                "2) You isn't late.",
                "3) You am not late.",
                "4) You be not late."
            ],
            answer: "1",
            explanation: "'You' uses 'are', so the negative form is 'aren't'."
        },
        {
            options: [
                "1) Is they ready?",
                "2) Are they ready?",
                "3) Am they ready?",
                "4) They are ready?"
            ],
            answer: "2",
            explanation: "Questions with 'they' use 'Are'."
        },
        {
            options: [
                "1) It is raining today.",
                "2) It are raining today.",
                "3) It am raining today.",
                "4) It raining today."
            ],
            answer: "1",
            explanation: "'It' uses 'is'."
        },
        {
            options: [
                "1) Our teachers are very helpful.",
                "2) Our teachers is very helpful.",
                "3) Our teachers am very helpful.",
                "4) Our teachers be very helpful."
            ],
            answer: "1",
            explanation: "'Teachers' is plural, so we use 'are'."
        }
    ]

    while (true) {

        if (questions.length <= 0) {
            ask.question("You complete the game, congratulations!")
            Process.exit()
        }

        console.clear()
        let drawnNumber = Math.floor(Math.random() * questions.length - 1)

        console.log("Which sentence is correct?")
        questions[drawnNumber].options.forEach(opt => console.log(opt))

        let answer

        while (true) {

            answer = ask.question("\nAnswer (1-4): ")

            if (["1", "2", "3", "4"].includes(answer)) {
                break;
            }

            console.log("\nInvalid option! Please type a number between 1 and 4.")
        }

        console.clear()

        if (answer === questions[drawnNumber].answer) {

            console.log("\nCorrect!")
            questions.splice([drawnNumber], 1)
            addScore(10)

        } else {

            console.log("\nWrong!")
            console.log(`Correct answer: ${questions[drawnNumber].answer}`)
            questions.splice([drawnNumber], 1)
            loseLife()
        }

        console.log("\nExplanation:")
        console.log(questions[drawnNumber].explanation)

        ask.question("\nPress ENTER to continue...")
        console.clear()
        console.log(`
===========================================
Score: ${getScore()} | Lives: ${getLives()}
===========================================`)

        ask.question("\nPress ENTER to play again...")
    }
}