import { useState } from 'react';
import { authContext } from './authContext';

export const AuthProvider = ({ children }) => {
  
  const[dark, setDark]= useState(false);

  return <authContext.Provider value={{  dark, setDark }}>{children}</authContext.Provider>;
};