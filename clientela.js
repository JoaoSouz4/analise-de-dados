let arrayClientela=[];
let quantCliente;
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
       quantCliente = arrayClientela.length;
       encontrarMaiorServico(arrayClientela);
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

function encontrarMaiorServico(array){
   let arrayServicos = {
    avaliacao:0,
    manutencao:0,
    limpeza: 0, 
    extração :0, 
    canal:0, 
    restauracao:0,
    implante: 0, 
    enxerto:0,
    odontopediatria:0,
    outro:0
   }
    array.forEach(object =>{
        if(object.servico === "Avaliação") arrayServicos.avaliacao++
        else if(object.servico ==="Manutenção") arrayServicos.manutencao++
        else if(object.servico ==="Limpeza") arrayServicos.limpeza++
        else if(object.servico ==="Clareamento") arrayServicos.clareamento++
        else if(object.servico ==="Extração") arrayServicos.extração++
        else if(object.servico ==="Canal") arrayServicos.canal++
        else if(object.servico ==="Restauração") arrayServicos.restauracao++
        else if(object.servico ==="Implante") arrayServicos.implante++
        else if(object.servico ==="Enxerto") arrayServicos.enxerto++
        else if(object.servico ==="Odontopediatria") arrayServicos.odontopediatria++
        else if(object.servico ==="Outro") arrayServicos.outro++
    });
    console.log(arrayServicos.avaliacao);
}


