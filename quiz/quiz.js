//imports //
import * as  ask from 'readline-sync'
import { addScore } from "./status.js";
import { loseLife } from "./status.js";

// função principal //
export function quiz() {

    //  array com as perguntas //
    const questions = [
        {
            question: "She ____ my friend.",
            options: ["1) am", "2) is", "3) are"],
            answer: "2"
        },
        {
            question: "They ____ students.",
            options: ["1) is", "2) are", "3) am"],
            answer: "2"
        },
        {
            question: "He ___ smart.",
            options: ["1) is", "2) are", "3) am"],
            answer: "1"
        },
        {
            question: "We ___ the champions.",
            options: ["1) is", "2) am", "3) are"],
            answer: "3"
        },
        {
            question: "I ___ happy today.",
            options: ["1) am", "2) is", "3) are"],
            answer: "1"
        },
        {
            question: "You ___ very kind.",
            options: ["1) is", "2) are", "3) am"],
            answer: "2"
        },
        {
            question: "My dog ___ brown.",
            options: ["1) are", "2) am", "3) is"],
            answer: "3"
        },
        {
            question: "The cats ___ sleeping.",
            options: ["1) are", "2) is", "3) am"],
            answer: "1"
        },
        {
            question: "John ___ my brother.",
            options: ["1) are", "2) am", "3) is"],
            answer: "3"
        },
        {
            question: "We ___ ready for school.",
            options: ["1) is", "2) are", "3) am"],
            answer: "2"
        },
        {
            question: "I ___ a teacher.",
            options: ["1) am", "2) are", "3) is"],
            answer: "1"
        },
        {
            question: "The book ___ on the table.",
            options: ["1) am", "2) are", "3) is"],
            answer: "3"
        },
        {
            question: "They ___ my classmates.",
            options: ["1) are", "2) is", "3) am"],
            answer: "1"
        },
        {
            question: "You ___ late.",
            options: ["1) is", "2) are", "3) am"],
            answer: "2"
        },
        {
            question: "The teacher ___ very nice.",
            options: ["1) are", "2) am", "3) is"],
            answer: "3"
        },
        {
            question: "My parents ___ at home.",
            options: ["1) is", "2) are", "3) am"],
            answer: "2"
        },
        {
            question: "It ___ a beautiful day.",
            options: ["1) are", "2) am", "3) is"],
            answer: "3"
        },
        {
            question: "The children ___ playing outside.",
            options: ["1) are", "2) is", "3) am"],
            answer: "1"
        },
        {
            question: "I ___ from Brazil.",
            options: ["1) is", "2) are", "3) am"],
            answer: "3"
        },
        {
            question: "This computer ___ new.",
            options: ["1) is", "2) are", "3) am"],
            answer: "1"
        }
    ]

    // for each para percorrer cada pergunta //
    questions.forEach(q => {
        console.clear()
        
        // o q representa a pergunta da volta atual do for each //
        console.log("\n" + q.question)
        q.options.forEach(opt => console.log(opt))

        // variavel que armazena o chute do usuario //
        let answer = ask.question("Answer: ")

        // if else para verfiicar se está correto //
        if (answer === q.answer) {
            console.log("Correct!")
            addScore(10)
        } else {
            console.log("Wrong!")
            loseLife()
        }

    })

    // ask vazio para pausa antes de continuar o jogo //
    ask.question("\nPress ENTER to continue...")
}
