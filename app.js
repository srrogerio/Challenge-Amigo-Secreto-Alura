//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

/*
############  Variáveis globais   ################
*/
let listaDeAmigos = [];


/*
##################      Funções do sistema    #############
*/

// Função para limpar o input
function limparInput(){
    document.getElementById('amigo').value = '';
    console.log(listaDeAmigos);
    document.getElementById('amigo').focus();
}

//Função para adicionar amigos na lista
function adicionarAmigos(){ // Validando a entrada de nome
    if (document.getElementById('amigo').value == ''){
        alert('Digite o nome do amigo e clique no botão "Adicionar')
        document.getElementById('amigo').focus();
    } else {
        listaDeAmigos.push(document.getElementById('amigo').value);
        exibirAmigos();
        limparInput();
    } 
}

// Função para exibir a lista de amigos na tela
function exibirAmigos(){  

    // Obtém a referência para a lista ul existente.
    let listaUlDeAmigos = document.getElementById('listaAmigos'); 

    // Cria um novo item para a lista ul.
    let novoItem = document.createElement("li");  
    
    // Define o conteúdo do novo item.
    let posicaoItem = listaDeAmigos.length -1; // pego a posição do nome dentro do array.
    novoItem.textContent = listaDeAmigos[posicaoItem]; // adiciono o valor.

    // Adiciona o novo item à lista ul. 
    listaUlDeAmigos.appendChild(novoItem);
}



 

