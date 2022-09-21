
let arrayFedbackBad = [];


const reclamacoes = document.querySelector('#btnreclamacoes');
reclamacoes.addEventListener('click', function(){

    const inputTituloR = document.querySelector('#title-R');
    const tituloR = inputTituloR.value;
    
    const inputReclamacao = document.querySelector('#input-reclamacao');
    const reclamacao = inputReclamacao.value;

    let objetoReclamacao={
        titulo: tituloR,
        reclamacao : reclamacao
    }

    arrayFedbackBad.push(objetoReclamacao);
    console.log(arrayFedbackBad);
});



