let numeroSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag,texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensssagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escola um número entre 1 e 10.');
}

exibirMensssagemInicial();

function verificarChute(){
    let chute = document.querySelector('input').value
    
    if (chute == numeroSecreto){
        exibirTextoNaTela('h1','Você acertou!!');
        let palavraTentativa = tentativas > 1? 'tentativas' : 'tentativa';
        let menssagemTentativas = `Você descobriu o número com ${tentativas} ${palavraTentativa}`
        exibirTextoNaTela('p', menssagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        if(chute > numeroSecreto){
            exibirTextoNaTela('p','O nùmero é menor');
        } else{
        exibirTextoNaTela('p','O número é maior');
    }
    }
    tentativas++;
    limparCampo();
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaListas = numeroSorteados.length;

    if (quantidadeDeElementosNaListas == numeroLimite) {
        numeroSorteados = [];
    }
    if (numeroSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else{
        numeroSorteados.push(numeroEscolhido);
        console.log(numeroSorteados);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensssagemInicial();
    document.querySelector('reiniciar').setAttribute('disabled', true);
}