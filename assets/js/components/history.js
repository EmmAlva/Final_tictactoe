'use strict';

const History = (winner, loser, move) =>{
	const section = $('<section >dfghj</section>');
	const col = $('<div class="col-lg-12"></div>');
	const h1 = $('<h1>Historial<h1>');
	const div = $('<div class ="historial" id=" historial"></div>');
	const p = $('<p>'+winner+' le gano a '+loser+'en '+move+'</p>');
	const span = $('<span><a href="#">Comentar</a></span>');

	section.append(col);
	section.append(div);
	div.append(p,span);

	span.on('click', (e)=>{
		e.preventDefault();
		/*state.nextpage = 5;
		update();*/
		$('section').replaceWith(Comments());
	});

	return section;
}