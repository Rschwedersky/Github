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
      if (Cliente.validaCPF(cpf)==false){
        throw alert ('cpf invalido');
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
    static validaCPF(strCPF){
      let Soma;
      let Resto;
      Soma = 0;
    if (strCPF == "00000000000") return false;
  
    for (let i=1; i<=9; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
    Resto = (Soma * 10) % 11;
  
      if ((Resto == 10) || (Resto == 11))  Resto = 0;
      if (Resto != parseInt(strCPF.substring(9, 10)) ) return false;
  
    Soma = 0;
      for (let i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
      Resto = (Soma * 10) % 11;
  
      if ((Resto == 10) || (Resto == 11))  Resto = 0;
      if (Resto != parseInt(strCPF.substring(10, 11) ) ) return false;
      return true;
    }
}