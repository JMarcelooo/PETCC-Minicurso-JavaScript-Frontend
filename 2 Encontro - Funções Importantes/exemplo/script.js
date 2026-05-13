const form = document.querySelector('#meuFormulario')
const button = document.querySelector('button')


form.addEventListener('submit', (e) => {
    e.preventDefault();

    const dados = new FormData(form);
    const valores = Object.fromEntries(dados.entries());

    alert("Dados enviados com sucesso!\n" + JSON.stringify(valores, null, 2));
    
    console.log(valores); 
});
