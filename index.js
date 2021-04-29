const superbowlWin = (array) => {
    const yearWon = array.find(obj => {return obj.result === "W"})
    if (yearWon != undefined) {
        return yearWon.year
    } else {return undefined}
}