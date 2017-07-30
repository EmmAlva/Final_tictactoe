'use strict';

const Players = (update) =>{
	const section = $('<section id ="wallpaper"  ></section>');
	const header = $('<header class="center-block second" ></header>');
	const inicio = $('<span>Inicio</span>');
	const icon = $('<span>|</span>');
	const historia = $('<span>Historia</span>');
	const form = $('<form id="ingreso_players"></form>');
	const input1 = $('<p>Ingrese el nombre del jugador 1 <input type="text" id="nombre1"></p>');
	const div1 = $('<div id="req_name1"></div>');
	const input2 = $('<p>Ingrese el nombre del jugador 2 <input type="text" id="nombre2"></p>');
	const div2 = $('<div id="req_name2"></div>');
	const space = $('<br>');
	const btn = $('<button class="btn btn_color" id="play">Comenzar</button>');

	section.append(header);
	header.append(inicio,icon,historia);
	section.append(form);
	form.append(input1, input2, space, btn);
	input1.append(div1);
	input2.append(div2);

	btn.on('click', (e) => {
		e.preventDefault();	
		
		let player1 = $('#nombre1').val().charAt(0).toUpperCase() + $('#nombre1').val().slice(1);
		let player2 = $('#nombre2').val().charAt(0).toUpperCase() + $('#nombre2').val().slice(1);		

		if ($('#nombre1').val() != "" && $('#nombre2').val() == ""){
			$('#req_name1').text('');		
			$('#req_name2').text('Campo requerido');		
		}else if ($('#nombre2').val() != "" && $('#nombre1').val() == ""){
			$('#req_name2').text('');		
			$('#req_name1').text('Campo requerido');		
		} else if($('#nombre1').val() == "" || $('#nombre2').val() == ""){
			$('#req_name1').text('Campo requerido');
			$('#req_name2').text('Campo requerido');
		}
		else if($('#nombre1').val() != "" && $('#nombre2').val() != ""){
			$('#req_name1').text('');
			$('#req_name2').text('');
			$('section').replaceWith(Play(player1,player2));
		}
	});

	return section;
}