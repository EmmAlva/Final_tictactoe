'use strict';

const History = (winner, loser, move) =>{
	console.log(winner);
	console.log(loser);
	console.log(move);
	const section = $('<section id ="wallpaper"  ></section>');
	const header = $('<header class="center-block third" ></header>');
	const inicio = $('<span>Inicio</span>');
	const icon = $('<span>|</span>');
	const historia = $('<span>Historia</span>');
	const container = $('<div id="content_historial" class="center-block txt-center"></div>')
	const h2 = $('<h2>Historial<h2>');
	const div = $('<div class ="lista_historial" id="historial"></div>');
	section.append(header);
	section.append(container);
	header.append(inicio,icon,historia);
	container.append(h2,div);	

	$.ajax({
		type:'GET',
		url: 'http://test-ta.herokuapp.com/games',
		success: function(data){
			// console.log(data);
			$.each(data, function(index,ele){
				const group = $('<div class="group-historial"></div>');
				$('#historial').append(group);
				group.append('<p>'+data[index].winner_player+' le gano a '+data[index].loser_player+' en '+data[index].number_of_turns_to_win+' movimientos</p>');
				group.append('<button  id='+data[index].id+' class ="btn btn_color comment">Comentar</button>');
				state.data = data[index];
				state.id = data[index].id;
				// console.log(state.id);
			});

			$('.comment').on('click',function(e){
				e.preventDefault();
				var identificador = $(this).attr('id');
				// alert("btn " + identificador + " presionado");
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

