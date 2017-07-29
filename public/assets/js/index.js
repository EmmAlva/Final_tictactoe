'use strict';

const render = (root) => {
	root.empty();
	const wrapper = $('<div class="wrapper" ></div>');

	wrapper.append(Inicio(_=>render(root)));
	if(state.nextpage !== null){
		wrapper.append(Players(_=>render(root)));
	}
	root.append(wrapper);
}


const state = {
	nextpage : null,
	data: null,
	id: null, 
	comentario: null
}

$( _ => {
	const root = $('#root');
	render (root);
})


