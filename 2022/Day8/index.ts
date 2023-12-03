import { readFileSync } from "fs";

const file = readFileSync("input.txt", "utf8");

function splitNumbers(file : string){
    const lines = file.split("\n");
    let numbers = lines.map(line => line.split("").map(number => parseInt(number)));
    
    let count = 0;

    for(let i = 0; i < numbers.length; i++){
        for(let j = 0; j < numbers[i].length; j++){
            if(isNaN(numbers[i][j])){
                numbers[i].splice(j, 1);
            }
        }
    }

    for(let i = 0; i < numbers.length; i++){
        for(let j = 0; j < numbers[i].length; j++){
            //Check if the number is an outer number
            if(i == 0 || i == numbers.length - 1 || j == 0 || j == numbers[i].length - 1){
                count++;
            } 
        }
    }

    return count;

}

console.log(splitNumbers(file));