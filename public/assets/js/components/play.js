'use strict';

const Play = (player1, player2) =>{
	console.log(player1);
	console.log(player2);
	const section = $('<section id ="wallpaper"  ></section>');
  const header = $('<header class="center-block third" ></header>');
  const inicio = $('<span>Inicio</span>');
  const icon = $('<span>|</span>');
  const historia = $('<span>Historia</span>');
  const container = $('<div id="content_play" class="center-block txt-center"></div>')
  const turner = $('<h2 class="turn"></h2>');
	const message = $('<h3 class="messages"></h3>');
  const div = $('<table></table>');
  const fil1 = $('<tr></tr>');
  const col1 = $('<td class="it1"></td>');
  const col2 = $('<td class="it2"></td>');
  const col3 = $('<td class="it3"></td>');
  const fil2 = $('<tr></tr>');
  const col4 = $('<td class="it4"></td>');
  const col5 = $('<td class="it5"></td>');
  const col6 = $('<td class="it6"></td>');
  const fil3 = $('<tr></tr>');
  const col7 = $('<td class="it7"></td>');
  const col8 = $('<td class="it8"></td>');
  const col9 = $('<td class="it9"></td>');
 	const space = $('<br>');
  const resetear = $('<button class="btn btn_color reset" id="newBoard">Nuevo juego</button>');
  const move = $('<div class="movimientos"></div>');
  const div2 = $('<div class="play1" ></div>');
  const p1 = $('<p>Movimientos de <strong>'+player1+'</strong></p>');
  const span1  = $('<span id="mov_play1"></span>');
  const div3 = $('<div class="play2" ></div>');
  const p2 = $('<p>Movimientos de <strong>'+player2+'</strong></p>');
  const span2  = $('<span id="mov_play2"></span>');
	const btNext = $('<button class="btn btn_color historial">Ir al Historial</button>');

	section.append(header);
  section.append(container);
  header.append(inicio,icon,historia);
  container.append(turner, message, div, space, resetear,move,btNext);	
  div.append(fil1, fil2, fil3);
  fil1.append(col1, col2, col3);
  fil2.append(col4, col5, col6);
  fil3.append(col7, col8, col9);
	move.append(div2,div3);	
  div2.append(p1, span1);
  div3.append(p2, span2);


$(function() {
	var i = 0;
	var j = 0;
	let winner = "";
	let loser = "";
	const cont1 = $('#mov_play1');
	const cont2 = $('#mov_play2');
	let player = player1;
	let table = $('table');
	let messages = $('.messages');
	let turn = $('.turn');

    displayNextPlayer(turn, player);

  function displayNextPlayer(turn, player) {
      turn.text('Turno de : '+player);
  } 

  $('td').click(function() {
    let td = $(this);
    // console.log(td);
    var state = getState(td);
    if(!state) {
      var pattern = definePatternForCurrentPlayer(player);
      changeState(td, pattern);
      if(checkIfPlayerWon(table, pattern)) {
        if(player == player1){
          winner = player1;
          loser = player2;
         var mov1 =  parseInt($('#mov_play1').html()) + 1 ;
         console.log(mov1);
          winAndLose(winner, loser, mov1);
        }else{
          loser = player1;
          winner = player2;
         var mov2 =  parseInt($('#mov_play2').html()) + 1 ;
         console.log(mov2);
          winAndLose(winner, loser, mov2);
        }
        messages.text('Jugador '+player+' ha ganado.');
        turn.text('');
      }
      else {
        player = setNextPlayer(player);
        displayNextPlayer(turn, player);
       }
    } else {
        messages.text('Este recuadro ya ha sido utilizado.');
      }
  })

    $('#newBoard').click(function() {
      player = player1;
      messages.text('');
      i = 0;
      cont1.text("");
      j = 0;
      cont2.text("");
      reset(table);
      displayNextPlayer(turn, player);
    })

  function getState(td) {
    if(td.hasClass('cross') || td.hasClass('circle')) {
      return 1;
    } else {
      return 0;
    }
  }
  function changeState(td, pattern) {
    return td.addClass(pattern);
  }    
  function definePatternForCurrentPlayer(player) {
    if(player == player1) {
      return 'cross';
    } else {
      return 'circle';
    }
  }

  function setNextPlayer(player) {
    if(player == player1) {
      i++;
      $('#mov_play1').html(i);
      return player = player2; 
    } else {
      j++;
      $('#mov_play2').html(j);
      return player = player1;
    }
  }

  function winAndLose(jug1, jug2, mov){
    // console.log(jug1);
    // console.log(jug2);
    // console.log(mov);
    btNext.on('click', (e)=>{
      e.preventDefault();     
      var historial = {
          "winner_player": jug1,
          "loser_player": jug2,
          "number_of_turns_to_win": mov,
      };
      $.ajax({
      type:'POST',
      url:'http://test-ta.herokuapp.com/games',
      data: JSON.stringify(historial),
      dataType: 'json',
      contentType: "application/json",
      success: function(newHistoria){
        // console.log(newHistoria);
        $.each(newHistoria, function(index,ele){
          $('#historial').append('<p>'+newHistoria.winner_player+' le gano a '+newHistoria.loser_player+'en '+newHistoria.number_of_turns_to_win+' movimientos</p>');
          $('#historial').append('<span><a href="#" id="comentar">Comentar</a></span>');
        });
        $('section').replaceWith(History(jug1, jug2, mov)); 
        }
      });
    });
  }    

  function checkIfPlayerWon(table, pattern) {
      var won = 0;
      if(table.find('.it1').hasClass(pattern) && table.find('.it2').hasClass(pattern) && table.find('.it3').hasClass(pattern)) {
        won = 1;
      } else if (table.find('.it1').hasClass(pattern) && table.find('it4').hasClass(pattern) && table.find('.it7').hasClass(pattern)) {
        won = 1;
      } else if (table.find('.it1').hasClass(pattern) && table.find('.it5').hasClass(pattern) && table.find('.it9').hasClass(pattern)) {
        won = 1;
      } else if (table.find('.it4').hasClass(pattern) && table.find('.it5').hasClass(pattern) && table.find('.it6').hasClass(pattern)) {
        won = 1;
      } else if (table.find('.it7').hasClass(pattern) && table.find('.it8').hasClass(pattern) && table.find('.it9').hasClass(pattern)) {
        won = 1;
      } else if (table.find('.it2').hasClass(pattern) && table.find('.it5').hasClass(pattern) && table.find('.it8').hasClass(pattern)) {
        won = 1;
      } else if (table.find('.it3').hasClass(pattern) && table.find('.it6').hasClass(pattern) && table.find('.it9').hasClass(pattern)) {
        won = 1;
      } else if (table.find('.it3').hasClass(pattern) && table.find('.it5').hasClass(pattern) && table.find('.it7').hasClass(pattern)) {
        won = 1;
      }
      return won;
    }
  
  function reset(table) {
    table.find('td').each(function() {
      $(this).removeClass('circle').removeClass('cross');
    });
  }

 });

  
	return section;
}
	