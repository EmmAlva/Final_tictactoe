'use strict';

const Play = (player1, player2) =>{
	console.log(player1);
	console.log(player2);
	const section = $('<section class="cabecera"></section>');
	const header = $('<header ></header>');
	const inicio = $('<span>Inicio</span>');
	const icon = $('<span>|</span>');
	const historia = $('<span>Historia</span>');
	const message = $('<div class="messages"></div>');
	const h1 = $('<h1 class="turn"></h1>');
	const div = $('<div class="square"></div>');
	const div1 = $('<div></div>');
	const btn0 = $('<button id="0" class="botones"></button>');
	const btn1 = $('<button id="1" class="botones"></button>');
	const btn2 = $('<button id="2" class="botones"></button>');

	const div2 = $('<div></div>');
	const btn3 = $('<button id="3" class="botones"></button>');
	const btn4 = $('<button id="4" class="botones"></button>');
	const btn5 = $('<button id="5" class="botones"></button>');

	const div3 = $('<div></div>');
	const btn6 = $('<button id="6" class="botones"></button>');
	const btn7 = $('<button id="7" class="botones"></button>');
	const btn8 = $('<button id="8" class="botones"></button>');

	const space = $('<br>');
	const p1 = $('<p>Movimientos de '+player1+'</p>');
	const span1  = $('<span id="mov_play1"></span>');
	const p2 = $('<p>Movimientos de '+player2+'</p>');
	const span2  = $('<span id="mov_play2"></span>');
	const p3 = $('<p id="ganador"></p>');
	const btn_new = $('<button id="newBoard">Nuevo juego</button>');
	const btn_his = $('<button><a href="history.html">Ir al Historial</a></button>');

	header.append(inicio,icon,historia);
	section.append(header);
	section.append(message);
	section.append(h1);
	section.append(div);
	
	div.append(div1,div2,div3);
	div1.append(btn0,btn1,btn2);
	div2.append(btn3,btn4,btn5);
	div3.append(btn6,btn7,btn8);

	section.append(space);
	section.append(p1, span1,p2, span2,p3,btn_new,btn_his);

	


$(function() {
	var i = 0;
	var j = 0;

	let winner = "";
	let loser = "";
	const cont1 = $('#mov_play1');
	const cont2 = $('#mov_play2');

	let player = player1;
	let table = $('.square');
	var messages = $('.messages');
	const turn = $('.turn');
	let btn = $('.botones');

	displayNextPlayer(turn, player);

	function displayNextPlayer(turn, player) {
  		turn.text('Turno de : '+player);
	}	

	function winAndLose(jug1, jug2, mov){
		console.log(jug1);
		console.log(jug2);
		var mov = $('#mov_play1').html();
		console.log(mov);
		btn_his.on('click', (e)=>{
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
				console.log(newHistoria);
				$.each(newHistoria, function(index,ele){
					$('#historial').append('<p>'+newHistoria.winner_player+' le gano a '+newHistoria.loser_player+'en '+newHistoria.number_of_turns_to_win+' movimientos</p>');
					$('#historial').append('<span><a href="#" id="comentar">Comentar</a></span>');
				})
			}
		});

			
			$('section').replaceWith(History(jug1, jug2, mov));	

		});

	}

	btn.click(function() {
    btn = $(this);
    var state = getState(btn);
    if(!state) {
      var pattern = definePatternForCurrentPlayer(player);
      changeState(btn, pattern);
      if(checkIfPlayerWon(table, pattern)) {
        messages.text('Jugador '+player+' ha ganado.');
        turn.text('');
        if(player == player1){
        	winner = player1;
        	loser = player2;
        	winAndLose(winner, loser);
        }else{
        	loser = player1;
        	winner = player2;
        	winAndLose(winner, loser);
        }
      }
      else {
        player = setNextPlayer(player);
        displayNextPlayer(turn, player);

      }
	    } else {
	      messages.text('Este recuadro ya ha sido utilizado.');
	    }
  	});



  	$('#newBoard').click(function() {
    player = player1;
    messages.text('');
    reset(table);
    displayNextPlayer(turn, player);
  	});



  	function getState(btn) {
  if(btn.hasClass('cross') || btn.hasClass('circle')) {
    return 1;
  } else {
    return 0;
  }
}

function changeState(btn, pattern) {
  return btn.addClass(pattern);
}

function getState(btn) {
  if(btn.hasClass('cross') || btn.hasClass('circle')) {
    return 1;
  } else {
    return 0;
  }
}

function changeState(btn, pattern) {
  return btn.addClass(pattern);
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

function displayNextPlayer(turn, player) {
  turn.html('Turno de : '+player);
}


function checkIfPlayerWon(table, pattern) {
  var won = 0;
  if(table.find('#0').hasClass(pattern) && table.find('#1').hasClass(pattern) && table.find('#2').hasClass(pattern)) {
    won = 1;
  } else if (table.find('#0').hasClass(pattern) && table.find('#3').hasClass(pattern) && table.find('#6').hasClass(pattern)) {
    won = 1;
  } else if (table.find('#0').hasClass(pattern) && table.find('#4').hasClass(pattern) && table.find('#8').hasClass(pattern)) {
    won = 1;
  } else if (table.find('#3').hasClass(pattern) && table.find('#4').hasClass(pattern) && table.find('#5').hasClass(pattern)) {
    won = 1;
  } else if (table.find('#6').hasClass(pattern) && table.find('#7').hasClass(pattern) && table.find('#8').hasClass(pattern)) {
    won = 1;
  } else if (table.find('#1').hasClass(pattern) && table.find('#4').hasClass(pattern) && table.find('#7').hasClass(pattern)) {
    won = 1;
  } else if (table.find('#2').hasClass(pattern) && table.find('#5').hasClass(pattern) && table.find('#8').hasClass(pattern)) {
    won = 1;
  } else if (table.find('#2').hasClass(pattern) && table.find('#4').hasClass(pattern) && table.find('#6').hasClass(pattern)) {
    won = 1;
  }
  return won;
}





function reset(table) {
  table.find(btn).each(function() {
    $(this).removeClass('circle').removeClass('cross');
  });
}



 });

  


	return section;
}
	


	//Espera a que todo cargue
//window.addEventListener('load',function() {

  //Obtiene los botones
 // const newButton = $('#newBoard');
 // const buttons = $('.botones');

  //Crea la clase tictactoe encargada de toda la lógica y crea un tablero nuevo
 // var app = new Tictactoe();
  //app.newBoard();

  //Agrega la funcionalidad de click a nuevo tablero
  /*btn_new.on('click',function(event) {
    event.preventDefault();
    app.newBoard();
    $.each(buttons, function(i,elem){
    	buttons.text('+');
    });

//    for (var i = 0; i < buttons.length;i++) {
  //    buttons[i].innerHTML = "+";
    //}
  });

  //Por cada botón del tablero agrega una funcion la que se encarga de transmitir la información
  //a la aplicación.
  //for (var i = 0;i < buttons.length;i++) {
    buttons.on('click',function(event) {
      event.preventDefault();
      event.target.innerHTML = app.getCurrentPlayer();
      app.play(event.target.id);
      var result = app.checkWinner();
      if (result != null) {
        alert(result);
      }
    });
//  }

//});*/