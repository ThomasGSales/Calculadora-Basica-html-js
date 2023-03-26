// funcao para printar no display os valores dos botoes
function funcao(valor){
    document.getElementById('displayid').innerText += valor
}


// funcao para apagar todo o conteudo do display
document.getElementById("clearid").onclick = function(){
    document.getElementById("displayid").innerHTML = ""
}


// funcao para execultar as operações
document.getElementById("igualid").onclick = function(){
    let resultado = document.getElementById("displayid").innerHTML
    
    if(resultado){
        document.getElementById("displayid").innerHTML = eval(resultado)
    }
    else {
        document.getElementById("displayid").innerHTML = "erro"
    }
}