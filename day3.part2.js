
const fs = require('fs');
const readline = require('readline');

function countTree(arrayOfArray, moveToRight, goDown){
    let numberOfTree = 0
    let w = arrayOfArray[0].length
    let j = 0
    for (let i = 0; i < arrayOfArray.length-1; i += goDown){
        j = (j + moveToRight) % w
        if(arrayOfArray[i+1][j]=='#'){
            numberOfTree +=1
        }
    }
    return numberOfTree

}

async function processLineByLine() {
    const fileStream = fs.createReadStream('inputDay3.txt');

    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });
    let arrayOfLines =[]

    for await (let line of rl) {
        arrayOfLines.push(line)
    }
    let result = countTree(arrayOfLines, 1, 1)*countTree(arrayOfLines, 3, 1)*countTree(arrayOfLines, 5, 1)*countTree(arrayOfLines, 7, 1)*countTree(arrayOfLines, 1, 2)
    console.log(result)

}

processLineByLine();