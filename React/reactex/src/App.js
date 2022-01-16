
import './App.css';
import { AuthProvider} from './contexts/auth';
import { Tema } from './components/Tema';
import { Layout } from './components/Layout';
import { Router } from './routes/Router';
import { BrowserRouter } from 'react-router-dom';





function App() {

  
  return (
    <AuthProvider>
      <>
      <Tema/>
      <Layout/>
      <BrowserRouter>
        <Router />
      </BrowserRouter>

    

    </>
      
    </AuthProvider>
    

  );
}

export default App;
