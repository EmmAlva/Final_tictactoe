'use strict';
const Comments = (winner, loser, move, id) =>{
	console.log(id);
	console.log(winner);
	console.log(loser);
	console.log(move);
	const section = $('<section class="cabecera"></section>');
	const header = $('<header class="cabecera"></header>');
	const inicio = $('<span>Inicio</span>');
	const icon = $('<span>|</span>');
	const historia = $('<span>Historia</span>');
	const col = $('<div class="col-lg-12></div>');
	const div = $('<div class="historial" id="historial"></div>');
	const p =$('<p>'+winner+' le gano a '+loser+'en '+move+' movimientos</p>');
	const h5 = $('<h5>Comentarios</h5>');
	header.append(inicio,icon,historia);
	section.append(header);
	section.append(col);
	section.append(div);
	div.append(p);
	section.append(h5);

	
	$.get('https://test-ta.herokuapp.com/games/' + id + '/comments', (json)=>{
						state.comentario = json;
						$.each(json, function(index, elemento){
							const div1 = $('<div id="comments"></div>');
							const p1 = $('<p>'+json[index].name+' dice: </p>');
							const p2 = $('<p class="comentario">'+json[index].content+'</p>');
							

						section.append(div1);
						div1.append(p1,p2);
						});
						console.log(state.comentario);	

						const add = $('<h5>Agregar comentario</h5>');
						const form = $('<form></form>');
						const p3 = $('<p>Tu nombre: <input type="text" id="nombre" class="name"></p>');
						const p4 = $('<p>Tu Comentario: <textarea name="comentario" id="text_comment" cols="30" rows="10"></textarea></p>');
						const btn = $('<button><a href="#" id="send">ENVIAR</a></button>');
						const response = $('<div class="response">Tu comentario ha sido enviado satisfactoriamente</div>');

						section.append(add);
						section.append(form);
						form.append(p3,p4);
						form.append(btn);
						section.append(response);


						var name =  $('#nombre');
						var textarea = $('textarea');

						$('#send').on('click', (e)=>{
								e.preventDefault();
								alert("enviando...");	
								
							var comentarista = {
								"game_id": id,
								"name": name.val(),
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
										const final = $('<div id="comments"></div>');
										const pname = $('<p>'+data.name+' dice: </p>');
										const pconte = $('<p class="comentario">'+data.content+'</p>');
									
									section.append(final);
									final.append(pname,pconte);

									form[0].reset();



									}
										
								});
							});	




						

					});
	

	
	

	


	return section;
}