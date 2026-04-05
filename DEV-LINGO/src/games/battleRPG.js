import * as ask from 'readline-sync'; // refatorado //
import { addScore, loseLife, drawNumber, pauseGame } from "../gameState.js";

function infoTurn(hp, question) {
    console.log("\nEnemy HP:", hp)
    console.log("Answer correctly to attack.\n")
    console.log(question.question)
}

function verifyAnswer(answer, correct) {
    return answer.toLowerCase().trim() === correct

}

function attackEnemy(hp) {
    let damage = drawNumber(10, 20)
    console.log(`Hit! You caused ${damage} of damage`)
    return hp - damage
}

export function battleRPG() {

    const questions = [
        { question: "Past of run:", correct: "ran" },
        { question: "Past of drink:", correct: "drank" },
        { question: "Past of write:", correct: "wrote" },
        { question: "Past of come:", correct: "came" },
        { question: "Past of begin:", correct: "began" },
        { question: "Past of sing:", correct: "sang" },
        { question: "Past of swim:", correct: "swam" },
        { question: "Past of drive:", correct: "drove" },
        { question: "Plural of man:", correct: "men" },
        { question: "Plural of woman:", correct: "women" },
        { question: "Plural of person:", correct: "people" },
        { question: "Plural of leaf:", correct: "leaves" },
        { question: "Plural of knife:", correct: "knives" },
        { question: "Plural of wolf:", correct: "wolves" },
        { question: "Future of eat (use will):", correct: "will eat" },
        { question: "Future of see (use will):", correct: "will see" },
        { question: "Present of wrote:", correct: "write" },
        { question: "Present of ran:", correct: "run" },
        { question: "Past of build:", correct: "built" },
        { question: "Past of buy:", correct: "bought" }
    ]

    let enemyHP = drawNumber(50, 100)

    console.log(`\nA grammar monster appears!`)

    for (q of questions) {
        console.clear()
        if (enemyHP <= 0) {
            console.clear()
            console.log("Monster defeated!")
            break;
        }

        infoTurn(enemyHP, q)

        if (enemyHP > 0) {

            let answer = ask.question("Answer: ")

            if (verifyAnswer(answer, q.correct)) {
                enemyHP = attackEnemy(enemyHP)
                pauseGame()
                addScore(10)
            } else {
                console.log("Miss! You got hit.")
                loseLife()
                pauseGame()
            }
        }
    }

    pauseGame()
}