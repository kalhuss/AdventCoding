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

function maxArray(calories: number[]) {
  let max = Math.max(...calories);
  console.log("The max value is: " + max);
}

function topThree(calories: number[]) {
  let total = 0;
  let sortedArray: number[] = calories.sort((n1, n2) => n2 - n1);
  let sum = total + sortedArray[0] + sortedArray[1] + sortedArray[2]
  console.log("The sum of the top three is: " + sum)
}

maxArray(readLineByLine(file));
topThree(readLineByLine(file));
