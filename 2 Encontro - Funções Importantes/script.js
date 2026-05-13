//1 - Document - Usado para selecionar elementos específicos do documento HTML e manipulá-lo no código

/*Seleciona um elemento com uma característica passada no parâmetro
 -IDs: #titulo
 -Classes: .titulo
 -Tags: h1

 Retorna o primeiro elemento encontrado com essa característica de cima para baixo.
*/

const titulo = document.querySelector('h1')

/*Seleciona todos os elementos com uma característica passada no parâmetro:

-IDs: #titulo
-Classes: .titulo
-Tags: h1

Retorna uma lista com todos os elementos encontrados com essa característica.
*/

const titulo = document.querySelectorAll('h1')

//Para alterarmos os elementos precisamos acessar os indíces das listas, podemos fazer isso com o For ou ForEach

for(let index=0; index<titulo.length; index++){
    titulo[index].innerHTML = "olá mundo"
    }
   
titulo.forEach(items => items.innerHTML = 'Olá, mundo');
  
  
//Seleciona o primeiro elemento de um ID específico, retorna apenas um elemento

const titulo = document.getElementById("titulo")

//2 - SetTimeOut() e SetInterval() - São funções que executam outras funções depois de um certo tempo

//Executa uma função depois de um certo tempo, apenas a executa uma vez.

//O tempo informado é em milissegundos, ou seja 1 segundo seriam 1000ms.

setTimeout(() => {
    alert("Olá, mundo!")
},2000)

//Executa uma função depois de um certo tempo, executa sempre que passa um certo intervalo

setInterval(() => {
    alert("Olá, mundo!")
},2000)

//3 - textContent e innerHTML - Usados para alterar o conteúdo de um elemento HTML

//Altera apenas o texto do elemento
const titulo = document.getElementById('titulo')
titulo.textContent = "aaaa";

//Altera o HTML do elemento, podendo adicionar elementos novos, por exemplo.
const div = document.querySelector('.container')
div.innerHTML = "<button id='btn'>Clique aqui!</button>"


//4 - addEventListener() - Monitora um elemento esperando uma ação e executa uma parte do código quando isso acontece
/*
    4.1 - Eventos escutados pela função:
        4.1.1 - Eventos de Mouse
            - click: Aciona quando clica no elemento
            - dblclick: Aciona com um clique duplo
            - mouseenter / mouseleave: Aciona quando o mouse entra e sai do elemento, respectivamente
            - mousemove: Aciona quando o mouse é movido dentro do elemento
        4.1.2 - Eventos de teclado
            - keydown: Quando pressionar uma tecla
            - keyup: Quando soltar a tecla
        4.1.3 - Eventos de formulário
            - submit: Quando o formulário é enviado
            - input: quando o valor de um <input>, <textarea> ou <select> muda
            - change: Dispara quando o usuário retira o foco do campo de texto
            - focus / blur: Quando o campo ganha ou perde o foco

*/

//Nesse caso estamos fazendo a função esperar um click no botão, quando isso acontece ele executa a ArrowFunction
const btn = document.querySelector('#btn')

btn.addEventListener('click', () => {
    alert("PETCCUERN")
})


// 5 - Fetch - Utilizado para fazer a aplicação se comunicar com o exterior, através de APIs, por exemplo.

//Nesse caso estamos puxando dados de uma API fícticia e printando eles no console.


fetch('https://api.exemplo.com/dados')
  .then(resposta => resposta.json()) 
  .then(dados => console.log(dados))  
  .catch(erro => console.error('Ih, deu erro:', erro)); 

  const formulario = document.querySelector('form');



// 6 - FormData: Empacota os dados do formulário em um só objeto.

const formulario = document.querySelector('form')


//Nesse caso o objeto está "empacotando" todos os dados na variável 'dados'
formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    const dados = new FormData(formulario);
    const valores = Object.fromEntries(dados.entries());
    
    alert(valores); 
});