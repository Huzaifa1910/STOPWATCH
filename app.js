var hour = 0
var sec = 0
var min = 0
var milisec = 0
var displaySec = document.getElementById ('sec')
var displayMin = document.getElementById ('min')
var displayMilisec =  document.getElementById ('milisec')
var displayhour =  document.getElementById ('hour')

function timer() {
    milisec ++
    displayMilisec.innerHTML = milisec
    if (milisec == 100) {
        sec ++
        displaySec.innerHTML = sec
        milisec = 00
    }else if (sec == 60) {
        min ++
        displayMin.innerHTML = min
        sec = 00
    }
}

function start() {
    timerplay = setInterval(timer,10);
}
function stop() {
    clearInterval (timerplay)
}
function reset() {
    milisec = 00
    sec = 00
    min = 00
    displayMilisec.innerHTML = milisec
    displaySec.innerHTML = sec
    displayMin.innerHTML = min
}