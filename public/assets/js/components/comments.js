'use strict';
const Comments = (winner, loser, move) =>{
	const section = $('<section class="cabecera"></section>');
	const header = $('<header class="cabecera"></header>');
	const inicio = $('<span>Inicio</span>');
	const icon = $('<span>|</span>');
	const historia = $('<span>Historia</span>');
	const col = $('<div class="col-lg-12></div>');
	const div = $('<div class="historial" id="historial"></div>');
	const p =$('<p>'+winner+' le gano a '+loser+'en '+move+'movimientos</p>');
	const h5 = $('<h5>Comentarios</h5>');
	const div1 = $('<div id="comments"></div>');
	const p1 = $('<p>nombre dice: </p>');
	const p2 = $('<p class="comentario">commet_get API??</p>');
	const add = $('<h5>Agregar comentario</h5>');
	const p3 = $('<p>Tu nombre: <input type="text" class="name"></p>');
	const p4 = $('<p>Tu Comentario: <textarea name="comentario" id="text_comment" cols="30" rows="10"></textarea></p>');
	const btn = $('<button><a href="#">ENVIAR</a></button>');
	const response = $('<div class="response">Tu comentario ha sido enviado satisfactoriamente</div>');
	div.append(p);
	
	header.append(inicio,icon,historia);
	section.append(header);
	section.append(col);
	section.append(div);
	section.append(h5);
	section.append(div1);
	div1.append(p1,p2);
	section.append(add);
	section.append(p3,p4);
	section.append(btn);
	section.append(response);

	$.get('url', (error, json)=>{

		state.comentario = json;
	})
	


	return section;
}