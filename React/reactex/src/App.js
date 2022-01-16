import logo from './logo.svg';
import './App.css';
import { useReducer, useState } from 'react';


const initialState = { result:0};
const reducer = (state, { type, payload }) => {
  console.log('reducer',type);
  switch (type) {
    case 'add':
      return { result: state.result + payload.valor };
    case 'sub':
      return { result: state.result - payload.valor };
    case 'mult':
      return { result: state.result * payload.valor };
    case 'div':
      return { result: state.result / payload.valor };
    default:
      return state;
  }
};


function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [inputNumero, setInputNumero] = useState();
  const [inputOperacao, setInputOperacao] = useState('add');

  
  return (
    <>
      
      <label style={{ paddingBottom: '10px' }}>
          Numero:
          <input type="number" value={state?.valor} onChange={(e) => setInputNumero(parseInt(e.target.value))} />
        </label>
        <label style={{ paddingBottom: '10px' }}>
          Operação:
          <select value={state?.type} onChange={(e) => {setInputOperacao(e.target.value);console.log('inputV',typeof(inputOperacao))}} >
            <option value={"add"}>add</option>
            <option value={"sub"}>sub</option>
            <option value={"mult"}>mult</option>
            <option value={"div"}>div</option>
          </select>
        </label>
        <button onClick={() => dispatch({type: inputOperacao, payload:{ valor:inputNumero} })}>Resultado</button>
        <p>{`Resultado: ${state?.result}`}</p>
    </>
  );
}

export default Counter;
