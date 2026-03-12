import * as ask from 'readline-sync';
import { addScore, loseLife } from "../gameState.js";

export function memoryChallenge() {

    const words = [ // array das palavras pro jogo da memória //
        "code", "debug", "function", "variable", "loop", "array", "object", "class",
        "method", "string", "boolean", "integer", "float", "compile", "execute",
        "return", "parameter", "argument", "syntax", "algorithm", "framework",
        "library", "database", "server", "client", "frontend", "backend",
        "repository", "commit", "branch", "merge", "deploy", "script", "interface", "module",
        "pointer", "stack", "queue", "hash", "binary", "recursion", "closure", "callback",
        "promise", "thread", "process", "exception", "try", "catch", "package", "dependency",
        "version", "token", "endpoint", "middleware", "protocol", "socket", "session",
        "cache", "buffer", "bit", "byte", "unicode", "json", "xml", "yaml", "api"
    ]

    let wordsDrawn = [] // array vazio para armazenar as palavras sorteadas //

    while (wordsDrawn.length < 5) { // while que se repete enquanto a quantia de intens no array de palavras sorteadas for menor que 5 //
        let draw = Math.floor(Math.random() * words.length) // pequeno sorteio que sorteia um numero aleatório de 0 até o tamanho do array de palavras //

        if (!wordsDrawn.includes(words[draw])) { // if para verificar se a palavra sorteada ja está no array do sorteio para evitar palvras repitidas //
            wordsDrawn.push(words[draw]) // se não estiver inclusa o numero sorteado acima é usado como indice para puxar a palavra do array de palavras //
        }
    }

    console.log("\nMemorize these words:")
    console.log(wordsDrawn.join(" | "))

    ask.question("\nPress ENTER when ready...")

    console.clear()

    let userWords = [] // array para armazenar as palavras lembradas pelo usuario //
    for (let word of ask.question("Type the words separated by comma: ").split(",")) { // separa cada palavra da resposta do usuario por meio da virgula e joga uma por vez para dentro de word//
        userWords.push(word.trim().toLowerCase()) // puxa cada palavra de word sem espaços e em minusculas para dentro do array useWords //
    }

    let isCorrect = false // variavel que indica se o usuario acertou ou errou, primariamente definida como false //

    if (userWords.length <= wordsDrawn.length) { // if que verfica se o total de palavras dadas pelo usuario não é maior que o própio de palavras sorteadas //
        isCorrect = true // se sim isCorrect passar a ser true, se não a resposta já é descartada //

        for (let i = 0; i < userWords.length; i++) { // o for que verifica se a resposta está correta //
            if (!wordsDrawn.includes(userWords[i])) { // se houver um palavra que não esteja no array de sorteio isCorrect volta a ser false //
                isCorrect = false
                break;
            }
        }
    }

    if (isCorrect) { // if para o resultado das verficações anteriores //
        console.log("Perfect memory!")
        addScore(20)
    } else {
        console.log("Not quite!")
        loseLife()
    }

    ask.question("\nPress ENTER to continue...")
}