function askName() {
    var name = prompt("What is your name?")
    return name
}

function askTemp() {
    var temp = prompt("What number temperature do you want to convert from?")
    return temp
}

function celToFar(cel) {
    var far = cel * 9 / 5 + 32
    alert(`${cel}Cº is ${far}Fº`)
}

function farToCel(far) {
    var cel = (far - 32) * 5 / 9
    alert(`${far}Fº is ${cel}Cº`)
}

function askUnit() {
    var unit = prompt("Do you want to convert from Farenheit (enter 'f') or from Celsius (enter 'c')?")
    return unit
}

var n = askName()

alert(`Hello ${n}.`)

if (askUnit() == "f") {
    farToCel(askTemp())
} else {
    celToFar(askTemp())
}