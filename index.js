const superbowlWin = (array) => {
    const yearWon = array.find(obj => {return obj.result === "W"})
    if (yearWon != undefined) {
        return yearWon.year
    } else {return undefined}
}

// function superbowlWin (array) {
//     const win = array.find(obj => {return obj.result === 'W'})
//     if (win != undefined) {
//         return win.year
//         } else {
//             return undefined
//     }
// }