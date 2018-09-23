
document.querySelector('.bg-marvel').classList.remove('disable');

// Instancias ambas clases
const marvel = new Marvel();
const ui = new Interfaz();

const buttonForm = document.getElementById('search');

buttonForm.addEventListener('click', (e) =>{
	e.preventDefault;
	const inputSearch = document.getElementById('input-search');
	const inputSearchValue = inputSearch.value;

	if(inputSearchValue.length < 1){
		return inputSearch.focus();
	}else{
		marvel.obtenerResultadoBusqueda(inputSearchValue)
		.then(res =>{
			const resultados = res.data.results;
			
			ui.mostrarResultados(resultados);
			
		})
	}

})
