let arrayFedbackGood = [];


const elogios = document.querySelector('#btnelogios');
elogios.addEventListener('click', function(){

    const inputTituloE = document.querySelector('#tituloE');
    const tituloE = inputTituloE.value;
    
    const inputElogio = document.querySelector('#input-elogio');
    const elogio = inputElogio.value;

    let objetoElogio={
        titulo: tituloE,
        elogioUm : elogio
    }

    arrayFedbackGood.push(objetoElogio);
    console.log(arrayFedbackGood);
});