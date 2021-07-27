//FBFBBFFRLR:
// Start by considering the whole range, rows 0 through 127.
// F means to take the lower half, keeping rows 0 through 63.
// B means to take the upper half, keeping rows 32 through 63.
// F means to take the lower half, keeping rows 32 through 47.
// B means to take the upper half, keeping rows 40 through 47.
// B keeps rows 44 through 47.
// F keeps rows 44 through 45.
// The final F keeps the lower of the two, row 44.

// the last 3 characters of FBFBBFFRLR:
//
//     Start by considering the whole range, columns 0 through 7.
// R means to take the upper half, keeping columns 4 through 7.
// L means to take the lower half, keeping columns 4 through 5.
// The final R keeps the upper of the two, column 5.

// FBFBBFFRLR reveals that it is the seat at row 44, column 5

// Every seat also has a unique seat ID: multiply the row by 8,
// then add the column.
// In this example, the seat has ID 44 * 8 + 5 = 357.

// BFFFBBFRRR: row 70, column 7, seat ID 567.
// FFFBBBFRRR: row 14, column 7, seat ID 119.
// BBFFBBFRLL: row 102, column 4, seat ID 820.


const fs = require('fs')
const lines = fs.readFileSync('inputDay5.txt', { encoding: 'utf-8'}).split('\n').filter(x => x)

function strinToInt(str){
    return parseInt([...str].map( x => x ==='B' || x ==='R' ? 1 : 0).join(''), 2)
}

class Seat {
    constructor (string) {
        this.row = strinToInt(string.slice(0, 7))
        this.column = strinToInt(string.slice(7))
        this.ID = (this.row * 8) + this.column
    }
}

const seats = []

for (const line of lines){
    const seatNumber = new Seat (line)
    seats.push(seatNumber)
    //console.log(seatNumber)
}
const maxSeat = (Math.max(...seats.map( seatNumber => seatNumber.ID)))
const ids = seats.map( seatNumber => seatNumber.ID)
//PART 1/ console.log(maxSeat)
ids.sort((a, b) => a - b)
console.log(ids)

for (let i = 0; i < ids.length-1 ; i++){
    if(ids[i + 1] - ids [i] > 1){
        console.log((ids[i] + 1))
        break
    }
}