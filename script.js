const campoInput = document.getElementById('nome-input')
const labelNome = document.getElementById('cartao-nome')

campoInput.addEventListener('input' , () => {
labelNome.innerText = campoInput.value;

});

const cartaoCor = document.getElementById('cartao')
const btnAzul = document.getElementById('btn-azul')
const btnVerde = document.getElementById('btn-verde')


btnAzul.addEventListener('click' , () => {
    cartaoCor.classList.remove('fundo-verde')
    cartaoCor.classList.add('fundo-azul')
});
btnVerde.addEventListener('click' , () => {
    cartaoCor.classList.remove('fundo-azul')
    cartaoCor.classList.add('fundo-verde')
});


const botaoFonte = document.getElementById('btn-fonte')
 

botaoFonte.addEventListener('click' , () => {
    cartaoCor.classList.toggle('fonte-alternativa')
});

const imagem = document.getElementById('imagem-select')
const cartaoImg = document.getElementById('cartao-img')


imagem.addEventListener('change', () => {
    cartaoImg.src = imagem.value
})


const input2 = document.getElementById('habilidade-input')
const ul = document.getElementById('lista-habilidades')
const botao2 = document.getElementById('btn-adicionar')


botao2.addEventListener('click' , () => {
    const novoLi = document.createElement('li');

    novoLi.textContent = input2.value;
    ul.appendChild(novoLi)


});



