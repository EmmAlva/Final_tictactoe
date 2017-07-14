'use strict';

const Play = (player1, player2) =>{
	console.log(player1);
	console.log(player2);
	const section = $('<section class="cabecera"></section>');
	const header = $('<header ></header>');
	const inicio = $('<span>Inicio</span>');
	const icon = $('<span>|</span>');
	const historia = $('<span>Historia</span>');
	const col = $('<div class="col-lg-12"></div>');
	const message = $('<div class="messages"></div>');
	const h1 = $('<h1 class="turn"></h1>');
	const div = $('<div class="square"></div>');
	const div1 = $('<div></div>');
	const btn0 = $('<button id="0" class="botones">+</button>');
	const btn1 = $('<button id="1" class="botones">+</button>');
	const btn2 = $('<button id="2" class="botones">+</button>');

	const div2 = $('<div></div>');
	const btn3 = $('<button id="3" class="botones">+</button>');
	const btn4 = $('<button id="4" class="botones">+</button>');
	const btn5 = $('<button id="5" class="botones">+</button>');

	const div3 = $('<div></div>');
	const btn6 = $('<button id="6" class="botones">+</button>');
	const btn7 = $('<button id="7" class="botones">+</button>');
	const btn8 = $('<button id="8" class="botones">+</button>');

	const space = $('<br>');
	const p1 = $('<p>Movimientos de '+player1+'</p>');
	const span1  = $('<span id="mov_play1">#</span>');
	const p2 = $('<p>Movimientos de '+player2+'</p>');
	const span2  = $('<span id="mov_play2">#</span>');
	const p3 = $('<p id="ganador"></p>');
	const btn_new = $('<button id="newBoard">Nuevo juego</button>');
	const btn_his = $('<button><a href="history.html">Ir al Historial</a></button>');

	header.append(inicio,icon,historia);
	section.append(header);
	section.append(col);
	col.append(h1);
	section.append(div);
	
	div.append(div1,div2,div3);
	div1.append(btn0,btn1,btn2);
	div2.append(btn3,btn4,btn5);
	div3.append(btn6,btn7,btn8);

	section.append(space);
	section.append(p1, span1,p2, span2,p3,btn_new,btn_his);

	var player = player1;
	var table = $('.square');
	var messages = $('.messages');
	var turn = $('.turn');
	displayNextPlayer(turn, player);

	function displayNextPlayer(turn, player) {
  		turn.html('Turno de : '+player);
	}

	$('.botones').click(function() {
    td = $(this);
    var state = getState(td);
    if(!state) {
      var pattern = definePatternForCurrentPlayer(player);
      changeState(td, pattern);
      if(checkIfPlayerWon(table, pattern)) {
        messages.html('Player '+player+' has won.');
        turn.html('');
      } else {
        player = setNextPlayer(player);
        displayNextPlayer(turn, player);
      }
	    } else {
	      messages.html('This box is already checked.');
	    }
  	});
  





	//Espera a que todo cargue
//window.addEventListener('load',function() {

  //Obtiene los botones
 // const newButton = $('#newBoard');
  const buttons = $('.botones');

  //Crea la clase tictactoe encargada de toda la lógica y crea un tablero nuevo
  var app = new Tictactoe();
  app.newBoard();

  //Agrega la funcionalidad de click a nuevo tablero
  btn_new.on('click',function(event) {
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

//});



	btn_his.on('click', (e)=>{
		e.preventDefault();
		//$('section').replaceWith(History(winner, loser));
	})


	return section;
}
	