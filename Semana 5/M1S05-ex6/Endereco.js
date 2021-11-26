export class Endereco {
    constructor(logradouro, numero, cidade, estado, pais, cep) {
     let array = new Array (logradouro, numero, cidade, estado, pais, cep);
     let testecep = /^[0-9]{5}-[0-9]{3}$/.test(cep); 
     if(array.some(item => typeof(item)!= 'string')){  
        throw alert('endereço errado');
      }
      if(!testecep){  
       throw alert('cep errado');
      }
      this.logradouro = logradouro;
      this.numero = numero;
      this.cidade = cidade;
      this.estado = estado;
      this.pais = pais;
      this.cep = cep;
    }

    }