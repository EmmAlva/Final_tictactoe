'use strict';

const Players = (update) =>{
	const section = $('<section ></section>');
	const header = $('<header ></header>');
	const inicio = $('<span>Inicio</span>');
	const icon = $('<span>|</span>');
	const historia = $('<span>Historia</span>');
	const col = $('<div class="col-lg-12></div>');
	const input1 = $('<p>Ingrese el nombre del jugador 1 <input type="text" id="nombre1" required=""></p>');
	const span1 = $('<span id="req_name1"></span>');
	const input2 = $('<p>Ingrese el nombre del jugador 2<input type="text" id="nombre2" required=""></p>');
	const span2 = $('<span id="req_name2"></span>');
	const space = $('<br>');
	const butn = $('<button><a href="#" id="start">Comenzar</a></button>');

	header.append(inicio,icon,historia);
	section.append(header);
	section.append(input1);
	input1.append(span1);
	section.append(input2);
	input2.append(span2);
	section.append(space);
	section.append(butn);

	butn.on('click', (e) => {
		e.preventDefault();	
		
		let player1 = $('#nombre1').val();
		let player2 = $('#nombre2').val();			

			if($('#nombre1').val() == "" && $('#nombre2').val() == ""){
				$('#req_name1').text('Complete el campo');
				$('#req_name2').text('Complete el campo');				
			}else{
				$('section').replaceWith(Play(player1,player2));
			}
	

	});

	








	return section;
}