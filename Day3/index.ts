import { readFileSync } from "fs";

const file = readFileSync("input.txt", "utf8");

function part1(file: string) {
  let lines = file.split("\n");
  let score = 0;
  for (let i = 0; i < lines.length; i++) {
    let compartment1 = lines[i].substring(0, lines[i].length / 2);
    let compartment2 = lines[i].substring(lines[i].length / 2, lines[i].length);
    score += getScore(checkChar(compartment1, compartment2));
  }
  console.log(score);
}

function part2(file: string) {
  let lines = file.split("\n");
  let score = 0;
  for (let i = 0; i < lines.length; i += 3) {
    let line1 = lines[i];
    let line2 = lines[i + 1];
    let line3 = lines[i + 2];
    score += getScore(checkBadge(line1, line2, line3));
  }
  console.log(score);
}

function checkChar(compartment1: string, compartment2: string): string {
  let result = "";
  for (let i = 0; i < compartment1.length; i++) {
    for (let j = 0; j < compartment2.length; j++) {
      if (compartment1.charAt(i) === compartment2.charAt(j)) {
        result += compartment1.charAt(i);
        break;
      }
    }
  }
  return result;
}

function checkBadge(line1: string, line2: string, line3: string): string {
  let result = "";
  for (let i = 0; i < line1.length; i++) {
    for (let j = 0; j < line2.length; j++) {
      for (let k = 0; k < line3.length; k++) {
        if (
          line1.charAt(i) === line2.charAt(j) &&
          line2.charAt(j) === line3.charAt(k)
        ) {
          result += line1.charAt(i);
          break;
        }
      }
    }
  }
  return result;
}

function getScore(value: string): number {
  let score = 0;
  if (value.toUpperCase() === value) {
    score = value.charCodeAt(0) - 38;
  } else {
    score = value.charCodeAt(0) - 96;
  }
  return score;
}

part1(file);
part2(file);
