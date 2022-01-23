import { useState } from 'react';
import { authContext } from './authContext';

const dataInicial= [{id: 1, nome: 'Nome do Fulano', descricao: 'Descrição do funalo', seguindo: false}]
export const AuthProvider = ({ children }) => {
  
  const handleSeguindo = (e)=> {
    const newData = dados.filter((element) => element.id !== e.id);
    setDados([...newData, { ...e, seguindo: !e.seguindo }]);};
  
  const[dark, setDark]= useState(false);
  const[dados, setDados]= useState(dataInicial);

  return <authContext.Provider value={{dark, setDark, dados, handleSeguindo}}>{children}</authContext.Provider>;
};