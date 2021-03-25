var altura = 0;
var largura = 0;
var vidas = 1;
var tempo = 10;
var criarMoscaTempo = 1500

var nivel = window.location.search
nivel = nivel.replace('?' , '')

if (nivel === 'normal'){
    criarMoscaTempo = 1500;
} else if (nivel === 'dificil') {
    criarMoscaTempo = 1000;
} else if ( nivel === 'darkSouls') {
    criarMoscaTempo = 750;
}

function adptaTela() {
    altura = window.innerHeight;
    largura = window.innerWidth;
}

adptaTela();

var cronometro = setInterval(function() {
    tempo -= 1;

    if ( tempo < 0) {
        clearInterval(cronometro);
        clearInterval(criarMosca);
        window.location.href = 'vitoria.html';
    } else {
        document.getElementById('cronometro').innerHTML = tempo;
    }

} ,1000 )

function posicaoRandom(){

    if(document.getElementById('mosca')){
        document.getElementById('mosca').remove();

        if (vidas > 3) {
            window.location.href = 'fim_de_jogo.html';
        } else {
            document.getElementById(`vida${vidas}`).src = 'coracao_vazio.png';
            vidas++;
        }
    }

    var posicaoY = Math.floor(Math.random() * altura) - 90;
    var posicaoX = Math.floor(Math.random() * largura) - 90;
    
    posicaoY = posicaoY < 0 ? 0 : posicaoY;
    posicaoX = posicaoX < 0 ? 0 : posicaoX;
    
    var mosca = document.createElement('img');
        mosca.src = 'mosca.png';
        mosca.id = 'mosca'
        mosca.className = tamanhoMosca() + ' ' + ladoMosca();
        mosca.style.top = posicaoY + 'px';
        mosca.style.left = posicaoX + 'px';
        mosca.style.position = 'absolute';
        mosca.onclick = function() {
            this.remove();
        }
    
    document.body.appendChild(mosca)
    
    function tamanhoMosca() {
        var tamanho = Math.floor(Math.random() * 3);
            switch(tamanho) {
                case 0:
                    return 'mosca1';
                case 1: 
                    return 'mosca2';
                case 2:
                    return 'mosca3';
            }
    }
    
    function ladoMosca() {
        var lado = Math.floor(Math.random() * 2);
            switch(lado) {
                case 0:
                    return 'ladoA';
                case 1:
                    return 'ladoB';
            }
    }
}    

var criarMosca = setInterval(function() {
    posicaoRandom()
 }, criarMoscaTempo)

