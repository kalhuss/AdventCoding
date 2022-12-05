import { readFileSync } from 'fs';

const file = readFileSync('input.txt', 'utf8');

function gettingStack(file: string) {
    let lines = file.split('\n');
    let stack = [];
    for(let i = 0; i < lines.length; i++){
        stack.push(lines[i]);
        if(lines[i].trim() === ''){
            //Stop pushing the lines into the stack
            break;
        }
    }
    return stack;
}

function gettingMoves(file: string){
    let lines = file.split('\n');
    let moves = [];
    for(let i = 0; i < lines.length; i++){
        if(lines[i].trim() === ''){
            //Start pushing the lines into the moves
            moves.push(lines[i]);
        }
    }
    return moves;
}


function createStack(stack: string[]){
    let newStack = [];
    for(let i = 0; i < stack.length; i++){
        for(let j = 0; j < stack[i].length; j++){
            if(j % 4 === 1){
                newStack.push(stack[i][j]);
            }
            
        }  
    }
    return newStack;
}

function createRows(newStack: string[]){
    const rows: string[][] = [];
    let row = [];
    for(let i = 0; i < newStack.length; i++){
        if(i % 9 === 0 && i !== 0){
            rows.push(row);
            row = [];
        }
        row.push(newStack[i]);
    }
    rows.push(row);
    return rows;
}

//Create a function that will create the columns: it will take the same index of each row and push it into a new array
function createColumns(rows: string[][]){
    let columns: string[][] = [];
    let column:  string[] = [];
    for(let i = 0; i < rows[0].length; i++){
        for(let j = 0; j < rows.length; j++){
            column.push(rows[j][i]);
        }
        column = column.filter(element => !/^\d+$/.test(element) && element.trim() !== '');
        columns.push(column);
        column = [];
    }

    return columns;
}

// console.log(createColumns(createRows(createStack(gettingStack(file)))));
console.log(gettingMoves(file));