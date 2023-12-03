import { readFileSync } from "fs";

const file = readFileSync("input.txt", "utf8");

function part1(file: string) {
    let lines = file.split("\n");
    let check = true;
    let total = 0;
    let gameNumber = "";

    // Loop through the lines
    for (let i = 0; i < lines.length; i++) {
        // Split at the game number
        let line = lines[i].split(":");
        // Get the game number
        for (let j = 0; j < line.length; j++) {
            gameNumber = line[0].split(" ")[1];
        }
        // Split at the games
        let games = line[1].split(";");
        // Loop through the games
        for (let k = 0; k < games.length; k++) {
            // Split at the colors
            let game = games[k].split(",");
            // Loop through the colors
            for (let l = 0; l < game.length; l++) {
                // Check if red is in the game
                if (game[l].includes("red")) {
                    game[l] = game[l].replace("red", "");
                    if (parseInt(game[l]) > 12) {
                        check = false;
                    }
                }
                // Check if green is in the game
                if (game[l].includes("green")) {
                    game[l] = game[l].replace("green", "");
                    if (parseInt(game[l]) > 13) {
                        check = false;
                    }
                }
                // Check if blue is in the game
                if (game[l].includes("blue")) {
                    game[l] = game[l].replace("blue", "");
                    if (parseInt(game[l]) > 14) {
                        check = false;
                    }
                }
            }
        }
        // Check if the game is valid and add it to the total
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

    // Loop through the lines
    for (let i = 0; i < lines.length; i++) {
        // Split at the game number
        let line = lines[i].split(":");
        // Split at the games
        let games = line[1].split(";");
        // Loop through the games
        for (let j = 0; j < games.length; j++) {
            // Split at the colors
            let game = games[j].split(",");
            // Loop through the colors
            for (let k = 0; k < game.length; k++) {
                // Check if red is in the game
                if (game[k].includes("red")) {
                    game[k] = game[k].replace("red", "");

                    // Check if the red is the highest
                    if (parseInt(game[k]) > reds) {
                        reds = parseInt(game[k]);
                    }
                }
                // Check if green is in the game
                if (game[k].includes("green")) {
                    game[k] = game[k].replace("green", "");
                    // Check if the green is the highest
                    if (parseInt(game[k]) > greens) {
                        greens = parseInt(game[k]);
                    }
                }
                // Check if blue is in the game
                if (game[k].includes("blue")) {
                    game[k] = game[k].replace("blue", "");

                    // Check if the blue is the highest
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
