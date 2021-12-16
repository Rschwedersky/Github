import {Repositorio} from './components/Repositorio'
import { Resumo } from './components';
import styles from './App.module.css';

function App() {
  const lista_repositorios = [{id:1, titulo:'primeiro', descricao:'descricao1'},
  {id:2, titulo:'segundo', descricao:'descricao2'},
  {id:3, titulo:'terceiro', descricao:'descricao3'},
  {id:4, titulo:'quarto', descricao:'descricao4'},
  {id:5, titulo:'quinto', descricao:'descricao5'}];
if(lista_repositorios.length === 0){return (<div className="App">
<h1>Nenhum Repositorio disponivel</h1></div>) }
 
  return (
    <div className="App">
      <h1>Meu portifólio Github</h1>
      <Resumo img= 'https://github.com/Rschwedersky.png' name= "Foto-perfil"/>
      <Repositorio dados={lista_repositorios} destacar={false}/>
    </div>
  );
}

export default App;
