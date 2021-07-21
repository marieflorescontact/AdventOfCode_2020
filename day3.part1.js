const fs = require('fs');
const readline = require('readline');

function newIndex(arrayOfArray){
    let numberOfTree = 0
    let w = arrayOfArray[0].length
    let j = 0
    for (let i = 0; i < arrayOfArray.length-1; i++){
        j = (j+3) % w
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

    console.log(newIndex(arrayOfLines))

}

processLineByLine();