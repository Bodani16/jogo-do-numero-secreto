let listaNumeroSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
    let titulo = document.querySelector(tag);
    titulo.innerHTML = texto;
    responsiveVoice.speak(texto, "Brazilian Portuguese Female",
         {rate: 1.2});
}
function exibirMensagemInicial() {
    exibirTextoNaTela("h1", "Jogo do número secreto");
exibirTextoNaTela("p","Escolha um número entre 1 a 10.");

}

exibirMensagemInicial();

function verificarChute(){
    let chute = document.querySelector("input").value;
    if (numeroSecreto == chute) {
        palavraTentativa = tentativas == 1? "tentativa" : "tentativas";
        qntTentativa = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela("h1", "Acertou!");
        exibirTextoNaTela("p",qntTentativa);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        if (chute > numeroSecreto){
            exibirTextoNaTela("h1", "Numero secreto é menor");

        } else { 
            exibirTextoNaTela ("h1", "Numero secreto é maior");
        }
    }
    tentativas++;
    limparTexto ();
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeElementosEscolhidos = listaNumeroSorteados.length;
    if (quantidadeElementosEscolhidos == numeroLimite) {
        listaNumeroSorteados = [];
    }

    if (listaNumeroSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaNumeroSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}
function limparTexto() {
    chute = document.querySelector("input");
    chute.value = "";
    
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparTexto();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled",true);
}
