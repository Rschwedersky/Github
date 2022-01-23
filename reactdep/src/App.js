import logo from './logo.svg';
import './App.css';
import { Navbar } from './Components/Navbar';
import {useState} from 'react'
import { AuthProvider} from './contexts/auth';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './themes/GlobalStyles';
import { myTheme } from './themes/themes';
import { Card } from './Components/Card/Card';



function App() {

  return (
  <>
    <AuthProvider>
      <ThemeProvider theme={myTheme}>
        <GlobalStyle />
          <div className="App">
          <Navbar/>
          <Card/>
          </div>
      </ThemeProvider>
    </AuthProvider>
  </>
    
  );
}

export default App;
