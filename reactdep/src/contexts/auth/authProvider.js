import { useState } from 'react';
import { authContext } from './authContext';

const dataInicial= [{ nome: 'Nome do Fulano', descricao: 'Descrição do funalo', seguindo: false, id: 0}]

export const AuthProvider = ({ children }) => {
  
  const handleSeguindo = (e)=> {
    const newData = dados.filter((element) => element.id !== e.id);
    newData.splice(e.id, 0 , { ...e, seguindo: !e.seguindo });
    setDados(newData);
  };
  
  const[dark, setDark]= useState(false);
  const[dados, setDados]= useState(dataInicial);
  const[count, setCount]= useState(1);
  const[cadastroAberto, setCadastroAberto]= useState(false);

  return <authContext.Provider value=
  {{dark, setDark, dados, handleSeguindo, setDados, count, setCount,
     cadastroAberto, setCadastroAberto}}
     >{children}</authContext.Provider>;
};