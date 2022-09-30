let arrayReclamacao = [];
let contadordeReclamacao = 0;

const btnR = document.querySelector('#btnR');
const btnRemoveR = document.querySelector('#btn-deleteRecl');
const btnRemoveRAll = document.querySelector('#btn-deleteReclAll');
const CR = document.querySelector('#CR');


btnR.addEventListener('click', function(){
    const InputRegistroR = document.querySelector('#date-R');
    const registroR = InputRegistroR.value;
    const InputTimeR = document.querySelector('#time-R');
    const timeR = InputTimeR.value;
    const inputTituloR = document.querySelector('#title-R');
    const tituloR = inputTituloR.value;

    const inputDescricaoR = document.querySelector('#input-reclamacao');
    const descricaoR = inputDescricaoR.value;

    if(inputDescricaoR == '' || inputTituloR == '') alert("Erro | Verifique se todos os campos foram preenchidos");
    else{
        contadordeReclamacao++;
        let ObjetoReclamacao={
            titulo: tituloR,
            descricao : descricaoR,
            registro: registroR,
            horas: timeR
        }

        arrayReclamacao.push(ObjetoReclamacao);
        console.log(arrayReclamacao);
        CR.innerHTML = contadordeReclamacao;
    }
});

btnRemoveR.addEventListener('click', function(){
    if(contadordeReclamacao<=0) alert('ERRO | Não é mais possível remover reclamações da lista');
    else{
        contadordeReclamacao--;
        CR.innerHTML = contadordeReclamacao;
        arrayReclamacao.pop();
        console.log(arrayReclamacao);
    }
});

btnRemoveRAll.addEventListener('click', function(){
    if(contadordeReclamacao<=0) confirm('Todos os elementos foram removidos')
    else{
            contadordeReclamacao=0;
            CR.innerHTML = contadordeReclamacao;
        for(let i = 0; i<arrayReclamacao.length;i++){
            arrayReclamacao.splice(arrayReclamacao[i]);
        }
        console.log(arrayReclamacao);
    }
});

