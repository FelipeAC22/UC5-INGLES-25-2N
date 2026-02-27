import * as ask from 'readline-sync';
import { addScore } from "../gameState.js";
import { loseLife } from "../gameState.js";

export function battleRPG() {

    let enemyHP = 30

    console.log("\nA Grammar Monster appears!")

    while (enemyHP > 0) {

        console.log("\nEnemy HP:", enemyHP)
        console.log("Answer correctly to attack.")

        let answer = ask.question("Past of 'go': ")

        if (answer.toLowerCase() === "went") {
            console.log("Hit!")
            enemyHP -= 10
            addScore(10)
        } else {
            console.log("Miss! You got hit.")
            loseLife()
            break;
        }
    }

    if (enemyHP <= 0) {
        console.log("Monster defeated!")
    }

    ask.question("\nPress ENTER to continue...")
}