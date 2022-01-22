import { useState } from 'react';
import { authContext } from './authContext';

export const AuthProvider = ({ children }) => {
  const [nome, setNome] = useState('Thais');
  const [logado,setLogado] = useState(false);

  return <authContext.Provider value={{ nome, setNome, logado, setLogado }}>{children}</authContext.Provider>;
};