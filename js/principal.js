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

//Ocultar Tela de Jogo
$("#jogoInicio").hide();

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

    //Exibição dos nomes
    $("#jogador1-nome").html($("#jogador-um").val());
    $("#jogador2-nome").html($("#jogador-dois").val());

    //Visualização das Telas (Div)
    $("#telaInicial").hide();
    $("#jogoInicio").show();

  });
  //Contador de Click na área
  $(".espaco").click(function(){
    var espacoSelecionado = this.id;
    $("#" + espacoSelecionado).off();
    movimento(espacoSelecionado);
  });

  //Verificador de pontos e adicionador de "icones (X ou O)" 
  function movimento(id){

    var icone = "";
    var pontos = 0;

    if (rodada % 2 == 1){

      icone = 'url("imagens/cruz.png")'
      pontos = -1;
    } else {

      icone = 'url("imagens/bolinha.png")'
      pontos = 1
    }
  }

  rodada++;

  $("#" + id).css('background-image', icone);

  var linhaColuna = id.split('-');

  matriz_jogo[linhaColuna[0]][linhaColuna[1]] = pontos;


});
