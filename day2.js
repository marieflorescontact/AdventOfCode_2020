const fs = require('fs');
const readline = require('readline');

function checkPattern(min, max, char, string){
    if(string[min-1] === char ^ string[max-1] === char){
        return true
    }
}

function isPswValid(str){
    let pattern_psw = str.split(/:|-| /)
    pattern_psw = pattern_psw.filter(entry => entry.trim() != '');
    if(checkPattern(parseInt(pattern_psw[0]), parseInt(pattern_psw[1]), pattern_psw[2], pattern_psw[3])){
        return true
    }
}

async function processLineByLine() {
    const fileStream = fs.createReadStream('inputDay2.txt');

    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });
    let count =0
    for await (const line of rl) {
        if (isPswValid(line)){
            count += 1
        }
    }
    console.log(count)
}

processLineByLine();


