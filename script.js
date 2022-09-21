
let arrayFedback = [];


const reclamacoes = document.querySelector('#btnreclamacoes');
reclamacoes.addEventListener('click', function(){
    
    const inputReclamacao = document.querySelector('#input-reclamacao');
    const reclamacao = inputReclamacao.value;

    arrayFedback.push(reclamacao);
    console.log(arrayFedback);
});



