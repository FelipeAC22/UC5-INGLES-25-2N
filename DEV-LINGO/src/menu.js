import * as ask from 'readline-sync';
import { getScore } from "./gameState.js";
import { getLives } from "./gameState.js";
import { resetGame } from "./gameState.js";
import { quiz } from "./games/quiz.js";
import { completeSentence } from "./games/completeSentence.js";
import { sentenceBuilder } from "./games/sentenceBuilder.js";
import { memoryChallenge } from "./games/memoryChallenge.js";
import { battleRPG } from "./games/battleRPG.js";
import { detectiveStory } from "./games/detectiveStory.js";

export function showMenu() {

    while (true) {

        if (getLives() <= 0) {
            console.log("\nGAME OVER")
            console.log("Final Score:", getScore())
            resetGame()
        }
        console.clear()
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

        switch (option) {
            case "1": quiz()
                break;
            case "2": completeSentence()
                break;
            case "3": sentenceBuilder()
                break;
            case "4": memoryChallenge()
                break;
            case "5": battleRPG()
                break;
            case "6": detectiveStory()
                break;
            case "0":
                console.log("Program shuting down...")
                process.exit()
            default:
                console.log("Invalid option!")
        }
    }
}

