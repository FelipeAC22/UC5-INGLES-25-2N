import * as ask from 'readline-sync';
import { getScore, getLives, resetGame } from "./gameState.js";
import { quiz } from "./games/quiz.js";
import { completeSentence } from "./games/completeSentence.js";
import { sentenceBuilder } from "./games/sentenceBuilder.js";
import { memoryChallenge } from "./games/memoryChallenge.js";
import { battleRPG } from "./games/battleRPG.js";
import { detectiveStory } from "./games/detectiveStory.js";

export function showMenu() {

    let actions = {
        "1": quiz,
        "2": completeSentence,
        "3": sentenceBuilder,
        "4": memoryChallenge,
        "5": battleRPG,
        "6": detectiveStory,
        "0": () => {
            console.clear()
            console.log("Program shutting down...")
            process.exit()
        }
    }

    while (true) {

        if (getLives() <= 0) {
            console.clear()
            console.log("\n===== GAME OVER =====")
            console.log("Final Score:", getScore())
            ask.question("\nPress ENTER to restart...")
            resetGame()
        } else { console.clear() }

        console.log(`
==========================
    DEVLINGO ARENA
==========================
Score: ${getScore()} | Lives: ${getLives()}
--------------------------
1 - Quiz
2 - Complete the Sentence
3 - Sentence Builder
4 - Memory Challenge
5 - Battle RPG
6 - Detective Story
0 - Exit
==========================`)

        let option = ask.question("Choose an option: ")

        console.clear()

        if (actions[option]) {
            actions[option]()
        } else {
            console.log("Invalid option!")
        }
    }
}


