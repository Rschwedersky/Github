
import { Repositorio, Resumo } from './components';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Olá, portfolio!</h1>
      <Resumo img= 'https://github.com/Rschwedersky.png' name= "Foto-perfil"/>
      <Repositorio/>
    </div>
  );
}

export default App;
