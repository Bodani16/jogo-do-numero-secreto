//variaveis:
let listaNumeroSorteados = [];
let numeroLimite = 100;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

//função de exebir o texto na tela: / biblioteca de fala.
function exibirTextoNaTela(tag, texto){
    let titulo = document.querySelector(tag);
    titulo.innerHTML = texto;
    responsiveVoice.speak(texto, "Brazilian Portuguese Female",
         {rate: 1.2});
}
function exibirMensagemInicial() {
    exibirTextoNaTela("h1", "Jogo do número secreto");
    exibirTextoNaTela("p",`Escolha um número entre 1 a ${numeroLimite}.`);

}

exibirMensagemInicial();
//função de verifcar se foi apertado o botão.
function verificarChute(){
    let chute = document.querySelector("input").value;
    if (numeroSecreto == chute) {
        palavraTentativa = tentativas == 1? "tentativa" : "tentativas";
        qntTentativa = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela("h1", "Acertou!");
        exibirTextoNaTela("p",qntTentativa);
        //setamos para habilitar o botao
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
        //aviso caso o usario exceda o valor limite.
        if (chute > numeroLimite) {
        exibirTextoNaTela("h1", `seu numero é maior que ${numeroLimite}, porfavor digite um numero entre 1 a ${numeroLimite}.`);
    }
}
//funçao de gerar um numero aleatorio com uma lista.
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
//limpar texto na tela após erro ou acerto.
function limparTexto() {
    chute = document.querySelector("input");
    chute.value = "";
        
}
//da função ao usuario poder reiniciar o jogo assim podendo começar novamente.
function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparTexto();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled",true);
}
