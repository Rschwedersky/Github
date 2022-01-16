import logo from './logo.svg';
import './App.css';
import { useReducer, useState } from 'react';

const initialState = {result:0};


const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'add':
      return { result: state.result + payload.valor };
    default:
      return state;
  }
};


function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  
  return (
    <>
      
      <label style={{ paddingBottom: '10px' }}>
          Numero:
          <input type="number" value={state?.valor} onChange={(e) => dispatch({ payload:{ valor: parseInt(e.target.value) }})} />
        </label>
        <label style={{ paddingBottom: '10px' }}>
          Operação:
          <select value={state?.type} onChange={(e) => dispatch({ type: (e.target.value)})} >
            <option value={"add"}>add</option>
            <option value={"sub"}>sub</option>
            <option value={"mult"}>mult</option>
            <option value={"div"}>div</option>
          </select>
        </label>

        <p>{`Resultado: ${state?.result}`}</p>
    </>
  );
}

export default Counter;
