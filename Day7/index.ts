import { readFileSync } from "fs";

const file = readFileSync("input.txt", "utf8");

function part1(file: string) {
    const sizeDict = dirSize(file);
    let sum = 0;
    for (let value of Object.values(sizeDict)) {
        if (value < 100000) {
            sum += value;
        }
    }
    console.log(sum);
}

function part2(file: string) {
    const totalSize = dirSize(file)[""];
    const max = 70000000 - 30000000;
    const spaceNeeded = totalSize - max;
    let minVal = Number.MAX_SAFE_INTEGER;

    for (let value of Object.values(dirSize(file))) {
        if (value >= spaceNeeded) {
            minVal = Math.min(minVal, value);
        }
    }
    console.log(minVal);
}

function dirSize(file: string) {
    let lines = file.split("\n");
    let path: string[] = [];
    let sizeDict: { [key: string]: number } = {};

    for (let line of lines) {
        line = line.replace(/(\r\n|\n|\r)/gm, "");
        if (line.startsWith("$ cd")) {
            if (line.startsWith("$ cd /")) {
                path = [];
            } else if (line.endsWith("..")) {
                path.pop();
            } else {
                path.push(line.substring(5));
            }
        } else if (line.startsWith("$ ls")) {
            continue;
        } else if (line.startsWith("dir")) {
            continue;
        } else {
            let size = parseInt(line.substring(0, line.indexOf(" ")));
            for (let i = 0; i <= path.length; i++) {
                let key = path.slice(0, i).join("/");
                sizeDict[key] = (sizeDict[key] || 0) + size;
            }
        }
    }
    return sizeDict;
}

part1(file);
part2(file);
