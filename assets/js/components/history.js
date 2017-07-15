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
			$.each(data, function(index,ele){
			$('#historial').append('<p>'+data[index].winner_player+' le gano a '+data[index].loser_player+'en '+data[index].number_of_turns_to_win+'movimientos</p>');
			$('#historial').append('<span><a href="#">Comentar</a></span>');
			})				
		}
	});

	const historial = {
			    "winner_player": winner,
			    "loser_player": loser,
			    "number_of_turns_to_win": move,
			}

		$.ajax({
			type:'POST',
			url:'http://test-ta.herokuapp.com/games',
			data: historial,
			success: function(newHistoria){
				console.log(newHistoria);
				$.each(newHistoria, function(index,ele){
					console.log(newHistoria[0].winner_player);
				
				//$('#historial').append('<p>'+newHistoria[index].winner_player+' le gano a '+newHistoria[index].loser_player+'en '+newHstoria[index].number_of_turns_to_win+'movimientos</p>');

				})
			}

		});




	
	/*span.on('click', (e)=>{
		e.preventDefault();
		/*state.nextpage = 5;
		update();*/
		/*$('section').replaceWith(Comments(winner, loser, move));
	});*/

	return section;
}