import { readFileSync } from "fs";

const file = readFileSync("input.txt", "utf8");

function readLineByLine(file: string) {
    let total = 0;
    let array = [];
    let lines = file.split("\n");

    for (let i = 0; i < lines.length; i++) {
        if (lines[i] === "") {
            array.push(total);
            total = 0;
        } else {
            total += parseInt(lines[i]);
        }
    }
    array.push(total);
    return array;
}

function part1(calories: number[]) {
    let max = Math.max(...calories);
    console.log("The max value is: " + max);
}

function part2(calories: number[]) {
    let total = 0;
    let sortedArray: number[] = calories.sort((n1, n2) => n2 - n1);
    let sum = total + sortedArray[0] + sortedArray[1] + sortedArray[2];
    console.log("The sum of the top three is: " + sum);
}

part1(readLineByLine(file));
part2(readLineByLine(file));
