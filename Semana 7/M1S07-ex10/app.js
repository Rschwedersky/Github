const botao = document.getElementById('add');
const input = document.getElementById('campoCep');;
const resultado = document.getElementById('resultado');
botao.addEventListener('click', criaImagem)
let cep = '01001000';
console.log("djadj")

async function criaImagem(){
       try{
              const response = await fetch(`https://api.thecatapi.com/v1/images/search`)
              const json = await response.json();
              const [{ url }] = json;
              const img = document.createElement('img')
              img.src = url
              resultado.appendChild(img)
       }
       catch(error){console.log(error)}
}


