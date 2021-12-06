const botao = document.getElementById('add');
const input = document.getElementById('campoCep');;
const resultado = document.getElementById('resultado');
botao.addEventListener('click', consultaCep)
let cep = '01001000';
async function consultaCep(){
       try {  const cep = input.value
              const url = `https://viacep.com.br/ws/${cep}/json`
              const response = await fetch(url)
              const json = await response.json();
              console.log(json);
              resultado.innerText = `Seu endereço é: ${json.logradouro} no Bairro ${json.bairro}`;
              
       return json;
}
catch(error){console.log(error)}
}




