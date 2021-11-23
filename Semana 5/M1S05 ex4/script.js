class Endereco {
  error
  constructor(logradouro, numero, cidade, estado, pais, cep) {
    if (typeof(logradouro&& numero&& cidade&& estado&& pais&& cep)!= 'string'){
      throw alert('endereço errado');
    }
    this.logradouro = logradouro;
    this.numero = numero;
    this.cidade = cidade;
    this.estado = estado;
    this.pais = pais;
    this.cep = cep;
    
  }
}
let retangulos = new Array();
for (let i = 0; i < 3; i++){
  retangulos[i]=new Endereco('adash', 'whahd','adash','adash',i,'adash');
  console.log(retangulos[i]);
}
