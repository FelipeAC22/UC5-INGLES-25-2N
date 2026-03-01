import * as ask from 'readline-sync';
import { addScore, loseLife} from "../gameState.js";

export function detectiveStory() {

    console.log("\nYou are a detective solving a mystery.")

    console.log("\nChoose the correct word:")
    console.log("The suspect ____ nervous.")

    console.log("1) look")
    console.log("2) looks")
    console.log("3) looking")

    let answer = ask.question("Option: ")

    if (answer === "2") {
        console.log("Clue discovered!")
        addScore(15)
    } else {
        console.log("Wrong clue!")
        loseLife()
    }

    ask.question("\nPress ENTER to continue...")
}

