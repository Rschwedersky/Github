import {Conta} from './Conta.js';
export class Transacao extends Conta {
    constructor(conta, valorDaTransacao){
        if (conta instanceof Conta == false){
            throw alert('conta errado');
          }
          this.valorDaTransacao = valorDaTransacao
    }
    transferencia (conta, this.valorDaTransacao){
        this.conta.saldo= --this.valorDaTransacao
        conta.saldo= ++this.valorDaTransacao
    }
   
    deposito (this.valorDaTransacao){
        
    }
}

contatual.transacao.transferencia(conta recebe, valor)