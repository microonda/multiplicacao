const n1 = Math.round(Math.random()*10)
const n2 = Math.round(Math.random()*10)
const resultado = n1 * n2

const elPergunta = document.getElementById("questao")
const elForm = document.getElementById("form")
const elInput = document.getElementById("input")
const elPontos = document.getElementById("pontos")

let pontos = JSON.parse(localStorage.getItem("pontos"))

elPontos.innerText = `pontos: ${pontos}`
elPergunta.innerText = `Quanto é ${n1} multiplicado por ${n2}`


elForm.addEventListener("submit", ()=>{
    var resposta = elInput.value
    let elBody = document.getElementById("body");

    if(pontos <= 5){ // entre 1 e 5
        elBody.style.backgroundColor = '#000';
    }

    else if(pontos <= 9){ // entre 5 e 9
        // programa normal
        if(Number(resposta) === resultado){ // acertou
            pontos++;
            window.alert(`Você acertou! Ganhou mais 1 Ponto!`)
        }
        else{ // errou a conta
            pontos--;
            window.alert(`${n1} x ${n2} não é ${resposta}!!! e sim: ${resultado}`)
        }
        updateLocalStorage()
    }

    else{ // reset de pontos
        pontos = 0
        updateLocalStorage()
        window.open('dancinha.html')
    }
})


function updateLocalStorage(){
    localStorage.setItem("pontos", JSON.stringify(pontos))
}
