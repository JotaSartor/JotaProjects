document.addEventListener("DOMContentLoaded", function() { 

    const baseImagens = {
        todas:['imagem.jpg', "cidade.jpg", "animal.jpg", "flor.3.jpg"],
        natureza: ["flor.3.jpg"],
        animal: ["animal.jpg"],
        cidade: ["cidade.jpg"],
        imagem: ["imagem.jpg"],
    }
    
        function carregaimagens(categoria){
            //selecionar elementos HMTL com base em um seletor
            const galeria = document.querySelector("#galeria-imagens");
            galeria.innerHTML = '';
    
            const imagens = baseImagens['todas'];
    
            imagens.forEach(img => {  
                console.log(img);
                galeria.innerHTML = '<div> <img src="imagens/' + img + ' " /> </div>';
            })
    
        }
    
        carregaimagens();
    
        document.body.addEventListener('click', function (event){ 
            if(event.target.classList.contains("botao-categoria")) 
                {   const categoria = event.target.dataset.categoria; // Obtém a categoria do botão clicado
                    console.log("Categoria selecionada:", categoria); // Exibe a categoria no console
                    carregaimagens(categoria); // Chama a função carregaimagens com a categoria selecionada
                    }})
 })