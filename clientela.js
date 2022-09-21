let arrayClientela=[];

const painelClientes = document.querySelector("#painel-cliente");

const btnAddCliente = document.querySelector('#btn-cliente');
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
       
    }
    
});

