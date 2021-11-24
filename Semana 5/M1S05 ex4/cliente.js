import { Endereco } from './Endereco.js';

export class Cliente extends Endereco {

    constructor(logradouro, numero, cidade, estado, pais, cep, nome, cpf, numeroDoCelular){
      
     let endereco = super(logradouro, numero, cidade, estado, pais, cep);
      console.log( endereco instanceof Endereco)
      if (endereco instanceof Endereco == false){
        throw alert('endereço errado');
      }
      //this.endereco = endereco;
      this.nome = nome;
      this.cpf = cpf;
      this.numeroDoCelular = numeroDoCelular;
    }
}