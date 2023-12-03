import { readFileSync } from "fs";

const file = readFileSync("input.txt", "utf8");

function part1(file: string) {
    let lines = file.split("\n");
    let check = true;
    let total = 0;
    let gameNumber = "";

    for (let i = 0; i < lines.length; i++) {
        let line = lines[i].split(":");

        for (let j = 0; j < line.length; j++) {
            gameNumber = line[0].split(" ")[1];
        }

        let games = line[1].split(";");

        for (let k = 0; k < games.length; k++) {
            let game = games[k].split(",");
            for (let l = 0; l < game.length; l++) {
                if (game[l].includes("red")) {
                    game[l] = game[l].replace("red", "");
                    if (parseInt(game[l]) > 12) {
                        check = false;
                    }
                }

                if (game[l].includes("green")) {
                    game[l] = game[l].replace("green", "");
                    if (parseInt(game[l]) > 13) {
                        check = false;
                    }
                }

                if (game[l].includes("blue")) {
                    game[l] = game[l].replace("blue", "");
                    if (parseInt(game[l]) > 14) {
                        check = false;
                    }
                }
            }
        }
        if (check) {
            total += parseInt(gameNumber);
        }
        check = true;
    }
    console.log(total);
}

function part2(file: string) {
    let lines = file.split("\n");
    let total = 0;
    let reds = 0;
    let greens = 0;
    let blues = 0;
    let power = 0;

    for (let i = 0; i < lines.length; i++) {
        let line = lines[i].split(":");

        let games = line[1].split(";");

        for (let j = 0; j < games.length; j++) {
            let game = games[j].split(",");
            for (let k = 0; k < game.length; k++) {
                if (game[k].includes("red")) {
                    game[k] = game[k].replace("red", "");
                    if (parseInt(game[k]) > reds) {
                        reds = parseInt(game[k]);
                    }
                }

                if (game[k].includes("green")) {
                    game[k] = game[k].replace("green", "");
                    if (parseInt(game[k]) > greens) {
                        greens = parseInt(game[k]);
                    }
                }

                if (game[k].includes("blue")) {
                    game[k] = game[k].replace("blue", "");
                    if (parseInt(game[k]) > blues) {
                        blues = parseInt(game[k]);
                    }
                }
            }
        }
        power = reds * greens * blues;
        total += power;
        reds = 0;
        greens = 0;
        blues = 0;
        power = 0;
    }
    console.log(total);
}

part1(file);
part2(file);
