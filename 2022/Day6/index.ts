import { readFileSync } from "fs";

const file = readFileSync("input.txt", "utf8");

function part1(file: string) {
    const lines = file.split("\n");
    let counter = 0;
    let temp = "";

    for (let i = 0; i < lines.length; i++) {
        for (let j = 0; j < lines[i].length; j++) {
            temp += lines[i][j];
            if (temp.length == 4) {
                if (new Set(temp).size != 4) {
                    counter++;
                    temp = temp.slice(1);
                }
            }
        }
    }
    counter += 4;
    console.log(counter);
}

function part2(file: string) {
    const lines = file.split("\n");
    let counter = 0;
    let temp = "";

    for (let i = 0; i < lines.length; i++) {
        for (let j = 0; j < lines[i].length; j++) {
            temp += lines[i][j];
            if (temp.length == 14) {
                if (new Set(temp).size != 14) {
                    counter++;
                    temp = temp.slice(1);
                }
            }
        }
    }
    counter += 14;
    console.log(counter);
}

part1(file);
part2(file);
