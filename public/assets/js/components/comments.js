'use strict';
const Comments = (winner, loser, move, id) =>{
	console.log(id);
	console.log(winner);
	console.log(loser);
	console.log(move);
	const section = $('<section id ="wallpaper"></section>');
	const header = $('<header class="center-block fouth" ></header>');
	const inicio = $('<span>Inicio</span>');
	const icon = $('<span>|</span>');
	const historia = $('<span>Historia</span>');
	const container = $('<div id="content_comment" class="center-block txt-center"></div>')
	const h2 =$('<h2>"'+winner+' le gano a '+loser+' en '+move+' movimientos"</h2>');
	const h4 = $('<h4>Comentarios</h4>');
	const div = $('<div class="group_comment" id="groupComment"></div>');

	section.append(header);
	section.append(container);
	header.append(inicio,icon,historia);
	container.append(h2,h4, div);	
	
	$.get('https://test-ta.herokuapp.com/games/' + id + '/comments', (json)=>{
		state.comentario = json;
		$.each(json, function(index, elemento){
			const div1 = $('<div class="comments"></div>');
			const p1 = $('<p class="person">'+json[index].name+' dice: </p>');
			const p2 = $('<p class="comentario">'+json[index].content+'</p>');
			$('#groupComment').append(div1);
			div1.append(p1,p2);
		});
		// console.log(state.comentario);	
		
		const add = $('<h4>Agregar comentario</h4>');
		const form = $('<form id="ingreso_comments"></form>');
		const name = $('<div class="input_text"></div>');
		const label0 = $('<label for="" >Tu nombre: </label>');
		const input = $('<input type="text" id="nombre" class="name">');
		const cheio = $('<div class="text-area"></div>');
		const label = $('<label for="" >Tu comentario: </label>');
		const text = $('<textarea name="comentario" id="text_comment" cols="30" rows="10"></textarea>');
		const btn = $('<button class="btn btn_color send" id="send">ENVIAR</button>');
		const response = $('<div class="response"></div>');

		container.append(add);
		container.append(form);
		form.append(name,cheio);
		name.append(label0,input);
		cheio.append(label, text);
		form.append(btn);
		container.append(response);
		
		var nome =  $('#nombre');
		var textarea = $('textarea');

		$('#send').on('click', (e)=>{
				e.preventDefault();
				alert("enviando...");	
				$('.response').text('Tu comentario ha sido enviado satisfactoriamente');
				
			var comentarista = {
				"game_id": id,
				"name": nome.val(),
				"content": textarea.val()
				};
				$.ajax({
					type:'POST',
					url:'https://test-ta.herokuapp.com/games/' + id + '/comments',
					data: JSON.stringify(comentarista),
					dataType: 'json',
					contentType: "application/json",
					success: function(data){
						console.log(data);
						const final = $('<div class="comments"></div>');
						const pname = $('<p class="person">'+data.name+' dice: </p>');
						const pconte = $('<p class="comentario">'+data.content+'</p>');
					
					$('#groupComment').append(final);
					final.append(pname,pconte);

					form[0].reset();

					}
						
				});
			});	




						

					});
	

	
	

	


	return section;
}