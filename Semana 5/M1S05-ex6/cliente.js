import { Endereco } from './Endereco.js';

export class Cliente {

    constructor(nome, cpf, numeroDoCelular,endereco){
      let array = new Array (nome, cpf, numeroDoCelular);
      if(array.some(item => typeof(item)!= 'string')){  
        throw alert('endereço errado');
      }
      if (endereco instanceof Endereco == false){
        throw alert('endereço errado');
      }
      this.endereco = endereco;
      this.nome = nome;
      this.cpf = cpf;
      this.numeroDoCelular = numeroDoCelular;
    }
    resumo() {
      return `${this.nome} 
      possui o CPF nr ${this.cpf},reside no endereço ${this.endereco.logradouro}, 
      o seu celular é ${this.numeroDoCelular}`
  }
}