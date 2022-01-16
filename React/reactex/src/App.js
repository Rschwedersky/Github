import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { AuthProvider} from './contexts/auth';
import { Logado } from './components/Logado';



function App() {
  const [logado, setLogado] = useState(true);
  
  
  return (
    <AuthProvider>
      <>
      <Logado/>
    </>
      
    </AuthProvider>
    

  );
}

export default App;
