//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. 
// Aqui você deverá desenvolver a lógica para resolver o problema.
// ------------------------------------------------------------------------------------------------

//############  Variáveis   ################
let listaAmigos = [] // array para armazenar os nomes dos amigos
let inputAmigo = document.getElementById('amigo'); // variável para receber o nome do amigo no input
let elementoListaLi = document.getElementById('listaAmigos'); // variável para receber o array
let listaHtmlDosAmigos = '' // variável para criar o item li com os amigos
let nomeHtmlDoAmigo = '' // variável para criar o item li com o amigo sorteado
let indiceAleatorio = ''; // variável para o índice aleatório
let amigoSorteado = ''; // variável do amigo sorteado


//##########  Funções do sistema ###########
// Função para agregar amigos
function adicionarAmigos(){
    if(inputAmigo.value ==''){
        alert('Por favor, insira um nome e clique no botão "Adicionar" !!!')
    } else {
        listaAmigos.push(inputAmigo.value);
        atualizaListaAmigos();
        inputAmigo.value = '';
        inputAmigo.focus();
    }
}

// Função para atualizar a lista de amigos no elemento li do ul
function atualizaListaAmigos(){ 
    for (let i = (listaAmigos.length -1); i < listaAmigos.length; i++) { // pega o próximo nome para acrescentar no <li>
        listaHtmlDosAmigos += "<li>" + listaAmigos[i] + "</li>";
        document.getElementById('listaAmigos').innerHTML = listaHtmlDosAmigos;
    }
}

// Função para sortear um amigo
function sortearAmigo(){
    if (listaAmigos.length < 4){
        alert('É necessário um mínimo de quatro nomes para realizar o sorteio!!!')
    } else {
        indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
        amigoSorteado = listaAmigos[indiceAleatorio];
        nomeHtmlDoAmigo += "<li>" + 'O amigo sorteado é: ' + amigoSorteado + "</li>";
        document.getElementById('resultado').innerHTML = nomeHtmlDoAmigo;
        inputAmigo.focus();
    }
}














/* 

//############  Variáveis   ################

let listaDeAmigos = [];



//##################      Funções do sistema    #############


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

    // Limpa a lista antes de adicionar novos elementos.
    listaDeAmigos.innerHTML = '';

    // Cria um novo item para a lista ul.
    let novoItem = document.createElement("li");  
    
    // Define o conteúdo do novo item.
    let posicaoItem = listaDeAmigos.length -1; // pego a posição do nome dentro do array.
    novoItem.textContent = listaDeAmigos[posicaoItem]; // adiciono o valor.

    // Adiciona o novo item à lista ul. 
    listaUlDeAmigos.appendChild(novoItem);
}

*/


 

