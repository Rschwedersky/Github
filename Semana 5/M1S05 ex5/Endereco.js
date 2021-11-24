export class Endereco {
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