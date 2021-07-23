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
//let obj= {ecl:'gry', pid:'860033327', eyr:2020,hcl:'#fffffd',
//byr:1937, iyr:2017, cid:147, hgt:'183cm'}

function hasAllKeys(keys, obj){ //return true or false
    const hasAllKeys = keys.every(item => obj.hasOwnProperty(item))
    return hasAllKeys
}
//console.log(hasAllKeys(keys, obj))

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
        if (hasAllKeys(keys, passeport)){
            count +=1
        }

    }
    console.log(count)
})



