'use strict';

const Inicio = () =>{
	const section = $('<section class="start"></section>');
	const container = $('<div class="contenedor"></div>');
	const div = $('<div class="intro"></div>');
	const h1 = $('<h1>Bienvenido a Gato Loco!</h1>');
	const btn = $('<button class="btn btn_color" id="iniciar">Iniciar Juego</button>');

	section.append(container);
	container.append(div);
	div.append(h1);
	div.append(btn);

	btn.on('click', (e) => {
		e.preventDefault();
		$('section').replaceWith(Players());
	})

	return section;
}