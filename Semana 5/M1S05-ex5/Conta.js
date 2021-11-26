import { Cliente } from './cliente.js';

export class Conta {
    constructor(numeroDaConta, saldo, cliente){
        if (cliente instanceof Cliente == false){
            throw alert('cliente errado');
          }
        if(isNaN(saldo)){  
            throw alert('saldo errado');
          }
        if(typeof(numeroDaConta)!= 'string'){  
            throw alert('numero da conta errado');
          }
    this.numeroDaConta = numeroDaConta;
    this.saldo = saldo;
    }
}