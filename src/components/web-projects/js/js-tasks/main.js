let player1 = ["osama", "ahmed", "omar", "abasy", "abdelslam", "kata", "7amdy", "el3rby", "fawaz", "ziad", "a5o 3bslam"]
let player2 = ["osama1", "ahmed1", "omar1", "abasy1", "abdelslam1", "kata1", "7amdy1", "el3rby1", "fawaz1", "ziad1", "a5o 3bslam1"]
let obj = {

}
let gk1 = player1[0]
let gk2 = player2[0]
let filedPlayer1 = player1.slice(1)
let filedPlayer2 = player2.slice(1)

console.log(`player team 1 : ${player1}`)
console.log(`player team 2 : ${player2}`)
console.log(`filedPlayers1 are ${filedPlayer1}`)
console.log(`filedPlayers2 are ${filedPlayer2}`)

let allplayer = [player1 + player2]

for (let element of allplayer) {
    console.log(`all players are ${element}`)
}
let playerFinals = ["thiago", "coutinho", "perisic", ...player1]
console.log(`players final are ${playerFinals.join(" - ")}`)
let odd = {
    "team1": 3.5,
    "team2": 6.5,
    "draw": 8,
}

let max = 0
let idx = -1

function scoreGoals(goalers) {
    for (let i = 0; i < goalers.length; i++) {
        if (player1.includes(goalers[i])) {
            odd.team1 += 1
        } else {
            odd.team2 += 1
        }

        if (Object.keys(obj).includes(goalers[i])) {
            obj[goalers[i]] += 1
        } else {
            obj[goalers[i]] = 1
        }
    }
}
for (let i = 0; i < Object.keys(odd).length; i++) {
    console.log(Object.values(odd)[i])
    if (max < Object.values(odd)[i]) {
        max = Object.values(odd)[i]
        idx = i
    }
}
if (idx == 2) {
    console.log(`are going to draw`)
} else {
    console.log(`${Object.keys(odd)[idx]} is going to win`)
}
scoreGoals(["osama", "osama1"])
console.log(odd.team1)

function namesOfGoaler() {
    for (let i = 0; i <= arguments.length - 1; i++) {
        if (Object.keys(obj).includes(arguments[i])) {
            console.log(`player ${arguments[i]} scored ${obj[arguments[i]]} goals`)

        } else {
            console.log(`player ${arguments[i]} scored 0 goals`)
        }
    }

}
namesOfGoaler("osama", "osama1", "ahmed")