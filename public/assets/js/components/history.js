'use strict';

const History = (winner, loser, move) =>{
	console.log(winner);
	console.log(loser);
	console.log(move);
	const section = $('<section></section>');
	const header = $('<header class="cabecera"></header>');
	const inicio = $('<span>Inicio</span>');
	const icon = $('<span>|</span>');
	const historia = $('<span>Historia</span>');
	const col = $('<div class="col-lg-12"></div>');
	const h1 = $('<h1>Historial<h1>');
	const div = $('<div class ="historial" id="historial"></div>');
	//const p = $('<p>'+winner+' le gano a '+loser+'en '+move+'movimientos</p>');
	//const span = $('<span><a href="#">Comentar</a></span>');

	header.append(inicio,icon,historia);
	section.append(header);
	section.append(h1);
	section.append(col);
	section.append(div);
//	div.append(p,span);


	$.ajax({
		type:'GET',
		url: 'http://test-ta.herokuapp.com/games',
		success: function(data){
			// console.log(data);
			$.each(data, function(index,ele){
			$('#historial').append('<p>'+data[index].winner_player+' le gano a '+data[index].loser_player+' en '+data[index].number_of_turns_to_win+' movimientos</p>');
			$('#historial').append('<button  id='+data[index].id+' class ="comment">Comentar</button>');
			state.data = data[index];
			state.id = data[index].id;
			// console.log(state.id);
			});

			$('.comment').on('click',function(e){
				e.preventDefault();
				var identificador = $(this).attr('id');
				alert("btn " + identificador + " presionado");
				console.log(data[identificador]);

				getGame(identificador);
			});	
		}
	});

	function getGame(id){
		$.getJSON('http://test-ta.herokuapp.com/games/'+id, (json) =>{
			console.log(json);
			$('section').replaceWith(Comments(json.winner_player, json.loser_player, json.number_of_turns_to_win, json.id));
			})
	}	

	return section;
	
}

