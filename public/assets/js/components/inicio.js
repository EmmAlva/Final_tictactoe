'use strict';

const Inicio = () =>{
	const section = $('<section class="cabecera"></section>');
	const header = $('<header class="cabecera"></header>');
	const inicio = $('<span>Inicio</span>');
	const icon = $('<span>|</span>');
	const historia = $('<span>Historia</span>');
	const col = $('<div class="col-lg-12></div>');
	const h1 = $('<h1>Bienvenido a Gato Loco!</h1>');
	const btn = $('<button><a href="players.html" id ="iniciar">Iniciar Juego</a></button>');

	header.append(inicio,icon,historia);
	section.append(header);
	section.append(h1);
	section.append(btn);

	btn.on('click', (e) => {
		e.preventDefault();
		$('section').replaceWith(Players());
		
	})

	return section;


}