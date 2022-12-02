import { readFileSync } from "fs";

const file = readFileSync("input.txt", "utf8");

function part1(file: string) {
  let score = 0;
  let lines = file.split("\n");

  for (let i = 0; i < lines.length; i++) {
    let inputs = lines[i].split(" ");
    let opponent = inputs[0];
    let player = inputs[1];
    score += calculateScore(opponent, player);
  }
  console.log("Final score to part 1: " + score);
}

function part2(file: string) {
  let score = 0;
  let lines = file.split("\n");

  for (let i = 0; i < lines.length; i++) {
    let inputs = lines[i].split(" ");
    let opponent = inputs[0];
    let player = inputs[1];
    score += calculateScore(opponent, winCondition(opponent, player));
  }
  console.log("Final score to part 2: " + score);
}

function calculateBaseScore(opponent: string, player: string): number {
  let inputScore = 0;
  if (player === "X") {
    inputScore = 1;
  } else if (player === "Y") {
    inputScore = 2;
  } else {
    inputScore = 3;
  }
  return inputScore;
}

function calculateWinner(opponent: string, player: string): number {
  let score = 0;
  if (
    (opponent === "A" && player === "X") ||
    (opponent === "B" && player === "Y") ||
    (opponent === "C" && player === "Z")
  ) {
    score = 3;
  } else if (
    (opponent === "A" && player === "Y") ||
    (opponent === "B" && player === "Z") ||
    (opponent === "C" && player === "X")
  ) {
    score = 6;
  } else if (
    (opponent === "A" && player === "Z") ||
    (opponent === "B" && player === "X") ||
    (opponent === "C" && player === "Y")
  ) {
    score = 0;
  }
  return score;
}

function calculateScore(opponent: string, player: string): number {
  let score = 0;
  let baseScore = calculateBaseScore(opponent, player);
  let winnerScore = calculateWinner(opponent, player);
  score = baseScore + winnerScore;
  return score;
}

function winCondition(opponent: string, player: string): string {
  if (player === "X") {
    if (opponent === "A") {
      player = "Z";
    } else if (opponent === "B") {
      player = "X";
    } else if (opponent === "C") {
      player = "Y";
    }
  } else if (player === "Y") {
    if (opponent === "A") {
      player = "X";
    } else if (opponent === "B") {
      player = "Y";
    } else if (opponent === "C") {
      player = "Z";
    }
  } else if (player === "Z") {
    if (opponent === "A") {
      player = "Y";
    } else if (opponent === "B") {
      player = "Z";
    } else if (opponent === "C") {
      player = "X";
    }
  }
  return player;
}

part1(file);
part2(file);
