import { readFileSync} from 'fs';

const file = readFileSync("input.txt", "utf8");

function readingFile(file: string) {
    let score = 0;
    let lines = file.split("\n");

    for (let i = 0; i < lines.length; i++) {
        let inputs = lines[i].split(" ");
        let opponent = inputs[0]
        let player = inputs[1]
        score += calculateScore(opponent, player)
    }
    console.log("Final score: " + score)
}

function calculateBaseScore(player: string): number{
    let inputScore = 0
    if(player === "X"){
        inputScore = 1
    }
    else if(player === "Y"){
        inputScore = 2
    }
    else{
        inputScore = 3
    }
    // console.log("Input score: " + inputScore + " Player: " + player)
    return inputScore
}

function calculateWinner(opponent: string, player: string): number{
    let score = 0
    if((opponent === "A" && player === "X") || (opponent === "B" && player === "Y") || (opponent === "C" && player === "Z")){
        score = 3
    }
    else if((opponent === "A" && player === "Y") || opponent === "B" && player === "Z" || opponent === "C" && player === "X"){
        score = 6
    }
    else if(opponent === "A" && player === "Z" || opponent === "B" && player === "X" || opponent === "C" && player === "Y"){
        score = 0
    }
    // console.log("Winner score: " + score + " Opponent: " + opponent + " Player: " + player)
    return score
}

function calculateScore(opponent: string, player: string): number{
    let score = 0
    let baseScore = calculateBaseScore(player)
    let winnerScore = calculateWinner(opponent, player)
    score = baseScore + winnerScore
    // console.log("Total score: " + score)
    return score
}

readingFile(file)