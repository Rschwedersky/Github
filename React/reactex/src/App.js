import logo from './logo.svg';
import './App.css';
import { useReducer } from 'react';

const initialState = {date:[]};

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {date:[...state, new Date()]}
      
    case 'decrement':
      return state.slice(0,-1);
    default:
      throw new Error();
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  return (
    <>
      <h1>Lista de Datas</h1>
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
      <ul>
      {state.date.map((item,index) => console.log(item))}
      </ul>
    </>
  );
}

export default App;
