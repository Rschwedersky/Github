const botao = document.getElementById('add');
const input = document.getElementById('campoCep');;
const resultado = document.getElementById('resultado');

botao.addEventListener('click', criaImagem)

function criaImagem(){
       
       fetch(`https://api.thecatapi.com/v1/images/search`)
       .then(response => response.json())
       .then(objeto => {const [{ url }] = objeto; console.log(objeto); console.log(url);
       const img = document.createElement('img')
       img.src = url
       resultado.appendChild(img)
})
        .catch(erro => console.log('CATCH: ' + erro))
       const img = document.createElement('img')
       img.src = url
       pTela.appendChild(img)
}
 




