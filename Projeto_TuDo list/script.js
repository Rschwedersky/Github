document.addEventListener('DOMContentLoaded', loadList)
document.getElementById("add").addEventListener('click', criaItem)
const tarefa = document.getElementById("tarefa")
const listaUl = document.getElementById('lista')
let tudoLista = new Array;
let tudoListaStorage = localStorage.getItem('tudoLista')

function loadList(){
  if (tudoListaStorage){
    let atualizaLista = JSON.parse(localStorage.getItem('tudoLista'));
      for(var i = 0; i < atualizaLista.length; i++) {
        let item = atualizaLista[i];
        const novoElemento = document.createElement('li')
        novoElemento.id = `item-${item.id}`
        novoElemento.innerHTML = `
          <input
          type="checkbox"
          ${item.feito ? 'checked=""' : ''}
          name="chk-${item.id}"
          onclick="marcaFeito(${item.id})"
          >
          <h3 id="chk-${item.id}"${item.feito ? 'class="feito"' : ''}>
          ${item.titulo}
          </h3>
          <button onclick="removeItem(${item.id})">
          &times;
          </button>
          `
       listaUl.appendChild(novoElemento);
       tudoLista.push(item);            
}}}

function criaItem(){
  if (tarefa.value.length > 0) {
   const item = {
      id: tudoLista.length,
      titulo: tarefa.value,
      feito: false
  }  
  const novoElemento = document.createElement('li')
  novoElemento.id = `item-${item.id}`
  novoElemento.innerHTML = `
    <input
    type="checkbox"
    name="chk-${item.id}"
    onclick="marcaFeito(${item.id})"
    >
    <h3 id="chk-${item.id}">
     ${item.titulo}
    </h3>
    <button onclick="removeItem(${item.id})">
     &times;
    </button>
    `
  listaUl.appendChild(novoElemento);
  tudoLista.push(item);
  const listaJSON = JSON.stringify(tudoLista);
  localStorage.setItem('tudoLista', listaJSON);
  tarefa.value=""
  } 
  else {
    tarefa.className = "errado"
  }
}

function removeItem(index) {
  if (confirm('Tem certeza que deseja excluir?')) {
  const novaLista = []
  const itemParaRemocao = document.getElementById(`item-${index}`)
  listaUl.removeChild(itemParaRemocao)
  for (let i = 0; i < tudoLista.length; i++) {
    if (i !== index && i<index) {
      novaLista.push(tudoLista[i])
      }
      else if (i >index){
          let item = tudoLista[i]
          item.id= item.id -1
          novaLista.push(tudoLista[i])
      }
    }
    tudoLista = novaLista
    const listaJSON = JSON.stringify(tudoLista);
    localStorage.setItem('tudoLista', listaJSON);
    document.location.reload(); //nao sei porque nao esta removendo o mesmo indice sem o reload
}}
function marcaFeito(index) {
    // verifica se existe esse índice na lista
    if (tudoLista[index]) {
      // pega item da lista
      const item = tudoLista[index]
      item.feito = !(item.feito)
      const elemento = document.getElementById(`chk-${item.id}`)
      elemento.className = item.feito ? 'feito' : ''
      tudoLista[index]= item
      const listaJSON = JSON.stringify(tudoLista);
       localStorage.setItem('tudoLista', listaJSON);
      
    }
  }
  