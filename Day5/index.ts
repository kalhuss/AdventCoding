import { readFileSync } from "fs";

const file = readFileSync("input.txt", "utf8");

function part1(file: string) {
    let stack = createColumns(createRows(createStack(gettingStack(file))));
    let moves = setMoves(gettingMoves(file));
    for (let i = 0; i < moves.length; i++) {
        let moveValue = Number(moves[i][1]);
        let moveFrom = Number(moves[i][3]);
        let moveTo = Number(moves[i][5]);
        let temp = "";
        for (let i = 0; i < moveValue; i++) {
            if (temp !== undefined) {
                temp += stack[moveFrom - 1].shift();
                stack[moveTo - 1].unshift(temp);
            }
            temp = "";
        }
    }
    console.log(stack.map((element) => element[0]).join(""));
}

function part2(file: string) {
    let stack = createColumns(createRows(createStack(gettingStack(file))));
    let moves = setMoves(gettingMoves(file));
    for (let i = 0; i < moves.length; i++) {
        let moveValue = Number(moves[i][1]);
        let moveFrom = Number(moves[i][3]);
        let moveTo = Number(moves[i][5]);
        let temp = stack[moveFrom - 1].splice(0, moveValue);
        stack[moveTo - 1].unshift(...temp);
    }
    console.log(stack.map((element) => element[0]).join(""));
}

function gettingStack(file: string) {
    let lines = file.split("\n");
    let stack = [];
    for (let i = 0; i < lines.length; i++) {
        stack.push(lines[i]);
        if (lines[i].trim() === "") {
            break;
        }
    }
    return stack;
}

function createStack(stack: string[]) {
    let newStack = [];
    for (let i = 0; i < stack.length; i++) {
        for (let j = 0; j < stack[i].length; j++) {
            if (j % 4 === 1) {
                newStack.push(stack[i][j]);
            }
        }
    }
    return newStack;
}

function createRows(newStack: string[]) {
    const rows: string[][] = [];
    let row = [];
    for (let i = 0; i < newStack.length; i++) {
        if (i % 9 === 0 && i !== 0) {
            rows.push(row);
            row = [];
        }
        row.push(newStack[i]);
    }
    rows.push(row);
    return rows;
}

function createColumns(rows: string[][]) {
    let columns: string[][] = [];
    let column: string[] = [];
    for (let i = 0; i < rows[0].length; i++) {
        for (let j = 0; j < rows.length; j++) {
            column.push(rows[j][i]);
        }
        column = column.filter(
            (element) => !/^\d+$/.test(element) && element.trim() !== ""
        );
        columns.push(column);
        column = [];
    }

    return columns;
}

function gettingMoves(file: string) {
    let lines = file.split("\n");
    let moves = [];
    let start = false;

    for (let i = 0; i < lines.length; i++) {
        if (lines[i].trim() === "") {
            // Start pushing the lines into the moves array
            start = true;
        }
        if (start && lines[i].trim() !== "") {
            moves.push(lines[i].replace("\r", ""));
        }
    }

    return moves;
}

function setMoves(moves: string[]) {
    let newMoves = [];
    for (let i = 0; i < moves.length; i++) {
        newMoves.push(moves[i].split(" "));
    }
    return newMoves;
}

part1(file);
part2(file);
