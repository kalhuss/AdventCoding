import { readFileSync } from "fs";

const file = readFileSync("input.txt", "utf8");

function part1(file: string) {
    let lines = file.split("\n");
    let score = 0;
    for (let i = 0; i < lines.length; i++) {
        let section1 = lines[i].split(",")[0];
        let section2 = lines[i].split(",")[1];
        let first = section1.split("-")[0];
        let second = section1.split("-")[1];
        let third = section2.split("-")[0];
        let fourth = section2.split("-")[1];
        score += getRanges(
            parseInt(first),
            parseInt(second),
            parseInt(third),
            parseInt(fourth)
        );
    }

    console.log(score);
}

function part2(file: string) {
    let lines = file.split("\n");
    let score = 0;
    for (let i = 0; i < lines.length; i++) {
        let section1 = lines[i].split(",")[0];
        let section2 = lines[i].split(",")[1];
        let first = section1.split("-")[0];
        let second = section1.split("-")[1];
        let third = section2.split("-")[0];
        let fourth = section2.split("-")[1];
        score += getPairs(
            parseInt(first),
            parseInt(second),
            parseInt(third),
            parseInt(fourth)
        );
    }

    console.log(score);
}

function getRanges(
    first: number,
    second: number,
    third: number,
    fourth: number
): number {
    let section1Range = new Array<number>();
    let section2Range = new Array<number>();
    let score = 0;
    for (let i = first; i <= second; i++) {
        section1Range.push(i);
    }
    for (let i = third; i <= fourth; i++) {
        section2Range.push(i);
    }
    const containsAllSection1 = section1Range.every((element) => {
        return section2Range.indexOf(element) !== -1;
    });

    const containsAllSection2 = section2Range.every((element) => {
        return section1Range.indexOf(element) !== -1;
    });
    if (containsAllSection1 || containsAllSection2) {
        score++;
    }
    return score;
}

function getPairs(
    first: number,
    second: number,
    third: number,
    fourth: number
): number {
    let section1Range = new Array<number>();
    let section2Range = new Array<number>();
    let score = 0;
    for (let i = first; i <= second; i++) {
        section1Range.push(i);
    }
    for (let i = third; i <= fourth; i++) {
        section2Range.push(i);
    }
    const containsAnySection1 = section1Range.some((element) => {
        return section2Range.indexOf(element) >= 0;
    });

    const containsAnySection2 = section2Range.some((element) => {
        return section1Range.indexOf(element) >= 0;
    });

    if (containsAnySection1 || containsAnySection2) {
        score++;
    }
    return score;
}

part1(file);
part2(file);
