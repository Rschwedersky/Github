const botao = document.getElementById('add');
const input = document.getElementById('campoCep');;
const resultado = document.getElementById('resultado');
botao.addEventListener('click', consultaCep)
let cep = '01001000';
console.log("djadj")
async function consultaCep(){
       try {  const cep = input.value
              const url = `https://api.punkapi.com/v2/beers?page=2&per_page=80`
              const response = await fetch(url)
              const json = await response.json();
              console.log(json);
              resultado.innerText = `Seu endereço é: ${json.logradouro} no Bairro ${json.bairro}`;
              
       return json;
}
catch(error){console.log(error)}
}
fetch(`https://api.punkapi.com/v2/beers?page=5&per_page=80`)
 .then(response => response.json())
 .then(objeto => console.log(objeto))
 .catch(erro => console.log('CATCH: ' + erro))
 




