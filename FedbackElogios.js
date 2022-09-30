let arrayFedbackGood = [];
let contadorFeedback = 0;

const btnRemoveFeed = document.querySelector('#btn-deletefeed');
const btnRemoveFeedAll = document.querySelector('#btn-deletefeedAll');
const fedback = document.querySelector('#contadorFedback');
const elogios = document.querySelector('#btnelogios');
elogios.addEventListener('click', function(){

    const inputTituloE = document.querySelector('#tituloE');
    const tituloE = inputTituloE.value;
    
    const inputElogio = document.querySelector('#input-elogio');
    const elogio = inputElogio.value;

    if(inputElogio =='' || inputTituloE=='' ) alert("Você precisa preencher todos os campos para adicionar um feedback");
    else{
        contadorFeedback++;
        let objetoElogio={
            titulo: tituloE,
            elogioUm : elogio
        }
    
        arrayFedbackGood.push(objetoElogio);
        console.log(arrayFedbackGood);
        fedback.innerHTML = contadorFeedback;
    }
});

btnRemoveFeed.addEventListener('click', function(){
    if(contadorFeedback <=0) alert('Não é mais possível apagar feedbacks');
    else{
        fedback.innerHTML=contadorFeedback--;
        arrayFedbackGood.pop();
    }
    
});

btnRemoveFeedAll.addEventListener('click', function(){

    if(contador<=0) confirm('Todos os elementos foram removidos');
    contador = 0
    fedback.innerHTML = contador;
    for(let i = 0; i<arrayFedbackGood.length;i++){
        arrayFedbackGood.splice(arrayFedbackGood[i]);
    }
    console.log(arrayFedbackGood);
});