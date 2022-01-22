
import './App.css';
import { AuthProvider} from './contexts/auth';
import { Tema } from './components/Tema';
import { Layout } from './components/Layout';




function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {date:[...state.date, (new Date().toLocaleString())]}
      
    case 'decrement':
      return  {date:[...state.date].slice(0,-1)}
    default:
      throw new Error();
  }
}

function App() {

  
  return (
    <>
      <h1>Lista de Datas</h1>
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
      <ul>
      {state.date.map((item,index) => <li key={index}>{item}</li>)}
      </ul>
    <AuthProvider>
      <>
      <Tema/>
      <Layout/>
    

    </>
      
    </AuthProvider>
    

  );
}

export default App;
