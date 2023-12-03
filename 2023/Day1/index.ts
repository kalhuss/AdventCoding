import { readFileSync } from "fs";

const file = readFileSync("input.txt", "utf8");

function part1(file: string) {
    let lines = file.split("\n");
    let total = 0;
    let currentLine = "";

    // Loop through the lines
    for (let i = 0; i < lines.length; i++) {
        // Loop through the characters
        for (let j = 0; j < lines[i].length; j++) {
            // Check if the character is a number
            if (!isNaN(parseInt(lines[i].charAt(j)))) {
                currentLine += lines[i].charAt(j);
            }
        }

        // Check if the line is valid and add it to the total
        if (currentLine.length < 2) {
            currentLine += currentLine;
        } else {
            currentLine = currentLine[0] + currentLine.slice(-1);
        }
        total += parseInt(currentLine);
        currentLine = "";
    }
    console.log(total);
}

// Array of numbers and their names
const number: string[][] = [
    ["one", "1"],
    ["two", "2"],
    ["three", "3"],
    ["four", "4"],
    ["five", "5"],
    ["six", "6"],
    ["seven", "7"],
    ["eight", "8"],
    ["nine", "9"],
];

function part2(file: string) {
    let lines = file.split("\n");
    let total = 0;
    let currentLine = "";
    let currentNumber = "";

    // Loop through the lines
    for (let i = 0; i < lines.length; i++) {
        // Loop through the characters
        for (let j = 0; j < lines[i].length; j++) {
            currentLine += lines[i].charAt(j);

            // Loop through the currentLine
            for (let k = 0; k < number.length; k++) {
                // Check if the currentLine includes the number
                if (currentLine.includes(number[k][0])) {
                    currentNumber += number[k][1];
                    currentLine = currentLine.slice(-1);
                }
            }

            // Check if the character is a number
            if (!isNaN(parseInt(lines[i].charAt(j)))) {
                currentNumber += lines[i].charAt(j);
            }
        }

        // Check if the line is valid and add it to the total
        currentNumber = currentNumber[0] + currentNumber.slice(-1);
        total += parseInt(currentNumber);
        currentNumber = "";
    }
    console.log(total);
}
part1(file);
part2(file);
