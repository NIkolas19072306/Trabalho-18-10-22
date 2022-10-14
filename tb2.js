
var select1 = document.querySelector("#por")
var select2 = document.querySelector("#tirar")
var selecr3 = document.querySelector("#tempo")
var saida = document.querySelector("h3")
var botao1 = document.querySelector("#por2")
var botao2 = document.querySelector("#tirar2")
var botao3 = document.querySelector("#lista")
var dia = []

//Botao para adicionar algo no vetor
botao1.addEventListener("click", (e) => {
    var t1 = select1.value
    var t2 = selecr3.value
    dia.push(t2)
    dia.push(t1)
    console.log(dia)
    if (dia.length >= 48) {
        saida.innerText = `Seu dia esta cheio${dia}`
    }
    else {
        saida.innerText = `${dia}`
    }
    e.preventDefault()
})
//Botao para retirar algo no vetor
botao2.addEventListener("click", (e) => {
    retirar = select2.value
    dia = dia.filter(item => item != retirar)
    if (dia.length >= 48) {
        saida.innerText = `Seu dia esta cheio${dia}`
    }
    else { saida.innerText = `${dia}` }
    console.log(dia)
    e.preventDefault()  
})
//Botao para mostrar array no h3
botao3.addEventListener("click", (e) => {
    if (dia.length === 0) {
        saida.innerText = "Voce concluiu seu dia "
    }
})
saida.innerText = "Seu dia esta vazio"

