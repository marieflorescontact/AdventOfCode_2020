const fs = require('fs');
const readline = require('readline');

async function processLineByLine() {
    const fileStream = fs.createReadStream('inputDay2.txt');

    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });
    // Note: we use the crlfDelay option to recognize all instances of CR LF
    // ('\r\n') in input.txt as a single line break.

    for await (const line of rl) {
        // Each line in input.txt will be successively available here as `line`.
        console.log(`Line from file: ${line}`);
    }
}

processLineByLine();

//fonction qui enleve les : a la fin d'une string
function popDot (string){
    let array= string.split('')
    array.pop()
    array= array.join('')
    return(array)
}

//fonction qui transforme une string en pattern
function stringToRegex(pattern){
    const array = pattern.split(' ')
    let minMax = array[0].split('-')
    minMax.push(array[1])
    let regex=''
    for (let i = 0; i< 3; i++){
        regex = `${minMax[2]}{${minMax[0]},${minMax[1]}}`
        i++

    }
    return(regex)

}
//console.log(stringToRegex('1-3 a'))

//fonction qui checkPattern
function checkPattern(str, strpattern){
    console.log(strpattern)
    let pattern = new RegExp(strpattern)
    console.log(pattern)
    return pattern.test(str)
}
console.log(checkPattern('cdefg', 'b{1,3}'))

function isPswValid(str){
    //array avec les psw:
    const pattern_psw = str.split(' ')
    let psw=[]
    let pattern =[]
    let count =0

    for(let i =2; i<pattern_psw.length; i++){
        psw.push(pattern_psw[i])
        i=i+2
    }
    //array avec les patterns:
    for(let j =0; j< pattern_psw.length-2; j++){
        pattern.push(pattern_psw[j]+' '+popDot(pattern_psw[j+1]))
        j=j+2
    }
    console.log(psw)
    console.log(pattern)
    //on transforme les pattern en pattern avec stringToRegex
    for(let i=0; i < pattern.length; i++){
        pattern[i] = stringToRegex(pattern[i])
    }
    console.log(pattern)
    //on va verifier que les psw matchent les patterns
    for (let j = 0; j < pattern.length; j++){
        //console.log(psw[j])
        //console.log(pattern[j])
        if(checkPattern(psw[j], pattern[j])){
            console.log('pattern match')
            count += 1
        }
    }
    //si ca matche on ajoute 1 a count

    console.log(count)

}