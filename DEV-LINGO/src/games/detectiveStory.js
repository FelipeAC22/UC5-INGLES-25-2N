import * as ask from 'readline-sync';
import { addScore, loseLife } from "../gameState.js";

export function detectiveStory() {

    console.log("\nYou are a detective solving a mystery.")
    ask.question("Press ENTER to start the investigation...")
    console.clear()

    let Story = [
        {
            scene: "You ____ the crime scene",
            options: ["investigate", "investigates", "insvestigating"],
            correct: "investigate"
        },
        {
            scene: "you start ____ the peoples in the local",
            options: ["interrogates", "interrogating", "interrogate"],
            correct: "interrogating"
        },
        {
            scene: "After collect informations you reach at the _____ suspect",
            options: ["principal", "principals", "principally"],
            correct: "principal"
        },
        {
            scene: "You push the suspect to ____ the truth",
            options: ["speaks", "speaking", "speak"],
            correct: "speak"
        },
        {
            scene: "The suspect ____ nervous ",
            options: ["look", "looks", "looking"],
            correct: "looks"
        },
        {
            scene: "After the interrogatory, the suspect ____ his guilt",
            options: ["confesses", "confess", "confessing"],
            correct: "confesses"
        }
    ]

    Story.forEach(s => {
        console.log("\nChoose the correct word to solve this clue:\n")
        console.log(s.scene)
        console.log(`\nWords: ${s.options.join(" | ")}`)

        let answer = ask.question("\nOption: ")

        if (answer.toLocaleLowerCase() === s.correct) {
            console.log("\nClue discovered!")
            addScore(15)
        } else {
            console.log("\nWrong clue!")
            loseLife()
        }

        ask.question("\nPress ENTER to next clue...")
        console.clear()
    })
    ask.question("Congrats you solve the mistery! Press ENTER to continue...")
}