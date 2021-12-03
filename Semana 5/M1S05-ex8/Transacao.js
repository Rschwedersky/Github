import {Conta} from './Conta.js';
export class Transacao {
    static Id = 0;
    constructor(conta, valorDaTransacao, contaTransferencia,){
        if (conta instanceof Conta == false){
            throw alert('conta errado');
          }
          this.contaTransferencia = contaTransferencia;
          this.idDeTransacao = Transacao.Id++;
          this.conta = conta;
          this.valorDaTransacao = valorDaTransacao;
          
    }
  
    transferencia (){
        let saldo = this.conta.saldo;
        saldo = saldo - this.valorDaTransacao;
        this.contaTransferencia.saldo = this.contaTransferencia.saldo + this.valorDaTransacao;
    }
   
    deposito (){
         let saldo = this.conta.saldo;
        saldo = saldo + this.valorDaTransacao;
        this.conta.saldo = saldo;
        
        }
        
}
