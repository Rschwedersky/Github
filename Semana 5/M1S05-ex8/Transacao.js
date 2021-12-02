import {Conta} from './Conta.js';
export class Transacao {
    constructor(conta, valorDaTransacao){
        if (conta instanceof Conta == false){
            throw alert('conta errado');
          }
          this.conta = conta;
          this.valorDaTransacao = valorDaTransacao
    }
    transferencia (conta){
        let saldo = this.conta.saldo;
        saldo = saldo - this.valorDaTransacao;
        conta.saldo = conta.saldo + this.valorDaTransacao;
    }
   
    deposito (){
         let saldo = this.conta.saldo;
        saldo = saldo + this.valorDaTransacao;
        this.conta.saldo = saldo;
        
        }
        
}
