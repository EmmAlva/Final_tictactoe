'use strict';

const render = (root) => {
	root.empty();
	const wrapper = $('<div class="wrapper" ></div>');

	wrapper.append(Inicio(_=>render(root)));
	if(state.nextpage !== null){
		wrapper.append(Players(_=>render(root)));
	}
	/*if(state.nextpage == 2){
		wrapper.append(Players(_=>render(root)));
	}
	if(state.nextpage == 3){
		wrapper.append(Play(name1,name2,(_=>render(root))));
	}
	if(state.nextpage == 4){
		wrapper.append(History(_=>render(root)));
	}
	if(state.nextpage == 5){
		wrapper.append(Comments(_=>render(root)));
	}*/

	root.append(wrapper);
}


const state = {
	nextpage : null,
	comentario: null
}

$( _ => {
	const root = $('#root');
	render (root);
})


