import {Repositorio} from './components/Repositorio'
import { Resumo } from './components/Resumo';
import styles from './App.module.css';
import{useState, useEffect} from 'react'


function App() {
  const [idSelecionado, setIdSelecionado] = useState(424423847);
  const[repositorios2, setRepositorios2] = useState([]);
  const [nomeDoUsoario, setNomeDoUsoario] = useState(3);

  
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
          }}value={nomeDoUsoario} /><button type='button'>Buscar</button>
      <div className={styles.containerRepositorio}>
      <Repositorio dados={repositorios2} destacar={idSelecionado}/>
      </div>
    </div>
    </>
  );
}

export default App;
