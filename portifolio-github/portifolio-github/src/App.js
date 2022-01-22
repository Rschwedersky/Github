import {Repositorio} from './components/Repositorio'
import { Resumo } from './components/Resumo';
import styles from './App.module.css';
import{useState, useEffect} from 'react'


function App() {
  const [idSelecionado, setIdSelecionado] = useState(424423847);
  const[repositorios2, setRepositorios2] = useState([]);
  const [nomeDoUsoario, setNomeDoUsoario] = useState("Rschwedersky");

  
  const consultaRepos = async() => {
    try {  const url = `https://api.github.com/users/${nomeDoUsoario}/repos`
           const response = await fetch(url)
           const json = await response.json();
           setRepositorios2(json);  
    return json;
  }
  catch(error){console.log(error)}
  };

  useEffect(() => {
    consultaRepos();
  }, []);

const handleNomeUsuario = (event)=>{
  setNomeDoUsoario(event);
};


if(repositorios2.length === 0){return (<div className="App">
          <h1>Nenhum Repositorio disponivel</h1></div>) }

  return (<>
    <div className={styles.container} styles={{backgroundColor: "red"}}>
      <h1 className={styles.pageTitle}>Meu portifólio Github</h1>
      <Resumo img= 'https://github.com/Rschwedersky.png' name= "Foto-perfil"/>
      <input type="text" onChange={(event) => {
            handleNomeUsuario(event.target.value);
}}value={nomeDoUsoario} /><button type="button"onClick={consultaRepos} >Buscar</button>
      <div className={styles.containerRepositorio}>
      <Repositorio dados={repositorios2} destacar={idSelecionado} func={setIdSelecionado}/>
      </div>
    </div>
    </>
  );
}

export default App;
