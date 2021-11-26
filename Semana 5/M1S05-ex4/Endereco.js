export class Endereco {
    constructor(logradouro, numero, cidade, estado, pais, cep) {
     let array = new Array (logradouro, numero, cidade, estado, pais, cep);
      if(array.some(item => typeof(item)!= 'string')){  
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