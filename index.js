const btn = document.querySelector('#btn');

btn.addEventListener('click', function(){

    const inputTitle = document.querySelector('#titulo');
    const title = inputTitle.value;

    const inputName = document.querySelector('#inputName');
    const nome = inputName.value;

    const inputFunction = document.querySelector('#inputFunction');
    const funcao = inputFunction.value;

    const inputTime = document.querySelector('#inputTime');
    const time = inputTime.value;

    const inputTimeB = document.querySelector('#inputTime2');
    const timeB = inputTimeB.value;

    const inputDia = document.querySelector('#data');
    const dia = inputDia.value;



    let arrayPanfletos = pegarPanfletos();
    let media = mediaPanfletosDias(arrayPanfletos);
    let soma = somaPanfletos(arrayPanfletos);

    console.log("A média de panfletos entregues diariamente é: "+media)
    console.log("Você distribuiu um total de "+ soma +" de panfletos nesta semana");
    console.log("A quantidade de clientes cadastrados foram de: "+quantCliente)
    console.log(dia);

});

function pegarPanfletos(){
    const inputSegunda = document.querySelector('#segunda');
    const inputTerca = document.querySelector('#terca');
    const inputQuarta = document.querySelector('#quarta');
    const inputQuinta = document.querySelector('#quinta');
    const inputSexta = document.querySelector('#sexta');
    const inputSabado = document.querySelector('#sabado');

    const segunda = Number(inputSegunda.value);
    const terca = Number(inputTerca.value);
    const quarta = Number(inputQuarta.value);
    const quinta = Number(inputQuinta.value);
    const sexta = Number(inputSexta.value);
    const sabado = Number(inputSabado.value);

    const arrayPanfletos = [segunda, terca, quarta, quinta, sexta, sabado];

    return arrayPanfletos;
    
}

function mediaPanfletosDias(array){
    let soma=0;
    let dias = array.length;
    let media;

    for(let i = 0; i<array.length; i++){
        soma = soma + array[i];
    }
    media = soma/dias;

    return media;
}

function somaPanfletos(arrays){
    let soma=0;

    for(let i = 0; i<arrays.length; i++) soma = soma + arrays[i];

    return soma;
}








