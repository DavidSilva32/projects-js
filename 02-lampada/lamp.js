// Global Variables
const turnOnOff =  document.getElementById('turnOnOff')
const img = document.getElementsByTagName('img')[0]

// Events

turnOnOff.addEventListener('click', lampOnOff)
img.addEventListener('mouseover', lampOn)
img.addEventListener('mouseleave', lampOff)
img.addEventListener('dblclick', lampBroken)

// functions

function isLampBroken() {
    return img.src.indexOf('quebrada') > -1
}

function lampOn() {
    if ( !isLampBroken
        () ) {
        img.src = './img/ligada.jpg'
        turnOnOff.textContent = 'Turn off'
    }
}

function lampOff() {
    if ( !isLampBroken() ) {
        img.src = './img/desligada.jpg'
        turnOnOff.textContent = 'Turn on'
    }
}

function lampBroken() {
    img.src = './img/quebrada.jpg'
    turnOnOff.className = 'btn btn-danger'
    turnOnOff.textContent = 'Reset'
}

function lampOnOff() {
    if (turnOnOff.textContent === 'Turn on') {
        lampOn();
    } else if (turnOnOff.textContent === 'Turn off') {
        lampOff();
    } else {
        img.src = './img/desligada.jpg'
        turnOnOff.className = 'btn btn-warning'
        turnOnOff.textContent = 'Turn on'
    }
}