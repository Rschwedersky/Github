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
          this.date = new Date();
          
    }
    executarTransacao(){
        if(this.contaTransferencia != null){this.transferencia()}
        else this.deposito()
    }

    transferencia (){
        let saldo = this.conta.saldo;
        if(this.valorDaTransacao >300) {throw alert('excedeu o valor da transação')}
        saldo = saldo - this.valorDaTransacao;
        this.contaTransferencia.saldo = this.contaTransferencia.saldo + this.valorDaTransacao;
    }
   
    deposito (){
        let saldo = this.conta.saldo;
        if(this.valorDaTransacao >300) {throw alert('excedeu o valor da transação')}
        saldo = saldo + this.valorDaTransacao;
        this.conta.saldo = saldo;
        
        }
        
}
