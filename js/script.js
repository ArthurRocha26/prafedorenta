const texto = document.getElementById("h1")
const nao = document.getElementById("nao")
const fundo = document.getElementById("fundo")

nao.addEventListener("mousemove", function(){
    let x = Math.floor(Math.random() * 100 )
    let y = Math.floor(Math.random() * 100 )

    nao.style.top = y + "%"
    nao.style.left = x + "%"

    if(contador == 10){
        texto.innerHTML = "ta maluca???????"
    }
    if(contador == 20){
        texto.innerHTML = "beleza então, fica esperta🤟"
        fundo.style.backgroundImage = "url(https://i.pinimg.com/564x/e7/55/02/e75502fc7f2e4cff93c73d0add4d3aad.jpg)"
    }
})

function casar(){
    nao.innerHTML = "CLARO😘"

    setTimeout(function(){
        while(!confirm("Confirma que me ama?")){}
        alert("Declaro que tu ama eu do jeito que sou🥰")
    })
}