
import {Endereco} from './Endereco.js';
import {Cliente} from './cliente.js';
import {Conta} from './Conta.js';

/* let end = new Endereco('logradouro', 'numero', 'cidade', 'estado', 'pais', '12345-123')

let cliente = new Cliente ('nome', 'cpf','celular', end);
console.log(cliente.endereco.cidade)
let conta = new Conta ('12312', 2, cliente);
console.log(conta.saldo); */


const formCliente = document.querySelector('#formulario-cliente')
const listaClientes = document.querySelector('#lista-cliente')

const historico = []

function registrarNovoCliente(evento) {
    evento.preventDefault() //previne o comportamento default do objeto

    const dadosDoForm = new FormData(evento.target)

    const nome = dadosDoForm.get('nome')
    const logradouro = dadosDoForm.get('logradouro')
    const numero = dadosDoForm.get('numero')
    const cidade = dadosDoForm.get('cidade')
    const estado = dadosDoForm.get('estado')
    const pais = dadosDoForm.get('pais')
    const cep = dadosDoForm.get('cep')
    const numeroDoCelular = dadosDoForm.get('telefone')
    const cpf = dadosDoForm.get('cpf')

    const endereco = new Endereco (logradouro, numero, cidade, estado, pais, cep)
    const cliente = new Cliente (nome, cpf, numeroDoCelular,endereco)
    cliente.nome = nome
    cliente.cpf = cpf
    cliente.endereco = endereco

    historico.push(cliente)

    console.log('HISTORICO', cliente.resumo())

    evento.target.reset()
    atualizarTela()
}

function atualizarTela() {
    listaClientes.innerHTML = ''

    for (let cliente of historico) {
        const item = document.createElement('li')

        item.innerText = `
      Nome: ${cliente.nome}
      CPF: ${cliente.cpf}
      Endereço: ${cliente.endereco.logradouro}
    `

        listaClientes.appendChild(item)
    }
}

formCliente.addEventListener('submit', registrarNovoCliente)

document.querySelector('#t-btn-limpar').addEventListener('click', () => {
    formCliente.reset()

    for (let i = historico.length; i > 0; i--) {
        historico.pop()
    }

    atualizarTela()
})
