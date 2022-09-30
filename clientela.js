let arrayClientela=[];
let contador = 0;

const span = document.querySelector('#contador');
const btnAddCliente = document.querySelector('#btn-cliente');
const btnRemoveAll = document.querySelector('#btn-deleteAll');
const btnRemove = document.querySelector('#btn-delete');

btnAddCliente.addEventListener('click', function(){

    
    const InputnomeCliente = document.querySelector('#nome-cliente');
    const InputidadeCliente = document.querySelector('#idade-cliente');
    const InputservicoCliente = document.querySelector('#servico-solicitado');
    const InputSexo = document.querySelector('#input-sexo');
    const inputPmc = document.querySelector('#pmc');
    const InputDia = document.querySelector('#dia-semana');

    

    const nomeCliente = InputnomeCliente.value;
    const idadeCliente = InputidadeCliente.value;
    const servicoCliente = InputservicoCliente.value;
    const sexoCliente = InputSexo.value;
    const horarioCliente = inputPmc.value;
    const diaSemana = InputDia.value;

    if(nomeCliente ==''||idadeCliente == ''||servicoCliente ==''||sexoCliente==''||horarioCliente==''||diaSemana==''){
        alert('É necessário preencher todos os campos para cadastrar o cliente');
    }else{
        contador++;
        let Cliente={
            nome : nomeCliente,
            idade: idadeCliente,
            servico: servicoCliente,
            sexo: sexoCliente,
            horario: horarioCliente,
            dia: diaSemana
    
        }
      
       arrayClientela.push(Cliente);
       console.log(arrayClientela);
       span.innerHTML = contador;
    }
    
});

btnRemoveAll.addEventListener('click', function(){

    confirm("Tem certeza que deseja remover toda a clientela registrada?");

 
        contador = 0;
        span.innerHTML = contador;
        for(let i = 0; i<arrayClientela.length;i++){
            arrayClientela.splice(arrayClientela[i]);
        }
       
        console.log(arrayClientela);
    
    
});

btnRemove.addEventListener('click', function(){

    contador--;
    span.innerHTML = contador;
    arrayClientela.pop();
    console.log(arrayClientela);

});

