const fs = require('fs');

keys = [
    "byr",
    "iyr",
    "eyr",
    "hgt",
    "hcl",
    "ecl",
    "pid",
    //"cid",
]

function hasAllKeys(keys, obj){ //return true or false
    const hasAllKeys = keys.every(item => obj.hasOwnProperty(item))
    return hasAllKeys
}
//console.log(hasAllKeys(keys, obj))

// ecl => exactly one of: amb blu brn gry grn hzl oth
// pid => a nine-digit number, including leading zeroes \^\d{9}$\
// hcl => a # followed by exactly six characters 0-9 or a-f
// iyr => four digits; at least 2010 and at most 2020
// eyr => four digits; at least 2020 and at most 2030
// byr => four digits; at least 1920 and at most 2002
// hgt => a number followed by either cm or in:
//          If cm, the number must be at least 150 and at most 193.
//          If in, the number must be at least 59 and at most 76

function checkHgt(str){
    const lastC = str.charAt(str.length-1)
    const number = parseInt(str.slice(0, -2))
    const numberString = number.toString()
    const regex = /^[0-9]+$/
    if(lastC == 'm' && number >=150 && number <=193 && numberString.match(regex)){
        return true
    }
    if(lastC == 'n' && number >=49 && number <=76 && numberString.match(regex)){
        return true
    }
    else{
        return false
    }
}
//console.log(checkHgt('198cm'))

function checkEcl(str){
    return ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'].includes(str)

}
//console.log(checkEcl('grn'))

function checkRegex(str, regex){
    if (str.match(regex)){
        return true
    }
}

function checkIyr(str,min, max){
    const regex = /^[0-9]{4}$/
    if(str.match(regex) && parseInt(str)>=min && parseInt(str)<=max){
        return true
    }
}
//console.log(checkIyr(2011))

function countValid(keyValuesPasseport){
    let count =0
    for(let i = 0; i < keyValuesPasseport.length; i++) {
        if (keyValuesPasseport[i][0] == 'ecl' && (checkEcl(keyValuesPasseport[i][1]))) {
            count += 1
        }
        if (keyValuesPasseport[i][0] == 'iyr' && (checkIyr(keyValuesPasseport[i][1], 2010, 2020))) {
            count += 1
        }
        if (keyValuesPasseport[i][0] == 'hgt' && (checkHgt(keyValuesPasseport[i][1]))) {
            count += 1
        }
        if (keyValuesPasseport[i][0] == 'eyr' && (checkIyr(keyValuesPasseport[i][1], 2020, 2030))) {
            count += 1
        }
        if (keyValuesPasseport[i][0] == 'pid' && (checkRegex(keyValuesPasseport[i][1], /^\d{9}$/))) {
            count += 1
        }
        if (keyValuesPasseport[i][0] == 'byr' && (checkIyr(keyValuesPasseport[i][1], 1920, 2002))) {
            count += 1
        }
        if (keyValuesPasseport[i][0] == 'hcl' && (checkRegex(keyValuesPasseport[i][1], /^#[a-z0-9]{6}$/))) {
            count += 1
        }

    }
    if (count === 7) {
        return true
    }}


fs.readFile('inputDay4.txt', 'utf8' , (err, data) => {
    if (err) {
        return
    }
    let count =0
    data = data.split("\n\n")
    for (let i = 0; i < data.length; i++){
        //console.log("data[i]: ", data[i])
        let passeport = data[i].split(/[ \n]/).reduce(function(obj, str, index) {
            let strParts = str.split(":");
            if (strParts[0] && strParts[1]) { //<-- Make sure the key &     value are not undefined
                obj[strParts[0]] = strParts[1].trim(); //<-- Get rid of extra spaces at beginning of value strings
            }
            return obj;
        }, {});
        //console.log(passeport);
        const keyValuesPasseport = Object.entries(passeport)
        //console.log(keyValuesPasseport)
        if (countValid(keyValuesPasseport)){
                    count +=1
            }

    }
    console.log(count)
})




