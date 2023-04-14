// Global Variables
const button = document.querySelector('.btn')
const res = document.querySelector('#resultado')

button.addEventListener('click', () => {
    let nome = document.querySelector('#nome').value
    let altura = document.querySelector('#altura').value
    let peso = document.querySelector('#peso').value
    imc = (peso / (altura*2)).toFixed(1)

    if (nome.value !== '' && altura !== '' && peso !== '') {
        let estado = ''
        if (imc < 18.5) {
            estado = 'abaixo do peso'
        } else if (imc >= 18.5 && imc < 25) {
            estado = 'no peso ideal'
        } else if (imc >= 25 && imc < 30) {
            estado = 'com excesso de peso'
        } else if (imc >= 30 && imc < 35) {
            estado = 'com obesidade'
        } else {
            estado = 'com obesidade extrema'
        }

        res.innerHTML = `<p><strong>${nome.toUpperCase()}</strong> seu IMC é <strong>${imc}</strong>, e você está <strong>${estado}</strong>!</p>`
    } else {
        res.textContent = 'Preencha os campos!'
    }
})