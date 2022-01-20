import {Repositorio} from './components/Repositorio'
import { Resumo } from './components/Resumo';
import styles from './App.module.css';
import{useState, useEffect} from 'react'

const lista_repositorios = [{id:1, titulo:'primeiro', descricao:'descricao1'},
  {id:2, titulo:'segundo', descricao:'descricao2'},
  {id:3, titulo:'terceiro', descricao:'descricao3'},
  {id:4, titulo:'quarto', descricao:'descricao4'},
  {id:5, titulo:'quinto', descricao:'descricao5'}];


function App() {
  const[repositorios, setRepositorios] = useState(lista_repositorios);
  const [idSelecionado, setIdSelecionado] = useState(3);
  const[repositorios2, setRepositorios2] = useState([]);
  
  const consultaRepos = async() => {
    try {  const url = `https://api.github.com/users/Rschwedersky/repos`
           const response = await fetch(url)
           const json = await response.json();
           console.log(json);     
    return json;
  }
  catch(error){console.log(error)}
  };

  useEffect(() => {
    consultaRepos().then((repos) => {setRepositorios2(repos);console.log('use',repos);
   console.log(repositorios2)
  });
}, []);




if(repositorios.length === 0){return (<div className="App">
          <h1>Nenhum Repositorio disponivel</h1></div>) }

  return (<>
    <div className={styles.container} styles={{backgroundColor: "red"}}>
      <h1 className={styles.pageTitle}>Meu portifólio Github</h1>
      <Resumo img= 'https://github.com/Rschwedersky.png' name= "Foto-perfil"/>
      <div className={styles.containerRepositorio}>
      <Repositorio dados={repositorios2} destacar={idSelecionado}/>
      </div>
    </div>
    </>
  );
}

export default App;
