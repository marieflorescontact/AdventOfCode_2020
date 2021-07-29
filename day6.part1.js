const fs = require('fs')


fs.readFile('inputDay6.txt', 'utf8' , (err, data) => {
    if (err) {

        return
    }
    data = data.split("\n\n")
    for (let i =0; i < data.length; i++){
        data[i]= data[i].split('\n').join('')
        data[i]= data[i].split('').filter((item, index) =>data[i].indexOf(item) === index).join('')
        data[i] = data[i].length
    }
    console.log(data)
    let sum =0
    for (let i =0; i < data.length ; i++){
       sum = data[i] + sum
    }
    console.log(sum)
    })


