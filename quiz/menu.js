import * as ask from 'readline-sync';
import { getScore } from "./status.js";
import { getLives } from "./status.js";
import { resetGame } from "./status.js";
import { quiz } from "./quiz.js";

export function showMenu() {

    while (true) {

        if (getLives() <= 0) {
            console.log("\nGAME OVER")
            console.log("Final Score:", getScore())
            resetGame()
        }

        console.log(`
=========================
Score: ${getScore()} | Lives: ${getLives()}
--------------------------
1 - Iniciar
0 - Exit
==========================`)

        let option = ask.question("Choose an option: ")

        switch (option) {
            case "1": quiz()
                break;
            case "0": process.exit()
            default:
                console.log("Invalid option!")
        }
    }
}