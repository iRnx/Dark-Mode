let bola = document.getElementById("toggleBall")
let contador = 1

function trocarModo() {
    
    contador++

    if(contador % 2 == 0) {
        bola.style.transform = 'translateX(-35px)'
        document.body.style.backgroundColor = 'black'
        document.body.style.color = 'white'
    } else {
        bola.style.transform = 'translateX(0px)'
        document.body.style.backgroundColor = 'white'
        document.body.style.color = 'black'
    }
}