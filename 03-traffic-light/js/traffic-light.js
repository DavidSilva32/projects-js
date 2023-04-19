// Global Variables
const img = document.querySelector("img#img");
const buttons = document.querySelector("section#buttons");
let colorsIndex = 0;
let intervalId = null

// Functions
const trafficLight = (event) => {
    stopAutomatic();
    turnON[event.target.id]();
}

const nextIndex = () => colorsIndex = colorsIndex < 2 ? ++colorsIndex : 0;

const stopAutomatic = () => {
    clearInterval(intervalId)
}

const turnON = {
    red: () => img.src = 'img/red.png',
    yellow: () => img.src = 'img/yellow.png',
    green: () => img.src = 'img/green.png',
    automatic: () => intervalId = setInterval(() => {
        const colors = ['red', 'yellow', 'green']
        const color = colors[colorsIndex]
        turnON[color]();
        nextIndex();
    }, 1000)
}

// Events
buttons.addEventListener("click", trafficLight);
