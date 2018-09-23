class Interfaz{
    constructor(){
        this.insertamosApi();
    }

    insertamosApi(){
        marvel.obtenerApiMarvel()
            .then(res => {
                
                document.querySelector('.bg-marvel').classList.add('disable');
                const resultados = res.data.results;
                let resultadoHtml = '';
                resultados.forEach(resultado =>{
                    const img = `${resultado.thumbnail.path}.${resultado.thumbnail.extension}`;         
                    resultadoHtml += `
                    <div class="masonry-brick masonry-brick--h">
                        <div class="masonry-div-p d-flex justify-content-center align-items-center"> 
                            <p class="masonry-p " >${resultado.name}</p> 
                        </div>		
                        <img class="masonry-img" src="${img}" alt="Card image cap">
                    </div> 
                    `;
                })
                app.innerHTML = resultadoHtml;
            })
    }
    mostrarResultados(resultados){
        this.mostrarGif();
        let resultadoHtml = '';
                resultados.forEach(resultado =>{
                    const img = `${resultado.thumbnail.path}.${resultado.thumbnail.extension}`;         
                    resultadoHtml += `
                    <div class="masonry-brick masonry-brick--h">
                        <div class="masonry-div-p d-flex justify-content-center align-items-center"> 
                            <p class="masonry-p " >${resultado.name}</p> 
                        </div>		
                        <img class="masonry-img" src="${img}" alt="Card image cap">
                    </div> 
                    `;
                })
                setTimeout(()=>{
                    
                app.innerHTML = resultadoHtml;
                document.querySelector('.bg-marvel').classList.add('disable');

                },3000)    
    }

    mostrarGif(){
        document.querySelector('.bg-marvel').classList.remove('disable');
    }
}