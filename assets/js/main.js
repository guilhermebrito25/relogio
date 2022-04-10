const relogio = document.querySelector('#relogio')

const iniciar = document.querySelector('#iniciar');
const pausar = document.querySelector('#pausar');
const zerar = document.querySelector('#zerar')

let seg = 0
function criarTime(seg) {
    const data = new Date(seg * 1000)
    return data.toLocaleTimeString('pt-BR', {hour12: false, timeZone: 'UTC'})
}


let timer
function getClickIniciar() {
    iniciar.addEventListener('click', event => {
        clearInterval(timer)
        timer = setInterval( () => {
            relogio.innerHTML = criarTime(seg)
            seg ++
            relogio.style.color = 'black'
        }, 1000) 
    })
}


function getClickpausar(){
    pausar.addEventListener('click', event => {
        clearInterval(timer)
        relogio.style.color = 'red'
    })
}


function getClickZerar() {
    zerar.addEventListener('click', event => {
        clearInterval(timer)
        relogio.innerHTML = '00:00:00'
        seg = 0
        getClickpausar()
        relogio.style.color = 'black'
    })
}


getClickIniciar()
getClickpausar()
getClickZerar()

