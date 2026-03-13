import * as ask from 'readline-sync';
import { addScore, loseLife } from "../gameState.js";

export function battleRPG() {

    const questions = [ // array para as perguntas //
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

    let enemyHP = Math.floor(Math.random() * 51) + 50 // variavel que recebe o valor de hp sorteado para o monstro, que tem como minimo 50 e maximo 100 //

    console.log(`\nA grammar monster appears!`)

    questions.forEach(q => { // forEach para cada pergunta //
        if (enemyHP > 0) { // verifica se o monstro ainda está vivo //
            console.clear() // limpa o console depois de cada ciclo do forEach //
            console.log("\nEnemy HP:", enemyHP)
            console.log("Answer correctly to attack.\n")
            console.log(q.question)
            console.clear() // limpa o console depois de cada pergunta //
            if (answer.toLowerCase() === q.correct) { // verfica se a resposta está correta e diminui o hp do monstro //
                let damage = Math.floor(Math.random() * 11) + 10 // sorteia o dano que é dado a cada acerto, que tem como minimo 10 e mmaximo 20 //
                enemyHP -= damage
                if (damage === 20) { // verificação simples que imprime uma mensagem especial caso o dano maximo seja sorteado //
                    console.log(`Critical hit! you caused maximum damage! the enemy lost ${damage} hp points`)
                } else {
                    console.log(`Hit! You caused ${damage} of damage`)
                }
                ask.question("\nPress ENTER to attack again...") // ask vazio para pausa e addScore para a pontuação //
                addScore(10)

            } else {
                console.log("Miss! You got hit.") // else para caso a resposta esteja errada //
                loseLife()
                ask.question("\nPress ENTER to attack again...")
            }
        }
    })
    if (enemyHP <= 0) { // se o monstro estiver com o hp igual ou menor a 0 o jogo é encerrado //
        console.clear()
        console.log("Monster defeated!")
    }

    ask.question("\nPress ENTER to continue...")
}