const fs = require('fs')

const groups = fs.readFileSync('inputDay6.txt', {encoding : 'utf-8'}).split('\n\n').filter(x=>x)

    console.log(groups)
    let sum =0

    for (const group of groups){
        const uniques = new Set([...group.replace(/\n/g, '')])
        sum += [...uniques].filter(char => group.split('\n').filter(x=>x).every(form =>form.includes(char))).length
    }

    console.log(sum)



