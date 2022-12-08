import { readFileSync } from "fs";

const file = readFileSync("input.txt", "utf8");

// Read the file line by line and return each line as an array
function readLines(file: string) {
    const lines = file.split("\n");
    const linesSplit = lines.map((line) => line.split(" "));
    return linesSplit;
}

function checkLine(line : string[][]){
    let directory : string[] = ["/"];
    let fileSize : number[] = [];
    let stored : number[] = [];
    //Loop through each line
    for(let i = 0; i < line.length; i++){
        if(directory.length > 1){
            //If it's a command
            if(line[i][0] == "$"){
                //If the command is cd
                if(line[i][1] == "cd"){
                    //If the command is cd ..
                    if(line[i][2] == ".."){
                        //Remove the last element of the directory array
                        directory.pop();
                    //If the command is cd /
                    } else if(line[i][1] == "/"){
                        //Reset the directory array
                        directory = ["/"];
                    //If the command is cd <directory>
                    } else{
                        //Add the directory to the directory array
                        directory.push(line[i][2]);
                    }
                }
            } else{
                //add the file size to the fileSize array until the directory has been popped back to the root, when its back at the root it needs to move all the filesizes to the stored array
                if(line[i][0].match(/\d+/)){
                    fileSize.push(parseInt(line[i][0]));
                }
            }
        } else {
            //If the directory is at the root push the file size to the stored array and empty the fileSize array
            for(let j = 0; j < fileSize.length; j++){
                stored.push(fileSize[j]);
            }
            fileSize = [];
        }

    }
    console.log(directory);
    console.log(fileSize);
    console.log(stored);
}

checkLine(readLines(file));
