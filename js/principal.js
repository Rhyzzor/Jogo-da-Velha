var rodada = 1;
var matriz_jogo = Array(3);

matriz_jogo ['a'] = Array (3);
matriz_jogo ['b'] = Array (3);
matriz_jogo ['c'] = Array (3);

matriz_jogo ['a'] [1] = 0;
matriz_jogo ['a'] [2] = 0;
matriz_jogo ['a'] [3] = 0;

matriz_jogo ['b'] [1] = 0;
matriz_jogo ['b'] [2] = 0;
matriz_jogo ['b'] [3] = 0;

matriz_jogo ['c'] [1] = 0;
matriz_jogo ['c'] [2] = 0;
matriz_jogo ['c'] [3] = 0;

$(document).ready(function(){

  $("#botao-start").click(function(){

    //Validação dos nomes dos Jogadores

    if ($("#jogador-um").val() == "") {
        alert('O nome do primeiro jogador está vazio');
        return false;
    }
    if ($("#jogador-dois").val() == "") {
        alert('O nome do segundo jogador está vazio');
        return false;
    }

    

  })
});
