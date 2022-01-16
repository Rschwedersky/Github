
import './App.css';
import { AuthProvider} from './contexts/auth';
import { Tema } from './components/Tema';
import { Layout } from './components/Layout';





function App() {

  
  return (
    <AuthProvider>
      <>
      <Tema/>
      <Layout/>
    

    </>
      
    </AuthProvider>
    

  );
}

export default App;
