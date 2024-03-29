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
$("#telaInicial").show();
$("#jogoInicio").hide();
$("#reiniciar").hide();

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
    $('.vez1').html('<img src="imagens/player1.png" style="width:100px;">');


  });
  //Contador de Click na área
  $(".espaco").click(function(){
    var campoClicado = this.id;
    $("#"+campoClicado).off();
    movimento(campoClicado);
  });

  //Verificador de pontos e acionador de "icones (X ou O)"
  function movimento(id){

    var icone = "";
    var ponto = 0;

    if (rodada % 2 == 1) {

      icone = 'url("imagens/cruz.png")';
      ponto = -1;
      $('.vez1').html('<img src="imagens/player2.png" style="width:100px;">');


    } else {

      icone = 'url("imagens/bolinha.png")';
      ponto = 1;
      $('.vez1').html('<img src="imagens/player1.png" style="width:100px;">');

    }

    rodada++;

    $("#" + id).css('background-image', icone);

    //Puxando as colunas ocupadas e seus valores
    var linhaColuna = id.split('-');
    matriz_jogo[linhaColuna[0]][linhaColuna[1]] = ponto;
    checandoCombinacao();
  }

  //Checar os modos de ganhar
  function checandoCombinacao() {

    //Verificador na horizontal
    var pontos = 0;
    for (var cont = 1; cont <= 3; cont++){
      pontos = pontos + matriz_jogo['a'][cont];
    }
    vencedor(pontos);

    pontos = 0;
    for (var cont = 1; cont <= 3; cont++){
      pontos = pontos + matriz_jogo['b'][cont];
    }
    vencedor(pontos);

    pontos = 0;
    for (var cont = 1; cont <= 3; cont++){
      pontos = pontos + matriz_jogo['c'][cont];
    }
    vencedor(pontos);

    //Verificador na vertical
    for(var cont2 = 1; cont2 <=3; cont2++){
      pontos = 0;
      pontos += matriz_jogo['a'][cont2];
      pontos += matriz_jogo['b'][cont2];
      pontos += matriz_jogo['c'][cont2];

      vencedor(pontos);
    }

    //Verificador na diagonal
    pontos = 0;
    pontos = matriz_jogo['a'][1] + matriz_jogo['b'][2] + matriz_jogo['c'][3];
    vencedor(pontos);

    pontos = 0;
    pontos = matriz_jogo['a'][3] + matriz_jogo['b'][2] + matriz_jogo['c'][1];
    vencedor(pontos);
  }

  //Declarando vencedor (ou Velha)
  function vencedor(pontos) {

    if(pontos == -3) {
      $(".vez").html("O vencedor é:")
      $(".ganhador1").html('<img src="imagens/trofeu.png" style="width:100px; margin-top: -10px; margin-bottom: -200px; margin-left: 200px">')
      $('.vez1').html('<img src="imagens/player1.png" style="width:100px;">');
      $('.espaco').off();
      $("#reiniciar").show();
    } else if(pontos == 3) {
      $(".ganhador2").html('<img src="imagens/trofeu.png" style="width:100px; margin-top: 80px; margin-bottom: -150px; margin-left: -50px;">')
      $(".vez").html("O vencedor é:")
      $('.vez1').html('<img src="imagens/player2.png" style="width:100px;">');
      $('.espaco').off();
      $("#reiniciar").show();
    }
    else if((matriz_jogo['a'][1] && matriz_jogo['a'][2] && matriz_jogo['a'][3] && matriz_jogo['b'][1] &&
			matriz_jogo['b'][2] && matriz_jogo['b'][3] && matriz_jogo['c'][1] && matriz_jogo['c'][2] &&
			matriz_jogo['c'][3]) != 0){
        $(".vez").html("Deu velha!")
        $('.vez1').html('<img src="imagens/empate.png" style="width:90px;">');
        $("#reiniciar").show();
      }
  }





});
